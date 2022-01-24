import React, { useContext } from 'react';
import{ExchangeContext}from "../context/context"



function ScoreEx(props){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    let{ar,amount,to,from}=useContext(ExchangeContext);

    return(
        <div className='col-lg-10 mx-auto mt-4'>
            <h4>{amount} of {from} = </h4>
            <h3 className='display-6'>{(amount*(ar[to]/ar[from])).toFixed(4)}<span className='h2 ms-2'>{to}</span> </h3>
            <h4>{date}</h4>
        </div> 
    )
}

export default ScoreEx