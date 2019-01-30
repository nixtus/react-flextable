import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './index.scss';

const styles = {
  flexTable: {
    display: 'flex', flexFlow: 'column wrap', flex: '1 1 auto', minWidth: 500, tableLayout: 'fixed',
  },
  flexItem: {
    flexGrow: 1, flexBasis: 0, padding: '0.5em 24px', whiteSpace: 'pre-wrap', wordBreak: 'keep-all', minWidth: 0, margin: 'auto',
  },
  flexHeader: {
    width: '100%', display: 'flex', flexFlow: 'row wrap', backgroundColor: 'transparent', borderBottom: '1px solid #d0d0d0', fontSize: '0.8rem', fontWeight: 500,
  },
  flexRow: {
    width: '100%', display: 'flex', flexFlow: 'row wrap', borderBottom: '1px solid #d0d0d0', fontSize: '100%', fontWeight: 300,
  },
  flexHidden: {
    display: 'none', opacity: 0,
  },
  cursorPointer: {
    cursor: 'pointer',
  },
};

const checkForExpandItem = flexItem => (Array.isArray(flexItem)
  ? flexItem.some(component => component.type.defaultProps.flexname === 'FlexItemExpand')
  : flexItem.type.defaultProps.flexname === 'FlexItemExpand');

// export const FlexTable = props => (
//   <div {...props} className={`flex-table ${props.className}`} style={props.style}>
//     {props.children}
//   </div>
// );
export const FlexTable = props => (
  <div {...props} className={props.className} style={{ ...styles.flexTable, ...props.style }}>
    {props.children}
  </div>
);

// export const FlexItem = props => <div {...props} className={`flex-item ${props.className}`} style={props.style}>{props.children}</div>;
export const FlexItem = props => (
  <div {...props} className={props.className} style={{ ...styles.flexItem, ...props.style }}>
    {props.children}
  </div>
);

// export const FlexItemExpand = props => <div {...props} className={`flex-item flex-expand${props.itemExpanded ? '' : ' flex-hidden'}`} style={props.style}>{props.children}</div>;
export const FlexItemExpand = (props) => {
  const styleObject = props.itemExpanded ? { ...styles.flexItem, ...props.style } : { ...styles.flexItem, ...styles.flexHidden, ...props.style };
  return (<div {...props} className={props.className} style={styleObject}>{props.children}</div>);
};

// export const FlexHeader = props => (
//   <div {...props} className={`flex-header ${props.className}`} style={props.style}>
//     {props.children}
//   </div>
// );
export const FlexHeader = props => (
  <div {...props} className={props.className} style={{ ...styles.flexHeader, ...props.style }}>
    {props.children}
  </div>
);

// export const FlexFooter = props => (
//   <div {...props} className={`flex-row ${props.className}`} style={props.style}>
//     {props.children}
//   </div>
// );
export const FlexFooter = props => (
  <div {...props} className={props.className} style={{ ...styles.flexItem, ...props.style }}>
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
    const { expanded } = this.state;
    // return (
    //   <div
    //     {...this.props}
    //     role="presentation"
    //     className={`flex-row flex-body-row ${enablePointer ? ' cursor-pointer' : ''} ${this.props.className}`}
    //     style={this.props.style}
    //     onDoubleClick={e => e.stopPropagation()}
    //     onClick={this.handleClick}
    //     onKeyUp={e => e.keyCode === 13 && this.handleClick(e)}
    //   >
    //     {
    //       Array.isArray(this.props.children) ? (
    //         this.props.children.map((component) => {
    //           if (component.type.defaultProps.flexname === 'FlexItemExpand') {
    //             return (
    //               <FlexItemExpand key={Math.random()} itemExpanded={expanded}>
    //                 {component.props.children}
    //               </FlexItemExpand>
    //             );
    //           }
    //           return component;
    //         })
    //       ) : this.props.children
    //     }
    //   </div>
    // );
    const styleObject = enablePointer ? { ...styles.flexRow, ...styles.cursorPointer, ...this.props.style } : { ...styles.flexRow, ...this.props.style };
    return (
      <div
        {...this.props}
        role="presentation"
        className={`flex-body-row ${this.props.className}`}
        style={styleObject}
        onDoubleClick={e => e.stopPropagation()}
        onClick={this.handleClick}
        onKeyUp={e => e.keyCode === 13 && this.handleClick(e)}
      >
        {
          Array.isArray(this.props.children) ? (
            this.props.children.map((component) => {
              if (component.type.defaultProps.flexname === 'FlexItemExpand') {
                return (
                  <FlexItemExpand key={Math.random()} itemExpanded={expanded}>
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
