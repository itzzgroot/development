import { useState } from 'react'
import './register.css';
import axios from 'axios';
import { UNSAFE_DataRouterStateContext, useNavigate } from 'react-router-dom';
import ButtonComponent from '../../Common/Button/button';

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const gottoapplications = () => {
      navigate('/');
    };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {firstName, lastName, email, password})
    .then(result=> {alert("Data saved succesfully")
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    navigate('/')}).catch(err=> console.log(err))
}
  
    return (

        <div className="register">
        <h1>Register</h1>
          <input type="text" placeholder="Firstname..."
                value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
          <input type="text" placeholder="Lastname..."
                value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
          <input type="text" placeholder="Email..."
                value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
          <input type="password" placeholder="Password..."
                value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='myButtons'>
          <div className='firstbutton'>
            <ButtonComponent
              name="Login"
              onclick={gottoapplications}
            />
          </div>
          <div className='firstbutton'>
            <ButtonComponent
              name="Register"
              onclick={handleOnSubmit}
            />
          </div>
        </div>
      </div>
        </div>    
    );
  }

  export default Register;