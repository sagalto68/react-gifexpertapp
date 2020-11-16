
// con el comando rafc crea la estructura

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    //const handleAdd = ()=>{

    //    setCategories( cats => [...cats, 'NuevaCategoria'] );
    // Recibe el valor del estado anterior y le añado el nuevo arreglo

    //2 si quieres que lo añada al principio
    //2 setCategories( cats => ['NuevaCategoria', ...cats ] );

    //2  Otra manera . . . . .  setCategories( [...categories, 'NuevaCategria']);

    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
// antes                   categories.map(category => (
//                          <li key={category}> {category} </li>
//                      ))
                    categories.map(category => (
                       <GifGrid
                       key = { category }
                       category = { category } />
                    ))
                }
            </ol>

        </>
    )
};

