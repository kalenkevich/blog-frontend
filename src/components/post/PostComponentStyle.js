import PostListItemComponentStyle from '../post-list-item/PostListItemComponentStyle';

export default (theme) => {
  const postListItemComponentStyle = PostListItemComponentStyle(theme);

  return {
    ...postListItemComponentStyle,
    authorPanel: {
      ...postListItemComponentStyle.authorPanel,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    actionPanel: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    createComment: {
      marginTop: '30px',
    },
    actionPanelButton: {
      marginRight: '10px',
      '&:last-of-type': {
        marginRight: '0',
      },
    },
  };
};
