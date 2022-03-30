import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

function DefaultDiv({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
}

export const Table = styled(DefaultDiv)`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  min-width: 500px;
  table-layout: fixed;
`;

export const Item = styled(DefaultDiv)`
  flex-grow: 1;
  flex-basis: 0;
  padding: 0.5em 24px;
  white-space: pre-wrap;
  word-break: keep-all;
  min-width: 0;
  margin: auto;
`;

export const ItemExpand = styled(DefaultDiv)`
  flex-grow: 1;
  flex-basis: ${({ itemexpanded }) => (itemexpanded ? '100%' : 0)};
  padding: 0.5em 24px;
  white-space: pre-wrap;
  word-break: keep-all;
  min-width: 0;
  margin: auto;
  display: ${({ itemexpanded }) => (itemexpanded ? 'default' : 'none')};
  opacity: ${({ itemexpanded }) => (itemexpanded ? 'default' : 0)};
`;

export const Header = styled(DefaultDiv)`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  background-color: transparent;
  border-bottom: 1px solid #d0d0d0;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const Footer = styled(DefaultDiv)`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid #d0d0d0;
  font-size: 100%;
  font-weight: 300;
`;

export const Row = styled(DefaultDiv)`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid #d0d0d0;
  font-size: 100%;
  font-weight: 300;
  cursor: ${({ enablepointer }) => (enablepointer ? 'pointer' : 'default')};
  &:hover {
    background-color: lightyellow;
  }
`;

DefaultDiv.propTypes = {
  children: PropTypes.node,
};

DefaultDiv.defaultProps = {
  children: null,
};
