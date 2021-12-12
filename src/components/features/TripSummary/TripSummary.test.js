import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('TEST 1: should render correct link', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(
      <TripSummary
        id={'abc'}
        image={'name'}

      />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });



  it('TEST 2: should check image src and alt', () => {
    const expectedAltTag = 'Alt Tag';
    const expectedTripSummaryImage = 'TripSummary.jpg';
    const component = shallow(
      <TripSummary
        name={expectedAltTag}
        image={expectedTripSummaryImage}

      />);

    expect(component.find('img').prop('src', 'alt')).toEqual(expectedTripSummaryImage, expectedAltTag);

    // const renderedAltTag = component.find('.alt').text();
    // expect(renderedAltTag).not.toEqual(expectedAltTag);
    // expect(component.find('.tag').prop('src')).toEqual(expectedTripSummaryImage);
  });



  it('TEST 3: should render without crashing', () => {
    const component = shallow(
      <TripSummary
        image='TripSummary name props Name Ipsum'
        cost='TripSummary cost props Cost Ipsum'
        days={123}
      />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });



  it('TEST 4: should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });



  it('TEST 5: should submit 3 tags to TripSummary component', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(
      <TripSummary
        name='TripSummary name props Name Ipsum'
        tags={expectedTags}
      />);

    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
  });



  it('TEST 6: should not generate div className=tags if prop tags is false or empty', () => {

    const component = shallow(
      <TripSummary
        name='TripSummary name props Name Ipsum'
      />);

    expect(component.find('.tags').exists()).toEqual(false);
  });
});