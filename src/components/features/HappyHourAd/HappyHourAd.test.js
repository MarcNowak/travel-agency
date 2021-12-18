import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

describe('Component HappyHourAd', () => {
  it('TEST 23: should render without crasing', () => {
    const component = shallow(<HappyHourAd />);
    // do stałej 'component' przypisujemy funkcję renderującą 'shallow'
    // testowo renderujemy komponent HappyHourAd

    expect(component).toBeTruthy();
    // sprawdzamy czy wyrenderowany komponent istnieje
    
  });
});