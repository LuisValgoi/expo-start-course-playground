import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  button: {
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Raleway_400Regular',
  },
  title: {
    fontFamily: 'Raleway_400Regular',
    fontSize: 20,
    padding: 20,
  },
  storyImg: {
    height: 300,
    width: '100%',
  },
  description: {
    fontFamily: 'Raleway_400Regular',
    fontSize: 14,
    padding: 20,
    fontStyle: 'italic',
  },
});

export default styles;
