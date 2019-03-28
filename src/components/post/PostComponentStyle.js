import PostListItemComponentStyle from '../post-list-item/PostListItemComponentStyle';

export default (theme) => {
  const postListItemComponentStyle = PostListItemComponentStyle(theme);

  return {
    ...postListItemComponentStyle,
    actionPanel: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '10px',
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
