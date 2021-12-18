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

  it('TEST 23: should render without crashing', () => {
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
  
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`TEST 26: should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.descr).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});