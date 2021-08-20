import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCatg = ({ setcatg }) => {

    const [InpVal, setInpt] = useState('')

    const hndlInpt = (e) =>{
        //console.log(e.target.value);
        setInpt(e.target.value);
    }
    
    const hndlSmmt = (e) =>{
        e.preventDefault();
        
        if( InpVal.trim().length > 2 ){
            
            setcatg(catg => [InpVal, ...catg  ]);
            setInpt('');

        }


        console.log('Submmited');
    }
    return (
        <>
            <form onSubmit = { hndlSmmt } >
                <h2>Add Category</h2>
                <input type= "text" value={ InpVal } placeholder='Type here' onChange= { hndlInpt }/>
            </form>
        </>
    )
}

AddCatg.propTypes = {
    setcatg: PropTypes.func.isRequired
}

