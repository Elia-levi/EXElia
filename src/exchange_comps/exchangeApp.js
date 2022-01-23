import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputEX from './inputEX,';
import ScoreEx from './scoreEX';

function ExchangeApp(props) {
    let [ar, setAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = `http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb`
        let resp = await axios.get(url);
        setAr(resp.data)
        console.log(resp.data);
    }
    return (
        <div className='container'>
            <InputEX />
            <ScoreEx />
        </div>
    )
}

export default ExchangeApp