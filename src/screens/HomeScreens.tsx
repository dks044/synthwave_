import React from 'react';
import { Text, View } from 'react-native';
import { Layout } from '../components/Layout/Layout';

export function HomeScreen(): React.JSX.Element {
  return (
    <Layout>
      <View>
        <Text>반가워요~ 홈화면이에요!</Text>
      </View>
    </Layout>
  );
}
