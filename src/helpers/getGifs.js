export const getGifs = async (category = '') => {
    const api_key = 'Ox3VPGUrWZoBbWvImw4XXQ2GqyuirAHp';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=${api_key}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}