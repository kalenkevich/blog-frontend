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
      '&:last-of-type': {
        marginRight: '5px',
      },
    },
    removeCategory: {
      margin: '0 5px',
    },
    newCategory: {
      marginRight: '5px',
      marginTop: '5px',
      width: '200px',
      height: '34px',
    },
    editCategory: {
      width: '182px',
      backgroundColor: 'transparent',
      border: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
        padding: '8px 6px',
        border: 'none',
      },
    },
  };
};
