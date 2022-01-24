import React, { useContext, useEffect, useState } from 'react';
import{ExchangeContext}from "../context/context"



function ScoreEx(props){


    let{ar,amount,to,from,worth}=useContext(ExchangeContext);

    return(
        <div>
            {amount} {from} =
            <h2 className='display-6'>{worth} </h2>
        </div> 
    )
}

export default ScoreEx