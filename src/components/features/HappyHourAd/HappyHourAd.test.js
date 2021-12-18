import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Header Title Lorem Ipsum',
  promoDescription: 'Promo Description Lorem Ipsum',
};

describe('Component HappyHourAd', () => {

  it('TEST 23: should render without crasing', () => {
    const component = shallow(<HappyHourAd />);
    // do stałej 'component' przypisujemy funkcję renderującą 'shallow'
    // testowo renderujemy komponent HappyHourAd

    expect(component).toBeTruthy();
    // sprawdzamy czy wyrenderowany komponent istnieje

  });

  it('TEST 24: contains H3 title and Promo Description', () => {
    const component = shallow(<HappyHourAd />);
    // do stałej 'component' przypisujemy funkcję renderującą 'shallow'

    expect(component.exists(select.title)).toEqual(true);
    // sprawdzamy czy wyrenderowany element z obiektu select o wartości .title istnieje

    expect(component.exists(select.promoDescription)).toEqual(true);
    // sprawdzamy czy wyrenderowany element z obiektu select o wartości .promoDescription istnieje

  });

  it('TEST 25: render correct header title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);

    expect(component.find(select.title).text()).toEqual(mockProps.title);
    console.log(component.debug());
  
  });


});