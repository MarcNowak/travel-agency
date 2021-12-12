import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('TEST 7: should render without crasing', () => {
    const component = shallow(<OrderOption type='Type Lorem ipsum' name='Name Lorem ipsum' />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('TEST 8: should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component.isEmptyRender()).toEqual(true);
  });

  it('TEST 9: should render correct title', () => {
    const OrderOptionExpectedTitle = 'Lorem ipsum';
    const component = shallow(<OrderOption name={OrderOptionExpectedTitle} />);

    const OrderOptionRenderedTitle = component.find('.title').text();
    expect(OrderOptionRenderedTitle).toEqual(OrderOptionExpectedTitle);

  });
});