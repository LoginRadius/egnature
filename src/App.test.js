import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('initially contains three labels', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('label').length).toEqual(3);
  })

  it('full name label changes to input box for fullName when clicked', ()=> {
    const wrapper = shallow(<App />);
    wrapper.find('label').at(0).simulate('click', new Event(()=>console.log("clicked")));
    expect(wrapper.find('input.name')).toBeTruthy();
  })

  it("responds to fullName change", ()=> {
    const wrapper = shallow(<App />);
    wrapper.find('label').at(0).simulate('click', new Event(()=>console.log("clicked")));
    const event = {target: {value: "Jeff Bezos"}};
    wrapper.find('input.name').simulate('change', event);
    expect(wrapper.state('fullName')).toBe('Jeff Bezos');
  })

  it("responds to title change", ()=> {
    const wrapper = shallow(<App />);
    wrapper.find('label').at(1).simulate('click', new Event(()=>console.log("clicked")));
    const event = {target: {value: "CEO of Amazon"}};
    wrapper.find('input.degnation').simulate('change', event);
    expect(wrapper.state('title')).toBe('CEO of Amazon');
  })

  it("responds to websiteurl change", ()=> {
    const wrapper = shallow(<App />);
    wrapper.find('label').at(2).simulate('click', new Event(()=>console.log("clicked")));
    const event = {target: {value: "https://www.bezosexpeditions.com/"}};
    wrapper.find('input.degnation').simulate('change', event);
    expect(wrapper.state('websiteurl')).toBe('https://www.bezosexpeditions.com/');
  })

});