export default theme => ({
  label: {
    cursor: 'pointer',
    padding: '8px 6px',
    height: '32px',
    boxSizing: 'border-box',
    whiteSpace: 'pre-line',
    '&:hover': {
      padding: '7px 5px',
      backgroundColor: '#CCCCCC',
      border: `1px solid ${theme.brandPrimaryColor}`,
      borderRadius: theme.borderRadius,
    },
    font: '400 14px system-ui',
    '&.placeholder': {
      color: '#a9a9a9',
    },
  },
  input: {
    width: '100%',
  },
});
