import React, { Component, useState, useEffect} from 'react';
import { ContentListComp } from './contentListComp';
import { EditArticleComp } from './editArticleComp';
import { DisplayArticleComp } from './displayArticleComp';
import Button from '@mui/material/Button';
export const DisplayLectComp = (props) => {
    const [objDuplicate, setObjDuplicate] = useState(props.lectObj);

    useEffect(()=>{
        props.onSave(objDuplicate);
    },[objDuplicate])

    function handleRemoveClick(){
        props.cancelInput(objDuplicate.id);
    }
    function handleEditClick(){
        const updatedLect = {...objDuplicate,...{lectEditState: true}};
        setObjDuplicate(updatedLect);
    }

    function handleContentClick(){
        const updatedLect = {...objDuplicate,...{lectArticleDraftStatus: true}};
        setObjDuplicate(updatedLect);
    }
    function handleAddArticle(){
        const updatedLect = {...objDuplicate,...{lectureArticle: {article: objDuplicate.lectureArticle.article , state: "EDIT"}}};
        setObjDuplicate(updatedLect);
    }
   function handleEditToDisplay(updtaedLect){
    setObjDuplicate(updtaedLect);
   }
   function handleDisplayToEdit(){
    const updatedLect = {...objDuplicate,...{lectureArticle: {article: objDuplicate.lectureArticle.article , state: "EDIT"}}};
    // console.log(updatedLect);
    setObjDuplicate(updatedLect);
   }
   function handleDeleteArticle(){
    const updatedLect = {...objDuplicate,...{lectArticleDraftStatus: false, ...{lectureArticle: {article: "", state: "LIST"}}}};
    // console.log(updatedLect);
    setObjDuplicate(updatedLect);
   }

    return( 
    <div id="idDisplayLectNameDiv">
        <div id="idSpanLabel">
            <label id= "idLectureLabel" >Lecture </label>{props.lectNum}<label>: </label>
            <span id="idLectNameSpan">{props.lectName}</span>
        </div>
        <div id="idEditRemoveContentbtns">
            <Button variant="contained" color="primary" size="small" id= "idEditBtn" onClick={handleEditClick} lec={objDuplicate} >Edit</Button>
            <Button variant="contained" color="primary" size="small" id="idRemoveBtn" onClick={handleRemoveClick}>Remove</Button>
            <Button variant="contained" color="primary" size="small" id= "idcontentBtn" onClick={handleContentClick}>Content</Button>
        </div>
        {
            objDuplicate.lectArticleDraftStatus?
            objDuplicate.lectureArticle.state === "LIST"? <ContentListComp key={objDuplicate.id} changeStateToEdit={handleAddArticle} /> :
            objDuplicate.lectureArticle.state === "EDIT"? <EditArticleComp key={objDuplicate.id} lectObj={objDuplicate} editToDisplayState={handleEditToDisplay}/>:
            <DisplayArticleComp key={objDuplicate.id} lectObj={objDuplicate} deleteArticle={handleDeleteArticle} displayToEditState={handleDisplayToEdit}/>: null
        }
    </div>
    

    );
}