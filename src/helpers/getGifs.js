
export const getGifs = async(catgry) => {
    const api_key = 'n3lAZflPuzxyOB9s3DE6AuBbpomgNZ6K'
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(catgry) }&limit=10&api_key=${api_key}`;
    const res = await fetch( url );
    const { data } = await res.json();
    //console.log(data);

    const gifsdt = data.map( img => {
        return {

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    
    return gifsdt;
    
}