module.exports = {
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
  flexExpand: {
    flexBasis: '100%',
  },
  flexHidden: {
    display: 'none', opacity: 0,
  },
  cursorPointer: {
    cursor: 'pointer',
  },
};
