import { Button} from '@mui/material';
import React, { Component, useEffect, useState } from 'react';
export const ContentListComp = (props) => {

    return( 
        <div id= "idArticleDiv" >
            <Button variant="contained" size="small" color="primary" id= "idArticleBtn" onClick={props.changeStateToEdit}>Article</Button >
        </div>
    )
}