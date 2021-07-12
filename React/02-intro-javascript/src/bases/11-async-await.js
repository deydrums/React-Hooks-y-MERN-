//const getImagePromesa = () =>  new Promise(resolve =>  resolve('https://google.com'))
//getImagePromesa().then(console.log);

const getImage = async() =>{
    try{
        const apiKey = 'rabMybUsDF3yxKx6viMjjcRhAIEXcUe5';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(url);
    }catch(error){
        //Manejo del error:
        console.error(error);
    }

}

getImage();

// 


// peticion
//     .then(resp => resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//         console.log(url);
//     })
//     .catch(console.warn);