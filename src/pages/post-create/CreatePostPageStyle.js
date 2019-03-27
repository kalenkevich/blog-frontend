import SignInPageStyle from '../sign-in/SignInPageStyle';

export default (theme) => {
  const signInPageStyle = SignInPageStyle(theme);

  return {
    form: {
      ...signInPageStyle.form,
      width: '100%',
      maxWidth: 'initial',
    },
    formField: {
      ...signInPageStyle.formField,
      justifyContent: 'flex-start',
    },
    actionButton: signInPageStyle.actionButton,
    content: {
      minHeight: '600px',
    },
    title: {
      fontSize: '24px',
      height: '42px',
    },
    categories: {
      borderTop: `1px solid ${theme.brandPrimaryColor}`,
      paddingTop: '10px',
    },
    actionButtonPanel: {
      borderTop: `1px solid ${theme.brandPrimaryColor}`,
      paddingTop: '10px',
      justifyContent: 'flex-end',
    },
  };
};
