import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { HomeScreen } from './src/screens/HomeScreens';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './src/utils/theme';
import { StatusBar, Appearance, StyleSheet, View } from 'react-native';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();

  const initialTheme = Appearance.getColorScheme() === 'dark' ? dark : light;
  const [appTheme, setAppTheme] = useState(initialTheme);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setAppTheme(colorScheme === 'dark' ? dark : light);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <StatusBar
        barStyle={appTheme === light ? 'dark-content' : 'light-content'}
        backgroundColor='transparent'
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'transparent', // 배경을 투명하게 설정
  //   paddingTop: StatusBar.currentHeight, // 상태바 높이만큼 패딩 추가
  // },
});

export default App;
