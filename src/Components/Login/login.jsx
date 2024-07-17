import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './login.css';
import ButtonComponent from '../../Common/Button/button';
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useNavigate();

  const gottoapplications = () => {
    history('/register');
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result.data)
        if (result.data === "Login successfully") {
          //console.log(result.data);
          console.log("============================")
          history('/myapps');
        } else {
          //console.log(result.data);
          history('/');
        }
      })
      .catch(err => console.log(err));
  };
  

  return (

    <div className="login">
      <h1>Login</h1>
      <input type="text" placeholder="Email..."
                value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
          <input type="password" placeholder="Password..."
                value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='myButtons'>
          <div className='firstbutton'>
            <ButtonComponent
              name="Login"
              onclick={handleOnSubmit}
            />
          </div>
          <div className='firstbutton'>
            <ButtonComponent
              name="Register"
              onclick={gottoapplications}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;