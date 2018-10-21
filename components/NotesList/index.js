import React from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { graphql, compose } from 'react-apollo';

import { SwipeListView } from 'react-native-swipe-list-view';

import Loader from 'components/Loader';
import { NOTES_BY_USER_QUERY } from 'graphql/notes.graphql';

import NoteItem from './NoteItem';
import styles from './styles';

const USER_ID = 'cj1jl8xl8ikt50164272zrr7s';

const defaultProps = {
  loading: false,
  notes: [],
};

class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading, notes } = this.props;

    if (loading) {
      return <Loader />;
    }

    return (
      <View styles={styles.container}>
        {notes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </View>
    );
  }
}

NotesList.defaultProps = defaultProps;

const userNotesQuery = graphql(NOTES_BY_USER_QUERY, {
  options: ({ id }) => ({ variables: { userId: USER_ID } }),
  props: ({ data: { loading, allNotes } }) => ({
    loading,
    notes: allNotes,
  }),
});

export default compose(userNotesQuery)(NotesList);

/* already solved this: https://gitlab.com/mirror-project/crna/blob/master/src/containers/Notes/NoteList.react.js

const deleteNote = graphql(DELETE_NOTE_MUTATION, {
  props: ({ ownProps, mutate }) => ({
    deleteNote: ({ id }) =>
      mutate({
        variables: { id },
        updateQueries: {
          Notes: (previousResult, {mutationResult}) => {
            const deletedNote = mutationResult.data.deleteNote
            return update(previousResult, {
              allNotes: {
                $set: previousResult.allNotes
                  .filter(note => deletedNote.id !== note.id)
              }
            })
          }
        }
      })
  })
})

*/
