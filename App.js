import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ItemListScreen from './src/screens/ItemListScreen';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
import { Provider as ItemProvider } from './src/context/ItemContext';
import { Provider as CategoryProvider } from './src/context/CategoryContext';
import { setNavigator } from './src/navigationRef';

const navigator = createStackNavigator({
  Home: ItemListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Biofacts'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <CategoryProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </CategoryProvider>
  );
};
