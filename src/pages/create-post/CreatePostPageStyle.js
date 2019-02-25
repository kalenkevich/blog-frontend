import SignInPageStyle from '../sign-in/SignInPageStyle';

export default (theme) => {
  const signInPageStyle = SignInPageStyle(theme);

  return {
    form: {
      ...signInPageStyle.form,
      width: '100%',
    },
    formField: {
      ...signInPageStyle.formField,
      justifyContent: 'flex-start',
    },
    actionButton: signInPageStyle.actionButton,
    content: {
      height: '600px',
    },
    actionButtonPanel: {
      justifyContent: 'flex-end',
    },
  };
};
