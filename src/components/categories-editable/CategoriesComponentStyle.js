import TagListComponentStyle from '../categories/CategoriesComponentStyle';

export default (theme) => {
  const tagListComponentStyle = TagListComponentStyle(theme);

  return {
    root: {
      ...tagListComponentStyle.root,
      alignItems: 'center',
      border: theme.border,
      height: '45px',
      paddingLeft: '5px',
    },
    autocomplete: {
      '& > input': {
        border: 'none',
      },
    },
    category: {
      ...tagListComponentStyle.category,
      transition: 'none',
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
