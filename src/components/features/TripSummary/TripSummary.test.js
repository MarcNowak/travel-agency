import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('TEST 1: should render correct link', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(
      <TripSummary
        Link={expectedLink}
      />);

    expect(component.find('.id').prop('abc')).toEqual(expectedLink);
  });



  it('TEST 2: should check image src and alt', () => {
    const expectedAltTag = 'Alt Tag';
    const expectedTripSummaryImage = 'TripSummary.jpg';
    const component = shallow(
      <TripSummary
        imageAlt={expectedAltTag}
        imageSrc={expectedTripSummaryImage}
      />);

    const renderedAltTag = component.find('.alt').text();
    expect(renderedAltTag).not.toEqual(expectedAltTag);
    expect(component.find('.tag').prop('src')).toEqual(expectedTripSummaryImage);
  });



  it('TEST 3: should render without crashing', () => {
    const component = shallow(
      <TripSummary
        name='TripSummary name props Name Ipsum'
        cost='TripSummary cost props Cost Ipsum'
        days='TripSummary days props Days Ipsum'
      />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });



  it('TEST 4: should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });



  it('TEST 5: should submit 3 tags to TripSummary component', () => {

  });



  it('TEST 6: should not generate div className=tags if prop tags is false or empty', () => {

  });
});