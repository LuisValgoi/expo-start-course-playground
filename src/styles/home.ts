import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 120,
    paddingRight: 20,
    paddingLeft: 20,
  },
  text: {
    fontFamily: 'Raleway_400Regular',
  },
  listings: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 1,
  },
  title: {
    paddingBottom: 10,
    fontFamily: 'Raleway_400Regular',
  },
  thumbnail: {
    height: 100,
    width: '98%',
  },
  description: {
    fontFamily: 'Raleway_400Regular',
    fontStyle: 'italic',
  },
});

export default styles;
