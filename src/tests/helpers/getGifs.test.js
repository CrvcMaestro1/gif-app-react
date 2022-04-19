import { getGifs } from "../../helpers/getGifs"

describe('Test on getGifs fetch', () => {
    test('getGifs should bring 5 items', async () => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(5);
    })

    test('getGifs should bring 0 items when category is empty', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})