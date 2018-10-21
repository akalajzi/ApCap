import { Dimensions, StyleSheet } from 'react-native';
import theme from 'themes/default';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.backgroundLight,
  },
  noteItemContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.borderSubtle,
    maxHeight: 60,
  },
  noteItemTitle: {
    color: theme.color.textPrimary,
    fontSize: theme.font.note.title.size,
    fontWeight: theme.font.note.title.weight,
  },
  noteItemText: {
    fontSize: theme.font.note.text.size,
    fontWeight: theme.font.note.text.weight,
  },
});

export default styles;
