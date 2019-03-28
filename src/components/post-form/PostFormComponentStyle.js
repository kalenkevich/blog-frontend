import FormStyles from '../form/FormStyles';

export default (theme) => {
  const formStyles = FormStyles(theme);

  return {
    form: {
      ...formStyles.form,
      width: '100%',
      maxWidth: 'initial',
    },
    formField: {
      ...formStyles.formField,
      justifyContent: 'flex-start',
    },
    content: {
      minHeight: '600px',
      height: '100%',
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
    actionButtonPanelButton: {
      marginRight: '10px',
      '&:last-of-type': {
        marginRight: '0',
      },
    },
  };
};
