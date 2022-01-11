import { Button, TextField} from '@mui/material';
import React, { Component, useState, useEffect} from 'react';

export const EditArticleComp = (props) => {
    const [objDuplicate, setObjDuplicate] = useState(props.lectObj);
    useEffect(() => {
        console.log(objDuplicate);
        props.editToDisplayState(objDuplicate);
    },[objDuplicate]);
    
    function handleOnChange(event){
        const updatedLec = {...objDuplicate,...{lectureArticle:{article: event.target.value, state: 'EDIT'}}}
        setObjDuplicate(updatedLec);
    }

    function handleOnClick(){
        const updatedLec = {...objDuplicate,...{lectureArticle: {article: objDuplicate.lectureArticle.article, state: 'DISPLAY'}}}
        setObjDuplicate(updatedLec);
    }
    const inputProps ={
        required: true,
        multiline: false,
        minRows: "5",
    }
    return( <div id= "idTextAreaDiv">
        <TextField  id= "idArticle" inputProps={inputProps} multiline= {true} placeholder = "Enter a article." value={objDuplicate.lectureArticle.article} onChange={handleOnChange}></TextField>
        <Button variant="contained" size="small" color="primary" id= "idSaveArticleBtn" onClick={handleOnClick} >Save Article</Button>
    </div>

    )


}