import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test on GifGrid.js', () => {
    const category = 'Smash';

    test('<GifGrid /> should display the component correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('<GifGrid /> should display items when images has loaded with useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https:://test.test',
            title: 'Anything'
        }, {
            id: '123',
            url: 'https:://test.test',
            title: 'Anything'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})