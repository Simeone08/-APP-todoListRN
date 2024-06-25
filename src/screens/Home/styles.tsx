import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer:{
    height: '40%',
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#A9A9A9',
  },
  input:{
    width: '50%',
    height: 30,
    borderWidth:1,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  button: {
    height: 30,
    marginLeft: 20,
  },
});