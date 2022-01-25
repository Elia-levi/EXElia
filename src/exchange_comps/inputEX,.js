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
        let temp = fromref.current.value
        fromref.current.value = toref.current.value;
        toref.current.value = temp;

    }

    return (
        
            <div className='justify-content-center  d-flex align-items-center '>
                <div className='me-2 col-lg-3 '>
                    <label className='m-0 h4 '>Amount</label>
                    <input ref={amountref} onChange={changAmount} type="number" defaultValue="1" className='form-control ' />
                </div>
                <div className='mx-4 col-lg-3'>
                    <label className='h4 m-0' >From</label>
                    <select ref={fromref} defaultValue={'EUR'} className='form-select' onChange={changFrom}>
                        <option value='EUR'>Eur-euro</option>
                        <option value='ILS'>ILS-Shekel</option>
                        <option value='GBP'>GBP-British pound</option>
                        <option value='JPY'>JPY-Japanese Yen</option>
                        <option value='CNY'>CNY-Chinese Yuan</option>
                        <option value='GBP'>GBP-British pound</option>
                    </select>
                </div>
                <button onClick={changVal} className=' badge btn-info m-0  '><i className="fa fa-arrows-h" aria-hidden="true"></i>
                </button>
                <div className='mx-4 col-lg-3'>
                    <label className='h4 m-0'>To</label>
                    <select ref={toref} defaultValue={'ILS'} className='form-select' onChange={changTo}>
                        <option value='ILS'>ILS-Shekel</option>
                        <option value='EUR'>Eur-euro</option>
                        <option value='GBP'>GBP-British pound</option>
                        <option value='JPY'>JPY-Japanese Yen</option>
                        <option value='CNY'>CNY-Chinese Yuan</option>
                        <option value='GBP'>GBP-British pound</option>
                    </select>
                </div>

            </div>
        

    )
}

export default InputEX