import React, { useRef } from 'react';

function InputEX(props) {
    let amountref = useRef();
    let fromref = useRef();
    let toref = useRef();

    const changVal=()=>{
        let temp;
        temp=fromref.current.value
        fromref=toref.current.value;
        toref=temp;
    }

    return (
        <div className='container'>
            <h1 className='text-center display-4'>Exchnge</h1>
            <div className='col-lg-4  d-flex align-items-center'>
                <label className='me-2'>Amount:</label>
                <input  ref={amountref }  type="number" defaultValue="1" className='form-control me-3 w-50' />
                <label className='me-2' >from:</label>
                <input ref={fromref}  type="text" className=' form-control w-50' />
                <button  onClick={changVal} className='btn-sm btn btn-outline-primary mx-3 '><i className="fa fa-arrows-h" aria-hidden="true"></i>
                </button>
                <label ref={toref} className='me-2'>to:</label>
                <input type="text" className='w-50  form-control' />

            </div>
        </div>
    )
}

export default InputEX