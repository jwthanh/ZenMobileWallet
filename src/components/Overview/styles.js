import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    paddingTop: Dimensions.get('window').width * 0.15,
    alignItems: 'center',
    backgroundColor: '#2E5C85',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.6,
  },
  balanceLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  balanceNumber: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: 'bold',
    margin: 8,
    backgroundColor: 'transparent',
  },
  balanceStatitics: {
    color: '#ffffff',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
});

export default styles;
