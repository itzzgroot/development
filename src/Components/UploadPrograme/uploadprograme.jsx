import React, { useState, useEffect } from 'react';
import './uploadprograme.css'; // Import CSS file for styling
import ButtonComponent from '../../Common/Button/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Solutions from '../MySolutions/solutions';

function Uploadprograme() {

  const [problem, setProblem] = useState("")
  const [answer, setAnswer] = useState("")

  const navigate = useNavigate()

  const gotosolutions = () => {
    navigate('/solutions');
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/uploadprograme', { problem, answer })
      .then(result => {
        alert("Uploaded successfully !!!");
        setProblem("");
        setAnswer("");
        navigate('/uploadprograme');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="document-manager">
      <div className='problem'>
        <input type='text'
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Enter your problem here" />
      </div>
      <div className='answer'>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer here"
        />
      </div>
      <div className='mybuttons'>
        <div className='uploadButton'>
          <ButtonComponent
            name="Solutions"
            onclick={gotosolutions}
          />
        </div>

        <div className='downloadButton'>
          <ButtonComponent
            name="Add"
            onclick={handlesubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Uploadprograme;
