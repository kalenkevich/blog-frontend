export default theme => ({
  root: {
    padding: '10px',
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
    marginBottom: '10px',
    width: '100%',
  },
  content: {
    whiteSpace: 'pre-line',
    marginBottom: '10px',
    width: '100%',
  },
  footer: {
    display: 'flex',
    borderTop: `1px solid ${theme.brandPrimaryColor}`,
    paddingTop: '10px',
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
    width: '30%',
    display: 'flex',
    alignItems: 'center',
  },
  rateLabel: {
    padding: '0 10px',
  },
  rateActionButton: {},
  commentsCount: {
    width: '20%',
  },
  creationDate: {
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  createdUserPanel: {
    width: '30%',
  },
  categories: {
    marginTop: '10px',
    marginBottom: '50px',
    '&:last-of-type': {
      marginBottom: '0',
    },
  },
});
