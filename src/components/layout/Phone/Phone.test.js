import React from 'react';
import { shallow } from 'enzyme';
import Phone from './Phone';

const select = {
  name: '.name',
};

const mockProps = {
  name: '8:00 - 12:00 - Amanda, 678.243.8455',
};

describe('Component Phone', () => {

  it('TEST 100: should render without crashing', () => {
    const component = shallow(<Phone />);

    expect(component).toBeTruthy();

  });

  it('TEST 101: should contain name', () => {
    const component = shallow(<Phone />);
    expect(component.exists(select.name)).toEqual(true);

  });

  it('TEST 102: should contain correct name', () => {
    const component = shallow(<Phone {...mockProps} />);

    expect(component.find(select.name).text()).toEqual(mockProps.name);
  });
  
});