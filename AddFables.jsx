import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
 
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

const themes = ['Action & Adventure', 'Animal', 'Children\'s Fiction', 'Science Fiction'];
const randomTheme = () => {
  return randomArrayItem(themes);
};

const initialRows = [
  {
    id: randomId(),
    title: 'The Adventure of Fable 1',
    author: 'John Doe',
    audio: 'https://example.com/audio1.mp3',
    video: 'https://example.com/video1.mp4',
    document: 'https://example.com/document1.pdf',
    coverImage: 'https://example.com/cover1.jpg',
    theme: randomTheme(),
    isNew: false,
  },
  {
    id: randomId(),
    title: 'The Story of three pigs',
    author: 'by L.Leslie Brooke',
    audio: 'https://example.com/audio1.mp3',
    video: 'https://example.com/video1.mp4',
    document: 'https://example.com/document1.pdf',
    coverImage: 'https://example.com/cover1.jpg',
    theme: randomTheme(),
    isNew: false,
  },
  {
    id: randomId(),
    title: 'Japanese Fairy Tales',
    author: 'by Saroj Nepal',
    audio: 'https://example.com/audio1.mp3',
    video: 'https://example.com/video1.mp4',
    document: 'https://example.com/document1.pdf',
    coverImage: 'https://example.com/cover1.jpg',
    theme: randomTheme(),
    isNew: false,
  },
  {
    id: randomId(),
    title: 'Ghost Breaker',
    author: 'by Dickey ,paul',
    audio: 'https://example.com/audio1.mp3',
    video: 'https://example.com/video1.mp4',
    document: 'https://example.com/document1.pdf',
    coverImage: 'https://example.com/cover1.jpg',
    theme: randomTheme(),
    isNew: false,
  },
  {
    id: randomId(),
    title: 'Columbus',
    author: 'John Doe',
    audio: 'https://example.com/audio1.mp3',
    video: 'https://example.com/video1.mp4',
    document: 'https://example.com/document1.pdf',
    coverImage: 'https://example.com/cover1.jpg',
    theme: randomTheme(),
    isNew: false,
  },
  {
    id: randomId(),
    title: 'The Adventure of Fable 1',
    author: 'John Doe',
    audio: 'https://example.com/audio1.mp3',
    video: 'https://example.com/video1.mp4',
    document: 'https://example.com/document1.pdf',
    coverImage: 'https://example.com/cover1.jpg',
    theme: randomTheme(),
    isNew: false,
  },
  // More initial rows...
];

function AddFables() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'title', headerName: 'Title', width: 180, editable: true },
    { field: 'author', headerName: 'Author', width: 150, editable: true },
    { field: 'audio', headerName: 'Audio', width: 180, editable: true },
    { field: 'video', headerName: 'Video', width: 180, editable: true },
    { field: 'document', headerName: 'Document', width: 180, editable: true },
    { field: 'coverImage', headerName: 'Cover Image', width: 180, editable: true },
    {
      field: 'theme',
      headerName: 'Theme',
      width: 150,
      editable: true,
      type: 'singleSelect',
      valueOptions: themes,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, title: '', author: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'title' },
    }));
  };

  return (
    <div>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Fable
      </Button>
    </div>
  );
}

export default AddFables;









