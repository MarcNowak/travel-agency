import React from 'react';
import { shallow } from 'enzyme';
import Phone from './Phone';

const select = {
  nameOne: '.nameOne',
  nameTwo: '.nameTwo',
  nameThree: '.nameThree',
};

// const mockPrps = {
//   nameOne: 'Amanda, 678.243.8455',
//   nameTwo: 'Tobias, 278.443.6443',
//   nameThree: 'Helena, 167.280.3970',
// };

describe('Component Phone', () => {

  it('TEST 100: should render without crashing', () => {
    const component = shallow(<Phone />);

    expect(component).toBeTruthy();

  });

  it('TEST 101: contains name', () => {
    const component = shallow(<Phone />);

    expect(component.exists(select.nameOne)).toEqual(true);
    expect(component.exists(select.nameTwo)).toEqual(true);
    expect(component.exists(select.nameThree)).toEqual(true);

  });

});