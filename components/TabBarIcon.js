import React from 'react';
import { Icon } from 'expo';

import theme from 'themes/default';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Feather
        name={this.props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? theme.icons.tabIconSelected : theme.icons.tabIcon}
      />
    );
  }
}
