import {
  createStackNavigator,
} from 'react-navigation';
import Water from './src/Water';
import Electric from './src/Electric';
import Main from './src/Main';
const App = createStackNavigator({
  Main: { screen: Main },
  Water: { screen: Water },
  Electric: { screen: Electric },
 
});

export default App;