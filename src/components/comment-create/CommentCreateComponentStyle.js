export default theme => ({
  root: {
    padding: '10px 10px 5px 10px',
    border: theme.border,
    borderRadius: theme.borderRadius,
  },
  textArea: {
    width: '100%',
    height: '100px',
  },
  actionPanel: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '5px 0',
  },
  actionPanelButton: {
    marginRight: '10px',
    '&:last-of-type': {
      marginRight: '0',
    },
  },
});
