import { useQuery } from "react-query";
import { useState } from 'react';
import Axios from 'axios';

const UseAdvice= () => {

    const [showAdvice, setShowAdvice] = useState(false);


    const{
        data,
        refetch,
        isLoading: isAdviceLoading,
        error,
    }=useQuery(["advice"],async () => {
        //return Axios.get("https://api.adviceslip.com/advice").then((res)=>res.data);
        const response = await Axios.get("https://api.adviceslip.com/advice");
        return response.data.slip; // Pristup savetu direktno
    });

    const refetchData=()=>{
        //alert("DATA REFETCH");
        setShowAdvice(false); // Resetujemo stanje kada ponovo dohvatimo savet
        refetch();
    };

    const showAdviceOnClick = () => {
        setShowAdvice(true);
    };

    return {data,refetchData,isAdviceLoading,showAdviceOnClick, showAdvice};


};

export default UseAdvice;