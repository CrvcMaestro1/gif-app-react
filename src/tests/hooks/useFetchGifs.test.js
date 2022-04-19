import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test on useFetchGifs.js', () => {

    const category = 'Smash';
    test('useFetchGifs should return initial state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));

        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    })

    test('useFetchGifs should return an images array and loading in false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(5);
        expect(loading).toBeFalsy();
    })
})