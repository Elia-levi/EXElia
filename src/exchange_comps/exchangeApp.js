import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ExchangeContext } from "../context/context"
import InputEX from './inputEX,';
import ScoreEx from './scoreEX';

function ExchangeApp(props) {
    let [ar, setAr] = useState([]);
    let [amount, setAmunt] = useState(1);
    let [from, setFrom] = useState("EUR");
    let [to, setTO] = useState("ILS");

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
        <ExchangeContext.Provider value={{ ar, setAmunt, setFrom, setTO, amount, from, to }}>
            <h1 className='text-center fs-1   my-4 text-danger bolder'>Exchnge</h1>
            <div className='container col-lg-8 border border-dark shadow-lg p-3 mb-5 bg-body rounded'>

                <InputEX />
                <ScoreEx />
            </div>
        </ExchangeContext.Provider>

    )
}

export default ExchangeApp