export default {
  borderRadius: '2px',
  titleColor: '#757575',
  titleHoverColor: '#000000',
  brandPrimaryColor: '#4caf50',
  primaryColor: '#6fbf73',
  defaultColor: '',
  secondaryColor: '',
  loading: {
    animation: 'blink 3s linear infinite',
  },
  '@keyframes blink': {
    '0%': {
      backgroundColor: 'rgba(204,204,204, 0.5)',
    },
    '50%': {
      backgroundColor: 'rgba(204,204,204, 0)',
    },
    '100%': {
      backgroundColor: 'rgba(204,204,204, 0.5)',
    },
  },
};
