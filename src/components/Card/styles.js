import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 16,
    shadowColor: 'rgba(0.0, 0.0, 0.0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').width * 0.4,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default styles;
