import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test on GifGridItem.js', () => {
    const title = 'Test Component';
    const url = 'https://test.test';
    let wrapper = shallow(<GifGridItem title={title} url={url} />);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    })

    test('<GifGridItem /> should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('<GifGridItem /> <p></p> should has title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('<GifGridItem /> <img/> should has img and alt', () => {
        const img = wrapper.find('img');
        const { src, alt } = img.props();
        expect(alt).toBe(title);
        expect(src).toBe(url);
    })

    test('<GifGridItem /> <div></div> should has animate__fadeIn class', () => {
        const div = wrapper.find('div');
        const has_animate__fadeIn = div.hasClass('animate__fadeIn');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
        expect(has_animate__fadeIn).toBe(true);
    })
})