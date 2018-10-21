const colors = {
  text: '#2f2f2f',
  subtle100: '#e8e8e8',
  subtle300: '#dddddd',
  subtle500: '#999999',
  primary: '#2f95dc',
  white: '#ffffff',
};

const theme = {
  icons: {
    tabIcon: colors.subtle500,
    tabIconSelected: colors.primary,
  },
  font: {
    note: {
      title: {
        size: 14,
        weight: '700',
      },
      text: {
        size: 12,
        weight: '400',
      },
    },
  },
  color: {
    iconDefault: colors.subtle500,
    textPrimary: colors.text,
    textSubtle: colors.subtle500,
    backgroundLight: colors.white,
    borderSubtle: colors.subtle100,
  },
};

export default theme;
