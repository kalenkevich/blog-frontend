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
    margin: '5px 0',
  },
  actionPanelButton: {
    marginLeft: '10px',
    '&:first-of-type': {
      marginLeft: '0',
    },
  },
});
