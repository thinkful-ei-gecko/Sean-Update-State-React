import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Accordian from './Accordian';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]


describe('Accordian Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders and empty li when the sections prop is not supplied', () => {
    const wrapper = shallow (<Accordian />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders no sections as active by default', () => {
    const wrapper = shallow (<Accordian text={sectionsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('opens a clicked section', () => {
    const wrapper = shallow(<Accordian text={sectionsProp} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('only opens the last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordian text={sectionsProp} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})