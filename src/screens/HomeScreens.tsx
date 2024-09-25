import React from 'react';
import { Text, View } from 'react-native';
import { Layout } from '../layout/Layout';
import { useTheme } from 'styled-components';

export function HomeScreen(): React.JSX.Element {
  return (
    <Layout>
      <View>
        <Text>반가워요~ 홈화면이에요!</Text>
      </View>
    </Layout>
  );
}
