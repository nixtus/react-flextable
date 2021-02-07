import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { FlexTable, FlexHeader, FlexFooter, FlexRow, FlexItem, FlexItemExpand } from '../src';

describe('FlexTable Component', () => {

  beforeEach(() => {
  });

  it('should render a base FlexTable if passed nothing for props', () => {
    const expectedResult = {
      type: 'div',
      children: null,
      props: {
        flexname: 'FlexTable'
      }
    };

    const actualResult = renderer.create(<FlexTable />).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult).toHaveStyleRule(
      'display', 'flex',
      'flex-flow', 'column wrap',
      'flex', '1 1 auto',
      'min-width', '500px',
      'table-layout', 'fixed'
    );
  });

  it('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'text-bold',
        flexname: 'FlexTable'
      },
      children: null
    };

    const actualResult = renderer.create(
      <FlexTable
        customProp="customProp"
        style={{ color: 'red' }}
        className='text-bold'
      />
    ).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.className.includes(expectedResult.props.className)).toEqual(true);
    expect(actualResult).toHaveStyleRule(
      'display', 'flex',
      'flex-flow', 'column wrap',
      'flex', '1 1 auto',
      'min-width', '500px',
      'table-layout', 'fixed'
    );
  });
});

describe('FlexItem Component', () => {

  beforeEach(() => {
  });

  it('should render a base FlexItem if passed nothing for props', () => {
    const expectedResult = {
      type: 'div',
      children: null,
      props: {
        flexname: 'FlexItem'
      }
    };

    const actualResult = renderer.create(<FlexItem />).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult).toHaveStyleRule(
      'flex-grow', '1',
      'flex-basis', '0',
      'padding', '0.5em 24px',
      'white-space', 'pre-wrap',
      'word-break', 'keep-all',
      'min-width', '0',
      'margin', 'auto'
    );
  });

  it('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'text-bold',
        flexname: 'FlexItem'
      },
      children: null
    };

    const actualResult = renderer.create(
      <FlexItem
        customProp="customProp"
        style={{ color: 'red' }}
        className='text-bold'
      />
    ).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.className.includes(expectedResult.props.className)).toEqual(true);
    expect(actualResult).toHaveStyleRule(
      'flex-grow', '1',
      'flex-basis', '0',
      'padding', '0.5em 24px',
      'white-space', 'pre-wrap',
      'word-break', 'keep-all',
      'min-width', '0',
      'margin', 'auto'
    );
  });
});

describe('FlexItemExpand Component', () => {

  beforeEach(() => {
  });

  it('should render a base FlexItemExpand not expanded css applied if passed nothing for props and itemexpanded = false', () => {
    const expectedResult = {
      type: 'div',
      props: {
        style: {},
        flexname: 'FlexItemExpand',
        itemexpanded: false
      },
      children: null
    };

    const actualResult = renderer.create(<FlexItemExpand itemexpanded={false} />).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.itemexpanded).toEqual(expectedResult.props.itemexpanded);
    expect(actualResult).toHaveStyleRule(
      'flex-grow', '1',
      'flex-basis', '0',
      'padding', '0.5em 24px',
      'white-space', 'pre-wrap',
      'word-break', 'keep-all',
      'min-width', '0',
      'margin', 'auto',
      'display', 'none',
      'opacity', '0',
    );
  });

  it('should render a base FlexItemExpand expanded css applied if passed nothing for props and itemexpanded = true', () => {
    const expectedResult = {
      type: 'div',
      props: {
        className: '',
        style: {},
        flexname: 'FlexItemExpand',
        itemexpanded: true
      },
      children: null
    };

    const actualResult = renderer.create(<FlexItemExpand itemexpanded={true} />).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.className.includes(expectedResult.props.className)).toEqual(true);
    expect(actualResult.props.itemexpanded).toEqual(expectedResult.props.itemexpanded);
    expect(actualResult).toHaveStyleRule(
      'flex-grow', '1',
      'flex-basis', '0',
      'padding', '0.5em 24px',
      'white-space', 'pre-wrap',
      'word-break', 'keep-all',
      'min-width', '0',
      'margin', 'auto',
      'display', 'default',
      'opacity', 'default',
    );
  });

  it('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'text-bold',
        itemexpanded: undefined,
        flexname: 'FlexItemExpand'
      },
      children: null
    };

    const actualResult = renderer.create(<FlexItemExpand customProp="customProp" style={{ color: 'red' }} className='text-bold' />).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.itemexpanded).toEqual(expectedResult.props.itemexpanded);
    expect(actualResult.props.customProp).toEqual(expectedResult.props.customProp);
    expect(actualResult).toHaveStyleRule(
      'flex-grow', '1',
      'flex-basis', '0',
      'padding', '0.5em 24px',
      'white-space', 'pre-wrap',
      'word-break', 'keep-all',
      'min-width', '0',
      'margin', 'auto',
      'display', 'none',
      'opacity', '0',
    );
  });
});

describe('FlexHeader Component', () => {

  beforeEach(() => {
  });

  it('should render a base FlexHeader if passed nothing for props', () => {
    const expectedResult = {
      type: 'div',
      props: {
        className: '',
        style: {},
        flexname: 'FlexHeader'
      },
      children: null,
    };

    const actualResult = renderer.create(<FlexHeader />).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.className.includes(expectedResult.props.className)).toEqual(true);
    expect(actualResult).toHaveStyleRule(
      'width', '100%',
      'display', 'flex',
      'flex-flow', 'row wrap',
      'background-color', 'transparent',
      'border-bottom', '1px solid #d0d0d0',
      'font-size', '0.8rem',
      'font-weight', '500'
    );
  });

  it('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'text-bold',
        flexname: 'FlexHeader'
      },
      children: null
    };

    const actualResult = renderer.create(<FlexHeader customProp="customProp" style={{ color: 'red' }} className='text-bold' />).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.customProp).toEqual(expectedResult.props.customProp);
    expect(actualResult.props.className.includes(expectedResult.props.className)).toEqual(true);
    expect(actualResult).toHaveStyleRule(
      'width', '100%',
      'display', 'flex',
      'flex-flow', 'row wrap',
      'background-color', 'transparent',
      'border-bottom', '1px solid #d0d0d0',
      'font-size', '0.8rem',
      'font-weight', '500'
    );
  });

});

describe('FlexFooter Component', () => {

  beforeEach(() => {
  });

  it('should render a base FlexFooter if passed nothing for props', () => {
    const expectedResult = {
      type: 'div',
      props: {
        className: '',
        style: {},
        flexname: 'FlexFooter'
      },
      children: null,
    };

    const actualResult = renderer.create(<FlexFooter />).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.customProp).toEqual(expectedResult.props.customProp);
    expect(actualResult.props.className.includes(expectedResult.props.className)).toEqual(true);
    expect(actualResult).toHaveStyleRule(
      'width', '100%',
      'display', 'flex',
      'flex-flow', 'row wrap',
      'border-bottom', '1px solid #d0d0d0',
      'font-size', '100%',
      'font-weight', '300'
    );
  });

  it('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'text-bold',
        flexname: 'FlexFooter'
      },
      children: null
    };

    const actualResult = renderer.create(<FlexFooter customProp="customProp" style={{ color: 'red' }} className='text-bold' />).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toEqual(expectedResult.children);
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.customProp).toEqual(expectedResult.props.customProp);
    expect(actualResult.props.className.includes(expectedResult.props.className)).toEqual(true);
    expect(actualResult).toHaveStyleRule(
      'width', '100%',
      'display', 'flex',
      'flex-flow', 'row wrap',
      'background-color', 'transparent',
      'border-bottom', '1px solid #d0d0d0',
      'font-size', '0.8rem',
      'font-weight', '500'
    );
  });
});

describe('FlexRow Component', () => {

  beforeEach(() => {
  });

  it('should render a base FlexRow if passed nothing for props', () => {
    const expectedResult = {
      type: 'div',
      props:
      {
        className: '',
        style:
        {
          width: '100%',
          display: 'flex',
          flexFlow: 'row wrap',
          borderBottom: '1px solid #d0d0d0',
          fontSize: '100%',
          fontWeight: 300
        },
        flexname: 'FlexRow',
        role: 'presentation',
        onDoubleClick: Function,
        onClick: Function,
        onKeyUp: Function
      },
      children: [{ type: 'div', props: [Object], children: [] }]
    };

    const actualResult = renderer.create(<FlexRow><FlexItemExpand>Test</FlexItemExpand></FlexRow>).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toBeDefined();
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.customProp).toEqual(expectedResult.props.customProp);
    expect(actualResult.props.className.includes(expectedResult.props.className)).toEqual(true);
    expect(actualResult).toHaveStyleRule(
      'width', '100%',
      'display', 'flex',
      'flex-flow', 'row wrap',
      'border-bottom', '1px solid #d0d0d0',
      'font-size', '100%',
      'font-weight', '300'
    );
  });

  it('should render custom props, custom css classes, and styles', () => {
    const expectedResult = {
      type: 'div',
      props: {
        customProp: 'customProp',
        style: { color: 'red' },
        className: 'text-bold',
        flexname: 'FlexRow'
      },
      children: null
    };

    const actualResult = renderer.create(
      <FlexRow
        customProp="customProp"
        style={{ color: 'red' }}
        className='text-bold'
      />
    ).toJSON();

    expect(actualResult.type).toEqual(expectedResult.type);
    expect(actualResult.children).toBeNull();
    expect(actualResult.props.flexname).toEqual(expectedResult.props.flexname);
    expect(actualResult.props.customProp).toEqual(expectedResult.props.customProp);
    expect(actualResult.props.className.includes(expectedResult.props.className)).toEqual(true);
    expect(actualResult).toHaveStyleRule(
      'width', '100%',
      'display', 'flex',
      'flex-flow', 'row wrap',
      'border-bottom', '1px solid #d0d0d0',
      'font-size', '100%',
      'font-weight', '300'
    );
  });
});