export default theme => ({
  page: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
  },
  formLabel: {
    width: '100%',
    display: 'flex',
    marginBottom: '10px',
    'last-of-type': {
      marginBottom: 'none',
    },
  },
  formField: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    'last-of-type': {
      marginBottom: 'none',
    },
  },
  actionButton: {
    marginRight: '10px',
    '&:last-of-type': {
      marginRight: '0',
    },
  },
});
