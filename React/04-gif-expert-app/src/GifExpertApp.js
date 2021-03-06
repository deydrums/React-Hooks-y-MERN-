import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = ['One Punch']}) => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(defaultCategories);
    
    // const handleAdd = () =>{
    //     setCategories([...categories, 'HunterXHunter']);
    // }



    return (
        <>
            <section className="textos-header">
                <h1>GifExpertApp</h1>
                <h2>Busca cualquier gif en nuestra web</h2>
                <AddCategory setCategories = {setCategories}/>
            </section>

            
            {/* <AddCategory categories = {categories} setCategories = {setCategories}/> */}
            {/* <button onClick={handleAdd}>Agregar</button> */}

            {
                categories.map(category => (
                    <GifGrid
                        category = {category}
                        key = {category}
                    />
                ))
            }

        </>
    );
      
}
