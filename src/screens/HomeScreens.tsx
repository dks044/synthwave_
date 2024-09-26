import React from 'react';
import { Appearance, Text, View } from 'react-native';
import { Layout } from '../layout/Layout';
import { useTheme } from 'styled-components';
import { DarkSignatureBackgroundColor, LightSignatureBackgroundColor } from '../utils/theme';

export function HomeScreen(): React.JSX.Element {
  const theme = useTheme();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          backgroundColor: `${
            Appearance.getColorScheme() === 'dark'
              ? `${DarkSignatureBackgroundColor}`
              : `${LightSignatureBackgroundColor}`
          }`,
        }}
      >
        <Text>반가워요~ 홈화면이에요!</Text>
      </View>
    </Layout>
  );
}
