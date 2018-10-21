import React from 'react';
import { View } from 'react-native';
import { Icon } from 'expo';

import theme from 'themes/default';

const NoteTypeIcon = props => {
  const { type } = props;

  let icon = 'chevron-right';
  if (type === 'reminder') {
    icon = 'clock';
  }

  return (
    <View style={styles.container}>
      <Icon.Feather
        name={icon}
        size={20}
        style={{ marginBottom: -3 }}
        color={theme.color.iconDefault}
      />
    </View>
  );
};

export default NoteTypeIcon;

const styles = {
  container: {
    width: 40,
  },
};
