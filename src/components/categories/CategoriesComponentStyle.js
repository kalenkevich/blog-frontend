export default theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  category: {
    padding: '5px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
    transition: 'background-color linear 100ms',
    marginRight: '5px',
    marginTop: '5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.brandPrimaryColor,
    },
    '&:last-of-type': {
      marginRight: '0',
    },
  },
});
