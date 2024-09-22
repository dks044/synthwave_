import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from './src/screens/HomeScreens';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './src/utils/theme';
import { useColorScheme, StatusBar } from 'react-native';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  const screenBackgroundColor = useColorScheme() === 'light' ? '#f2f2f2' : '#222';

  return (
    <ThemeProvider theme={useColorScheme() === 'light' ? light : dark}>
      <StatusBar
        barStyle={useColorScheme() === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={screenBackgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
