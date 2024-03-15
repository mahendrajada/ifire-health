import React, { useState } from 'react';

const CreateIg = () => {
  const [fileContent, setFileContent] = useState('');
  const [contentLength, setContentLength] = useState(0); // State to store content length

  const handleSubmit = async () => {
    try {
      const headers = new Headers();
      headers.append('Content-Encoding', 'gzip');
      headers.append('Content-Length', contentLength.toString());
      headers.append('Content-Type', 'application/octet-stream'); // Add only the required Content-Type header

      const response = await fetch('http://208.109.213.14:4567/igs', {
        method: 'POST',
        headers: headers,
        body: fileContent
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  // Function to calculate content length
  const calculateContentLength = (content) => {
    return new Blob([content]).size;
  };

  return (
    <div>
      {/* File input to select the file */}
      <input type="file" onChange={(e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const fileContents = event.target.result;
          setFileContent(fileContents);
          setContentLength(calculateContentLength(fileContents)); // Calculate and set content length
        };
        reader.readAsBinaryString(file);
      }} />
      {/* Button to trigger file upload */}
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default CreateIg;
