import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import * as ReactFlexTable from './styles/FlexStyle';

const checkForExpandItem = (flexItem) => {
  if (flexItem) {
    return (Array.isArray(flexItem)
      ? flexItem.some((component) => component.type.defaultProps.flexname === 'FlexItemExpand')
      : flexItem.type.defaultProps.flexname === 'FlexItemExpand');
  }
  return false;
};

export function FlexTable({ children, ...restProps }) {
  return <ReactFlexTable.Table {...restProps}>{children}</ReactFlexTable.Table>;
}

export function FlexItem({ children, ...restProps }) {
  return <ReactFlexTable.Item {...restProps}>{children}</ReactFlexTable.Item>;
}

export function FlexItemExpand({ children, ...restProps }) {
  return <ReactFlexTable.ItemExpand {...restProps}>{children}</ReactFlexTable.ItemExpand>;
}

export function FlexHeader({ children, ...restProps }) {
  return <ReactFlexTable.Header {...restProps}>{children}</ReactFlexTable.Header>;
}

export function FlexFooter({ children, ...restProps }) {
  return <ReactFlexTable.Footer {...restProps}>{children}</ReactFlexTable.Footer>;
}

export function FlexRow({ children, ...restProps }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = (e) => {
    if (window.getSelection().toString() === '') {
      const flexRole = e.target.getAttribute ? e.target.getAttribute('flexname') : '';
      if (flexRole === 'FlexItem') {
        setExpanded(!expanded);
      }
    }
  };

  const enablePointer = checkForExpandItem(children);

  return (
    <ReactFlexTable.Row
      {...restProps}
      role="presentation"
      onDoubleClick={(e) => e.stopPropagation()}
      onClick={handleClick}
      onKeyUp={(e) => e.key === 'Enter' && handleClick(e)}
      enablepointer={enablePointer ? 1 : undefined}
    >
      {
        Array.isArray(children) ? (
          children.map((component) => {
            if (component.type.defaultProps.flexname === 'FlexItemExpand') {
              return (
                <FlexItemExpand key={Math.random()} itemexpanded={expanded ? 1 : undefined}>
                  {expanded && component.props.children}
                </FlexItemExpand>
              );
            }
            return component;
          })
        ) : children
      }
    </ReactFlexTable.Row>
  );
}

const standardProps = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType,
};

const defaultProps = {
  className: '',
  style: {},
};

FlexTable.propTypes = standardProps;
FlexRow.propTypes = standardProps;
FlexItem.propTypes = standardProps;
FlexItemExpand.propTypes = { ...standardProps, itemexpanded: PropTypes.number };
FlexHeader.propTypes = standardProps;
FlexFooter.propTypes = standardProps;

FlexTable.defaultProps = { ...defaultProps, flexname: 'FlexTable' };
FlexRow.defaultProps = { ...defaultProps, flexname: 'FlexRow' };
FlexItem.defaultProps = { ...defaultProps, flexname: 'FlexItem' };
FlexItemExpand.defaultProps = { ...defaultProps, flexname: 'FlexItemExpand', itemexpanded: undefined };
FlexHeader.defaultProps = { ...defaultProps, flexname: 'FlexHeader' };
FlexFooter.defaultProps = { ...defaultProps, flexname: 'FlexFooter' };
