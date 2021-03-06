export default theme => ({
  root: {
    padding: '10px',
    border: `1px solid ${theme.brandPrimaryColor}`,
    borderRadius: theme.borderRadius,
  },
  title: {
    textDecoration: 'none',
    color: theme.titleHoverColor,
    cursor: 'pointer',
  },
  contentPreview: {
    cursor: 'pointer',
    whiteSpace: 'pre-line',
    marginBottom: '10px',
    width: '100%',
    '& p': {
      margin: '0',
      marginBlockStart: '0px',
      marginBlockEnd: '0px',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
    },
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
  authorPanel: {
    borderBottom: `1px solid ${theme.brandPrimaryColor}`,
    paddingBottom: '10px',
  },
  commentsCount: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
  },
  commentLabelWrapper: {
    marginLeft: '5px',
  },
  commentIcon: {
    color: '#ADB5BD',
  },
  creationDate: {
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  categories: {
    marginTop: '10px',
    marginBottom: '50px',
    '&:last-of-type': {
      marginBottom: '0',
    },
  },
});
