import axios from 'axios';
import React, { useEffect, useState } from 'react';
import{ExchangeContext}from "../context/context"
import InputEX from './inputEX,';
import ScoreEx from './scoreEX';

function ExchangeApp(props) {
    let [ar, setAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = `https://freecurrencyapi.net/api/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b`
        let resp = await axios.get(url);
        setAr(resp.data.data)
        console.log(resp.data.data);
    }
    return (
        <ExchangeContext.Provider value={{ar:ar,setAr:setAr}}>
        <div className='container'>
            <InputEX />
            <ScoreEx />
        </div>
        </ExchangeContext.Provider>

    )
}

export default ExchangeApp