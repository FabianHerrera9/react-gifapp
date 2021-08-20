import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({catgry}) => {

    const { data:imgs ,loading} = useFetchGifs(catgry);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown" >{catgry}</h3>

            {loading && <p className="animate__animated animate__flash" >loading</p> }
           <div className="card-grid">
                    {
                        imgs.map(imgs =>(
                            <GifGridItem 
                                key={imgs.id} 
                                {...imgs}
                            />
                        ))
                    } 
            </div>
        </>
    )
}
