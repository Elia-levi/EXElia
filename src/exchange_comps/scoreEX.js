import React, { useContext, useEffect, useState } from 'react';
import { ExchangeContext } from "../context/context"



function ScoreEx(props) {
    // const current = new Date();

    let [current, setcurrent] = useState(new Date());
    const date = `Date: ${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}  Time: ${current.toLocaleTimeString()}`;


    useEffect(() => {
        makeDate();
    }, [current])

    const makeDate = () => {
        setcurrent(new Date())
    }

    let { ar, amount, to, from } = useContext(ExchangeContext);

    return (
        <div className=' m-5 mb-0'>
            <h4>{amount} of {from} = </h4>
            <h3 className='display-6 '>You get: {(amount * (ar[to] / ar[from])).toFixed(4)}<span className='h2 ms-2'>{to}</span> </h3>
            <div className='mt-3 fs-5 '>{date}</div>
        </div>
    )
}

export default ScoreEx