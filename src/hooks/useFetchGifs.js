import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( catgry ) =>{

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        
        getGifs( catgry )
            .then( img => {
                    setstate({
                        data: img,
                        loading: false
                    })
        })
        
    }, [catgry])

    /* setTimeout(() => {
        setstate({
            data: [1,2,3,4,5,6],
            loading: false
        })
    }, 3000); */

    return state
    

}