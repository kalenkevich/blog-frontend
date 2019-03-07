export default theme => ({
  root: {
    padding: '5px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
  },
  title: {
    textDecoration: 'none',
    color: theme.titleColor,
    '&:hover': {
      color: theme.titleHoverColor,
    },
  },
  contentPreview: {
    whiteSpace: 'pre-line',
  },
  footer: {
    display: 'flex',
    borderTop: `1px solid ${theme.titleColor}`,
    paddingTop: '5px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createdUserName: {
    marginLeft: '5px',
    textDecoration: 'none',
    color: theme.titleColor,
    '&:hover': {
      color: theme.titleHoverColor,
    },
  },
  rateWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  rateLabel: {
    padding: '0 10px',
  },
  rateActionButton: {},
  commentsCount: {},
  creationDate: {},
  createdUserPanel: {},
  categories: {
    marginTop: '10px',
    marginBottom: '50px',
    '&:last-of-type': {
      marginBottom: '0',
    },
  },
});
