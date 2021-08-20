import React, { useState } from 'react'
import { AddCatg } from './components/addCatg';
import { GifGrid } from './components/GifGrid';



export const Gifapp = () => {

    const [catg, setcatg] = useState(['Genshin Impact'])

    /* const HndlEvnt = () =>{
        //add to botton of []
        //setcatg([...catg, 'Overwatch']);

        //add to top of []
        setcatg(['Overwatch', ...catg, ]);

        //add to top of [] using Callback with the previos [] values and send the new
        setcatg( catg => ['Overwatch', ...catg, ]);
        console.log(catg);
    }; */
    
    return (
        <>
            <h2>Gif App</h2>
            <AddCatg setcatg={setcatg} />
            <hr/>
            {/* <button onClick={ HndlEvnt } >Agregar </button> */}
            <ul>
                {
                    /* catg.map( catg => (<li key={catg} >{catg}</li>)) */
                    catg.map( catg => (
                        <GifGrid 
                            key={catg}
                            catgry={catg}
                        />
                    ))
                }
            </ul>
        </>
    )
}
