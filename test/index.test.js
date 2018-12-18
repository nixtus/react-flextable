import React from 'react';
import renderer from 'react-test-renderer';
import { FlexTable, FlexHeader, FlexFooter, FlexRow, FlexItem, FlexItemExpand } from '../src';

describe('FlexTable Component', () => {
  let component = null;

  beforeEach(() => {
  });

  it('should render a base FlexTable if passed nothing for props', () => {
    const expectedResult = {
      type: 'div',
      props: {
        className: 'flex-table ',
        style: {},
        flexname: 'FlexTable'
      },
      children: null,
    };

    const actualResult = renderer.create(<FlexTable />).toJSON();

    expect(actualResult).toEqual(expectedResult);
  });

  it('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'flex-table text-bold',
        flexname: 'FlexTable'
      },
      children: null
    };

    const actualResult = renderer.create(<FlexTable customProp="customProp" style={{ color: 'red' }} className='text-bold' />).toJSON();

    expect(actualResult).toEqual(expectedResult);
  });
});

describe('FlexHeader Component', () => {
  let component = null;

  beforeEach(() => {
  });

  it('should render a base FlexHeader if passed nothing for props', () => {
    const expectedResult = {
      type: 'div',
      props: {
        className: 'flex-header ',
        style: {},
        flexname: 'FlexHeader'
      },
      children: null,
    };

    const actualResult = renderer.create(<FlexHeader />).toJSON();

    expect(actualResult).toEqual(expectedResult);
  });

  it('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'flex-header text-bold',
        flexname: 'FlexHeader'
      },
      children: null
    };

    const actualResult = renderer.create(<FlexHeader customProp="customProp" style={{ color: 'red' }} className='text-bold' />).toJSON();

    expect(actualResult).toEqual(expectedResult);
  });
});

describe('FlexFooter Component', () => {
  let component = null;

  beforeEach(() => {
  });

  it('should render a base FlexFooter if passed nothing for props', () => {
    const expectedResult = {
      type: 'div',
      props: {
        className: 'flex-row ',
        style: {},
        flexname: 'FlexFooter'
      },
      children: null,
    };

    const actualResult = renderer.create(<FlexFooter />).toJSON();

    expect(actualResult).toEqual(expectedResult);
  });

  it('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'flex-row text-bold',
        flexname: 'FlexFooter'
      },
      children: null
    };

    const actualResult = renderer.create(<FlexFooter customProp="customProp" style={{ color: 'red' }} className='text-bold' />).toJSON();

    expect(actualResult).toEqual(expectedResult);
  });
});

describe('FlexRow Component', () => {
  let component = null;

  beforeEach(() => {
  });

  xit('should render a base FlexRow if passed nothing for props', () => {
    const expectedResult = {
      type: 'div',
      props: {
        className: 'flex-row flex-body-row  ',
        style: {},
        flexname: 'FlexRow',
        role: 'presentation',
        onDoubleClick: () => null,
        onClick: () => null,
        onKeyUp: () => null
      },
      children: [{
        type: 'div',
        props: [Object],
        children: [Array]
      }]
    };

    const actualResult = renderer.create(<FlexRow><FlexItem>Test</FlexItem></FlexRow>).toJSON();
    console.log(actualResult)
    console.log(expectedResult)
    expect(actualResult).toEqual(expectedResult);
  });

  xit('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'flex-row text-bold',
        flexname: 'FlexRow'
      },
      children: null
    };

    const actualResult = renderer.create(<FlexRow customProp="customProp" style={{ color: 'red' }} className='text-bold' />).toJSON();

    expect(actualResult).toEqual(expectedResult);
  });
});