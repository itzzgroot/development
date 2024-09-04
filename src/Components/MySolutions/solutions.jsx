import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import './solutions.css'; // Import CSS file for styling
import ButtonComponent from '../../Common/Button/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Solutions() {

    const [dataList, setDataList] = useState([]);

    const navigate = useNavigate()

    const addproblems = () => {
        navigate('/uploadprograme');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/uploadprograme');
                setDataList(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelectedItem = () => {
       navigate('/popup');
    };

    return (
        <div className="solution-manager">
            <h2>Solutions</h2>
            <ul className="document-list">
                {dataList.map((doc) => (
                    <li key={doc._id} onClick={() => handleSelectedItem(doc)}>
                        {doc.problem}
                    </li>
                ))}
            </ul>
            <div className='myButtons'>
                <div className='uploadButton'>
                    <ButtonComponent
                        name="Add Problems"
                        onclick={addproblems}
                    />
                </div>
            </div>
        </div>
    );
};

export default Solutions;
