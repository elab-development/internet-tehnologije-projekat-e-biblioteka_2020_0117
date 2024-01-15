import UseAdvice from './UseAdvice';
import React from 'react';

const Advice = () =>{
    const {data, isAdviceLoading, refetchData,  showAdviceOnClick, showAdvice} = UseAdvice();
    if(isAdviceLoading) return <h4>Loading...</h4>;
    return (
        <div>
            <button onClick={showAdviceOnClick}>Show advice</button>
           <button onClick={refetchData}>Remove advice</button>
            
            {showAdvice && <h3>{data?.advice}</h3>}
        </div>
    );
};

export default Advice;

