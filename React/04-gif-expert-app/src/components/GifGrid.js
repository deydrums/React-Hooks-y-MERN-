import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    // const [images, setimages] = useState([]);
    const {loading} = useFetchGifs();
    console.log(loading);



    // useEffect(() =>{
    //     //getGifs(category).then(imgs => setimages(imgs));
    //     getGifs(category).then(setimages);
    // },[category])

    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Cargando...' : 'Data Cargada'}
            {/* <div className ="card-grid">
                
                {
                    images.map(img =>(
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div> */}
        </>
    )
}
