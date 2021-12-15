import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';
import Icon from './OrderOptionIcons';

describe('Component OrderOption', () => {
  it('TEST 7: should render without crashing', () => {
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
    const expectedType = 'text';
    const component = shallow(<OrderOption name={OrderOptionExpectedTitle} type={expectedType} />);

    const OrderOptionRenderedTitle = component.find('.title').text();
    expect(OrderOptionRenderedTitle).toEqual(OrderOptionExpectedTitle);

  });
});


const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
    { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />,
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });


    /* common tests */
    it(`TEST 10: renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        it('TEST 11: contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          // w wyrenderowanym komponencie szukam elementu typu SELECT

          expect(select.length).toBe(1);
          // jeśli znajdę selecta i jeśli jest przynajmniej 1. Ile select, taka długość length

          const emptyOption = select.find('option[value=""]').length;
          // szukam  w selekcie pustej opcji i przypisuję ile znalazłem

          expect(emptyOption).toBe(1);
          // sprawdzam czy wartość znalezionych pustych opcji = oczekiwane 1

          const options = select.find('option').not('[value=""]');
          // szukam w selekcie wszystkich opcji które nie są puste ("niepuste" value)

          expect(options.length).toBe(mockProps.values.length);
          // sprawdzam czy liczba opcji "niepustych" zgadza się z liczbą mockProps.values

          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          // czy pierwsza znaleziona wartość = pierwszej wartości z mockprops

          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          // czy druga...
        });

        it('TEST 12: should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'icons': {
        it('TEST 13: contains div o klasie icon', () => {
          const icons = renderedSubcomponent.find(Icon);
          expect(icons).toBeTruthy();
          expect(icons.length).toBe(3);
         
        });

        it('TEST 14: should run setOrderOption function on change', () => {
          renderedSubcomponent.find('div.icon').simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });

        });
        break;
      }

      case 'checkboxes': {
        it('TEST 15: contains div and label', () => {

        });

        it('TEST 16: should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input[value="' + testValue + '"]').simulate('change', { currentTarget: { checked: true } });
          // wuszukuje inputa o konkrentnym VALUE
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.id, testValue] });

        });
        break;
      }

      case 'number': {
        it('TEST 17: contains div and input', () => {

        });

        it('TEST 18: should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValueNumber } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }

      case 'text': {
        it('TEST 19: contains input', () => {

        });

        it('TEST 20: should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'date': {
        it('TEST 21: contains datePicker', () => {
          const datePicker = renderedSubcomponent.find(DatePicker);
          expect(datePicker).toBeTruthy();
          expect(datePicker.length).toBe(1); 
          

        });

        it('TEST 22: should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });

        });
        break;
      }

    }
  });
}