export default theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    flexWrap: 'wrap',
  },
  authorAvatar: {
    width: '35px',
    height: '35px',
    contentFit: 'contain',
    borderRadius: theme.borderRadius,
  },
  authorName: {
    marginLeft: '10px',
    textDecoration: 'none',
    color: theme.authorColor,
  },
});
