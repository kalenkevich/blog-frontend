export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  commentItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
    transition: 'background-color linear 100ms',
    marginTop: '5px',
  },
  userPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: '0',
  },
  postedPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: '0',
  },
  rateWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5px',
  },
  content: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '0 10px',
    whiteSpace: 'pre-line',
  },
  creationDate: {
    display: 'flex',
    alignItems: 'flex-end',
    flexShrink: '0',
  },
  createdUserName: {
    color: theme.titleColor,
    '&:hover': {
      color: theme.titleHoverColor,
    },
    textDecoration: 'none',
  },
});
