export default {
  applicationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  application: {
    width: '1200px',
  },
  '@keyframes blink': {
    '0%': {
      backgroundColor: 'rgba(204,204,204, 0)',
    },
    '10%': {
      backgroundColor: 'rgba(204,204,204, 0.5)',
    },
    '100%': {
      backgroundColor: 'rgba(204,204,204, 0)',
    },
  },
};
