import PostComponentStyle from '../post/PostComponentStyle';

export default (theme) => {
  const postComponentStyle = PostComponentStyle(theme);

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    commentItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '10px',
      border: theme.border,
      borderRadius: theme.borderRadius,
      transition: 'background-color linear 100ms',
      marginBottom: '10px',
      '&:first-of-type': {
        marginTop: '10px',
      },
    },
    contentWrapper: {
      display: 'flex',
    },
    content: {
      ...postComponentStyle.content,
      width: '100%',
    },
    footer: postComponentStyle.footer,
    rateWrapper: postComponentStyle.rateWrapper,
    rateLabel: postComponentStyle.rateLabel,
    creationDate: postComponentStyle.creationDate,
    createdUserName: postComponentStyle.createdUserName,
    createdUserPanel: postComponentStyle.createdUserPanel,
  };
};
