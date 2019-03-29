export default theme => ({
  label: {
    cursor: 'pointer',
    padding: '8px 6px',
    height: '32px',
    boxSizing: 'border-box',
    whiteSpace: 'pre-line',
    '&:hover': {
      padding: '7px 5px',
      backgroundColor: '#CCCCCC',
      border: `1px solid ${theme.brandPrimaryColor}`,
      borderRadius: theme.borderRadius,
    },
    font: '400 14px system-ui',
    '&.placeholder': {
      color: '#a9a9a9',
    },
  },
  actionPanel: {
    display: 'flex',
    height: '30px',
    flexWrap: 'wrap',
  },
  editor: {
    marginTop: '10px',
    cursor: 'text;',
    fontSize: '16px',
    '& .RichEditor-hidePlaceholder': {
      display: 'none',
    },
    '& .public-DraftEditor-content': {
      minHeight: '100px',
    },
    '& .RichEditor-blockquote': {
      minHeight: '100px',
      borderLeft: '5px solid #eee',
      color: '#666',
      fontFamily: '\'Hoefler Text\', \'Georgia\', serif',
      fontStyle: 'italic',
      margin: '16px 0',
      padding: '10px 20px',
    },
    '& .public-DraftStyleDefault-pre': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '\'Inconsolata\', \'Menlo\', \'Consolas\', monospace',
      fontSize: '16px',
      padding: '20px',
    },
  },
  actionPanelButton: {
    marginLeft: '10px',
    '&:first-of-type': {
      marginLeft: '0',
    },
  },
  input: {
    width: '100%',
    flexDirection: 'column',
  },
});
