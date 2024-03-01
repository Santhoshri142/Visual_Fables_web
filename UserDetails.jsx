import React from "react"
import MUIDataTable from "mui-datatables";
import { UserData } from "../../dummydata";
const UserDetails = () => {
    
    return (
      <>
     
          <MUIDataTable
            title="User Details List"
            data={UserData}
            columns={["Id","First Name", "Last Name", "Phone Number", "E-mail" ,"Place","Gender" , "Age"]}
            options={{
              filterType: "checkbox",
            }}
          />
        
      </>
  );
}

export default UserDetails


