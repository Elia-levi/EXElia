import React, { useContext, useRef } from 'react';
import { ExchangeContext } from "../context/context"


function InputEX(props) {
    let amountref = useRef();
    let fromref = useRef();
    let toref = useRef();

    let { setAmunt, setTO, setFrom } = useContext(ExchangeContext);

    const changAmount = () => {
        setAmunt(amountref.current.value);
    }
    const changFrom = () => {
        setFrom(fromref.current.value);
    }
    const changTo = () => {
        setTO(toref.current.value);
    }
    const changVal = () => {
        setTO(fromref.current.value);
        setFrom(toref.current.value);
        let temp=fromref
        fromref=toref;
        toref=temp;

    }

    return (
        <div className='container'>
            <h1 className='text-center display-4 my-4'>Exchnge</h1>
            <div className='justify-content-center  d-flex align-items-center '>
                <div className='me-3 col-lg-3 me-2'>
                    <label className='m-0 h4 '>Amount</label>
                    <input ref={amountref} onChange={changAmount} type="number" defaultValue="1" className='form-control ' />
                </div>
                <div className='me-3 col-lg-2'>
                    <label className='h4 m-0' >From</label>
                    <select ref={fromref} className='form-select' onChange={changFrom}>
                        <option >Choose a coins</option>
                        <option value='ILS'>ILS-Shekel</option>
                        <option value='EUR'>Eur-euro</option>
                        <option value='GBP'>GBP-British pound</option>
                        <option value='JPY'>JPY-Japanese Yen</option>
                        <option value='CNY'>CNY-Chinese Yuan</option>
                        <option value='GBP'>GBP-British pound</option>
                    </select>
                </div>
                <button onClick={changVal} className=' badge btn-info m-0 '><i className="fa fa-arrows-h" aria-hidden="true"></i>
                </button>
                <div className='ms-3 col-lg-2'>
                    <label className='h4 m-0'>To</label>
                    <select ref={toref} className='form-select' onChange={changTo}>
                        <option >Choose a coins</option>
                        <option value='ILS'>ILS-Shekel</option>
                        <option value='EUR'>Eur-euro</option>
                        <option value='GBP'>GBP-British pound</option>
                        <option value='JPY'>JPY-Japanese Yen</option>
                        <option value='CNY'>CNY-Chinese Yuan</option>
                        <option value='GBP'>GBP-British pound</option>
                    </select>
                </div>

            </div>
        </div>

    )
}

export default InputEX