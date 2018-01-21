import { Navigation } from 'react-native-navigation';
import homeScreen from './Home';

// register all screens of the app (including internal ones)
function registerScreens(store, Provider) {
  Navigation.registerComponent('rnx.Home', () => homeScreen, store, Provider);
  return true;
}

export default registerScreens;
