import PostComponentStyle from '../post/PostComponentStyle';

export default (theme) => {
  const postComponentStyle = PostComponentStyle(theme);

  return {
    comment: {
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
    contentTextArea: {
      width: '100%',
      height: '100%',
    },
    actionPanel: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: 'fit-content',
    },
    actionPanelButton: {
      marginRight: '10px',
      '&:last-of-type': {
        marginRight: '0',
      },
    },
    contentWrapper: {
      display: 'flex',
      marginBottom: '10px',
    },
    content: {
      ...postComponentStyle.content,
      width: '100%',
    },
    footer: postComponentStyle.footer,
    creationDate: postComponentStyle.creationDate,
    authorPanel: postComponentStyle.authorPanel,
  };
};
