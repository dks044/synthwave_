import React, { ReactNode } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { HeaderContainer } from './header/HeaderContainer';
import { BottomContainer } from './bottom/BottomContainer';
import { useTheme } from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = React.memo(function Layout({ children }: LayoutProps) {
  const theme = useTheme();
  return (
    <View style={styles.layoutWrapper}>
      <HeaderContainer />
      <View style={styles.contentContainer}>{children}</View>
      <BottomContainer />
    </View>
  );
});

const styles = StyleSheet.create({
  layoutWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
  },
});
