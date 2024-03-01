import { useHistory } from "react-router-dom";

export default function LoginButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/SignIn");
  }

  return (
    <button className='primary-btn' type="button" onClick={handleClick}>
    
      SIGN IN TO GET STARTED    
    
    </button>
  );
}
