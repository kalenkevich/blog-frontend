export default theme => ({
  root: {
    height: '32px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
    backgroundColor: 'transparent',
    outline: 'none',
    minWidth: '300px',
    padding: '5px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
});
