import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    width: '100%',
    flexDirection: 'row',
    height: 68,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden',
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderRadius: 8,
  },
  selectBody: {
    flex: 1,
    alignItems: 'center',
  },
  selectBodyLabel: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading
  },
});