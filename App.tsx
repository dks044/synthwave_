import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LayoutContainer } from './src/containers/Layout/LayoutContainer';
import { HomeScreen } from './src/screens/HomeScreens';

function App(): React.JSX.Element {
  const Stack = createStackNavigator(); // Stack 객체 생성
  return (
    <NavigationContainer>
      <LayoutContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </LayoutContainer>
    </NavigationContainer>
  );
}

export default App;
