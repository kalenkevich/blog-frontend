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
      minHeight: '600px',
    },
    title: {
      fontSize: '24px',
      height: '42px',
    },
    actionButtonPanel: {
      justifyContent: 'flex-end',
    },
  };
};
