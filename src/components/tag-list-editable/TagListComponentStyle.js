import TagListComponentStyle from '../tag-list/TagListComponentStyle';

export default (theme) => {
  const tagListComponentStyle = TagListComponentStyle(theme);

  return {
    root: {
      ...tagListComponentStyle.root,
      alignItems: 'center',
    },
    tagItem: {
      ...tagListComponentStyle.tagItem,
      transition: 'none',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: 'none',
      },
    },
    tagItemRemove: {
      margin: '0 5px',
    },
    newTagItem: {
      marginRight: '5px',
      marginTop: '5px',
      marginLeft: '5px',
      width: '100px',
    },
    editTagItem: {
      width: '100px',
      backgroundColor: 'transparent',
      border: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
        border: 'none',
      },
    },
  };
};
