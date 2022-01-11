import React, { Component, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import {EditLectComp} from './editLectComp';
import {DisplayLectComp} from './displayLectComp';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
function App() {
  const [status, setStatus] = useState('');
  useEffect(() => {
    setStatus('Loading');
    var url = "https://jsonblob.com/api/jsonBlob/929354204171223040";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setLectArr(json);
        console.log(json);
        setStatus('');
      } catch (error) {
        console.log("error", error);
        setStatus('error.');
      }
    };
    fetchData();
  }, []);

  const [lectArr, setLectArr] = useState([]);

  function createUUID(){
    return uuidv4();
  }

  function handleAddBtn(){
    setLectArr([...lectArr,{id: createUUID(), lectureName: "", lectEditState: true, lectArticleDraftStatus: false, lectureArticle: {article: "", state: "LIST"}}]);  
  }

  function handleCancelInput(id){
    const lectArrDuplicate = [...lectArr];
    const indexInArrToRemove = lectArr.findIndex(lec=>lec.id===id);
    lectArrDuplicate.splice(indexInArrToRemove, 1);
    setLectArr(lectArrDuplicate); 
  }

  function handleOnSave(updatedLectObj){
    const lectArrDuplicate = [...lectArr];
    const indexInArrToUpdate = lectArr.findIndex(lec=>lec.id===updatedLectObj.id);
    lectArrDuplicate[indexInArrToUpdate]=updatedLectObj;
    setLectArr(lectArrDuplicate);

    // console.log(lectArrDuplicate);
   
  }
  return (
    <div className="App">
      <Button variant="contained" color="primary" id="idAddBtn" onClick = {handleAddBtn}>Add</Button>
      <br></br>
      {status === 'Loading' && <CircularProgress sx={{alignItems: 'center'}}/> }
      {lectArr.map((lec, index) => {
        return lec.lectEditState ? <EditLectComp key= {lec.id} lectNum = {index + 1} lectObj = {lec} onSave={handleOnSave} cancelInput={handleCancelInput} errorMsg={<button />}/> : <DisplayLectComp key={lec.id} lectNum = {index + 1} lectObj = {lec} onSave={handleOnSave} lectName = {lec.lectureName} cancelInput={handleCancelInput} /> ;   
        }
      )}
    </div>
  );
}

export default App;
