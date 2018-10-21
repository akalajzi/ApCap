import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Row } from '@shoutem/ui';
import { Icon } from 'expo';

import Loader from 'components/Loader';
import { NOTES_BY_USER_QUERY } from 'graphql/notes.graphql';
import theme from 'themes/default';

import NoteTypeIcon from './NoteTypeIcon';
import styles from './styles';

const NoteItem = props => {
  const { note } = props;
  console.log(note);

  const type = note.reminder ? 'reminder' : 'default';

  return (
    <View style={styles.noteItemContainer}>
      <Row>
        <NoteTypeIcon type={type} />
        <View>
          <Text style={styles.noteItemTitle}>{note.title}</Text>
          <Text style={styles.noteItemText}>{note.text}</Text>
        </View>
      </Row>
    </View>
  );
};

export default NoteItem;
