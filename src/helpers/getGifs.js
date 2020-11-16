
    export const getGifs = async ( category ) => {

        const url =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=012uapG4aR2Xj5bmuJhF1UQUp2T3lScl`
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            // const gifs = data.map(({ id, title, images  }) => { desestructurado
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
                // se pone signo de interrogacion por si no viene imagen 
            }
        })

        return gifs;
    
    }