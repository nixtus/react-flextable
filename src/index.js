import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './index.scss';

const checkForExpandItem = flexItem => (Array.isArray(flexItem)
  ? flexItem.some(component => component.type.defaultProps.flexname === 'FlexItemExpand')
  : flexItem.type.defaultProps.flexname === 'FlexItemExpand');

export const FlexTable = props => (
  <div {...props} className={`flex-table ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

export const FlexItem = props => <div {...props} className={`flex-item ${props.className}`} style={props.style}>{props.children}</div>;

export const FlexItemExpand = props => <div {...props} className={`flex-item flex-expand${props.expanded ? '' : ' flex-hidden'}`} style={props.style}>{props.children}</div>;

export const FlexHeader = props => (
  <div {...props} className={`flex-header ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

export const FlexFooter = props => (
  <div {...props} className={`flex-row ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

export class FlexRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (window.getSelection().toString() === '') {
      const { expanded } = this.state;
      const flexRole = e.target.getAttribute ? e.target.getAttribute('flexname') : '';
      if (flexRole === 'FlexItem') { this.setState({ expanded: !expanded }); }
    }
  }

  render() {
    const enablePointer = checkForExpandItem(this.props.children);
    return (
      <div
        {...this.props}
        role="presentation"
        flex-role="flex-row"
        className={`flex-row flex-body-row ${enablePointer ? ' cursor-pointer' : ''} ${this.props.className}`}
        style={this.props.style}
        onDoubleClick={e => e.stopPropagation()}
        onClick={this.handleClick}
        onKeyUp={e => e.keyCode === 13 && this.handleClick(e)}
      >
        {
          Array.isArray(this.props.children) ? (
            this.props.children.map((component) => {
              if (component.type.defaultProps.flexname === 'FlexItemExpand') {
                return (
                  <FlexItemExpand key={Math.random()} expanded={this.state.expanded ? 'true' : undefined}>
                    {component.props.children}
                  </FlexItemExpand>
                );
              }
              return component;
            })
          ) : this.props.children
        }
      </div>
    );
  }
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
FlexItemExpand.propTypes = { ...standardProps, expanded: PropTypes.bool };
FlexHeader.propTypes = standardProps;
FlexFooter.propTypes = standardProps;

FlexTable.defaultProps = { ...defaultProps, flexname: 'FlexTable' };
FlexRow.defaultProps = { ...defaultProps, flexname: 'FlexRow' };
FlexItem.defaultProps = { ...defaultProps, flexname: 'FlexItem' };
FlexItemExpand.defaultProps = { ...defaultProps, flexname: 'FlexItemExpand', expanded: false };
FlexHeader.defaultProps = { ...defaultProps, flexname: 'FlexHeader' };
FlexFooter.defaultProps = { ...defaultProps, flexname: 'FlexFooter' };
