import TagListComponentStyle from '../categories/CategoriesComponentStyle';

export default (theme) => {
  const tagListComponentStyle = TagListComponentStyle(theme);

  return {
    root: {
      ...tagListComponentStyle.root,
      alignItems: 'center',
    },
    category: {
      ...tagListComponentStyle.category,
      transition: 'none',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: 'none',
      },
    },
    removeCategory: {
      margin: '0 5px',
    },
    newCategory: {
      marginRight: '5px',
      marginTop: '5px',
      marginLeft: '5px',
      width: '100px',
    },
    editCategory: {
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
