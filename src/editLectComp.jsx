import React, { Component, useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
export const EditLectComp = (props) => {
    const[objDuplicate, setObjDuplicate] = useState(props.lectObj);

    useEffect(()=>{
        props.onSave(objDuplicate);
    },[objDuplicate]);

    const handleOnChange = (event) => {
        const updatedLect = {...objDuplicate,...{lectureName: event.target.value}};
        setObjDuplicate(updatedLect);
    }
    function handleSaveClick(){
        const updatedLect = {...objDuplicate,...{lectEditState: false}};
        setObjDuplicate(updatedLect);
    }

    function handleCancelClick(){
        const id = objDuplicate.id;
        // console.log(id);
        props.cancelInput(id);
    }
    const inputProps ={
        required: true,
    }

    return(
        <div id = "idEditLectDiv">
            <label id = "idLectureLabel" >Lecture </label>{props.lectNum}<label>: </label>
            <TextField id = "idLectureInput" inputProps={inputProps} size="medium" placeholder = "Enter a Title." onChange={handleOnChange} value={objDuplicate.lectureName}/>
            <br></br>
            <Button variant="contained" size="small" color="primary" className='classSaveCancelBtn'  onClick={handleCancelClick}>cancel</Button>
            <Button variant="contained" size="small" color="primary" className='classSaveCancelBtn'   onClick={handleSaveClick}  >save</Button>
        </div>
    )
}
