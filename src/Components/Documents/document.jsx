import React, { useState, useEffect } from 'react';
import './document.css'; // Import CSS file for styling
import ButtonComponent from '../../Common/Button/button';
import { useNavigate } from 'react-router-dom';

function Document (){
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const navigate  = useNavigate();

  useEffect(() => {
    // Simulating fetching documents (replace with actual API call)
    const fetchedDocuments = [
      { _id: 1, filename: 'Document 1' },
      { _id: 2, filename: 'Document 2' },
      { _id: 3, filename: 'Document 3' },
    ];
    setDocuments(fetchedDocuments);
  }, []);

  const handleSelectDocument = (doc) => {
    setSelectedDocument(doc);
  };

  const handleDownload = () => {
    // Example: Download functionality (replace with actual download logic)
    if (selectedDocument) {
      alert(`Downloading ${selectedDocument.filename}`);
    } else {
      alert('Please select a document to download.');
    }
  };

  const handleUpload = () => {
    // Example: Download functionality (replace with actual download logic)
    if (selectedDocument) {
      alert(`Downloading ${selectedDocument.filename}`);
    } else {
      alert('Please select a document to download.');
    }
  };

  return (
    <div className="document-manager">
      <h2>Documents</h2>
      <ul className="document-list">
        {documents.map((doc) => (
          <li key={doc._id} onClick={() => handleSelectDocument(doc)}>
            {doc.filename}
          </li>
        ))}
      </ul>
      <input type="file" className="file-input" />
      <div className='myButtons'>
          <div className='downloadButton'>
            <ButtonComponent
              name="Download"
              onclick={handleDownload}
            />
          </div>
          <div className='uploadButton'>
            <ButtonComponent
              name="Upload"
              onclick={handleUpload}
            />
          </div>
        </div>
    </div>
  );
};

export default Document;
