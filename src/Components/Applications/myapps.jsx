import { useNavigate } from 'react-router-dom';
import './myapps.css';
import ButtonComponent from '../../Common/Button/button';
import FlexDiv from '../../Common/FlexDiv/flexdiv';
import profileImage from '../../Icons/check.png';
import workout from '../../Icons/workout.png';


function Applications() {
  const navigate = useNavigate(); // Use navigate instead of history

  const handleClick = () => {
    navigate("/document") // Navigate to the 'register' route
  };

  const goforworkout = () => {
    navigate("/uploadprograme") // Navigate to the 'upload programe' route
  };

  return (
    <div className="myapps">
      <h1>My Applications</h1>
      <div className='flexdivision'>
        <div className='flexx' onClick={handleClick} >
          <img src={profileImage}></img>
        </div>
        <div className='flexx' onClick={goforworkout} >
          <img src={workout}></img>
        </div>
        <div className='flexx'></div>
        <div className='flexx'></div>
      </div>
      <div className='flexdivision-next'>
        <div className='flexx'></div>
        <div className='flexx'></div>
        <div className='flexx'></div>
        <div className='flexx'></div>
      </div>
    </div>
  );
}

export default Applications;
