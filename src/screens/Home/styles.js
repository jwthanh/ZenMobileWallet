import { StyleSheet } from 'react-native';
import device from '../../utils/device';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: device.isIphoneX() ? 20 : 0,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // backgroundColor: '#000000',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    backgroundColor: '#2E5C85',
  },
  headerTransparent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  bar: {
    marginTop: 0,
    backgroundColor: '#2E5C85',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
