import axios from 'axios';
import React from 'react';
//
import Alert from './components/Alert/alert';

function App() {

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const files = e.target.files;
    if(files){
      const uploadedFile = files[0];
      const formData = new FormData();
      formData.append(uploadedFile.name, uploadedFile);
      axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
        headers :{
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp=>{
        console.log(resp)
      })
    }
  }
  return (
    <div className="App">
      <input type="file" name="myFile" onChange={handleFileChange}/>
    </div>
  );
}

export default App;
