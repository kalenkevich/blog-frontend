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
      margin: '10px 0',
    },
    authorPanel: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${theme.brandPrimaryColor}`,
      paddingBottom: '10px',
    },
    actionButtonPanelButton: {
      marginRight: '10px',
      '&:last-of-type': {
        marginRight: '0',
      },
    },
  };
};
