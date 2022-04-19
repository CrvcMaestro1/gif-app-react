import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

jest.mock('../hooks/useFetchGifs');

describe('Test on GifExpertApp.js', () => {

    test('<GifExpertApp /> should display the component correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('<GifExpertApp /> should display category list', () => {
        const categories = ['Smash', 'Pumpkin'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper.find('AddCategory').length).toBe(wrapper.length);
    })
})