import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export const DisplayArticleComp = (props) => {
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography color="text.secondary" gutterBottom>{props.lectObj.lectureArticle.article}</Typography>
            </CardContent>
        </React.Fragment>
    )
    return(
        <div id= "idSpanContent" ><Card variant="outlined" > {card} </Card><br></br>
            <Button variant="contained" color="primary" size="small" id ="idEditArticleBtn" onClick={props.displayToEditState}>Edit article.</Button >
            <Button variant="contained" color="primary" size="small"id = "idDeleteArticleBtn" onClick={props.deleteArticle}>Delete article.</Button >
        </div>
        )
    }