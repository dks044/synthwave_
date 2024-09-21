import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { HeaderContainer } from './header/HeaderContainer';
import { BottomContainer } from './bottom/BottomContainer';

export const Layout = React.memo(function Layout({ children }) {
  return (
    <SafeAreaView style={styles.layoutWrapper}>
      <HeaderContainer />
      <View style={styles.contentContainer}>{children}</View>
      <BottomContainer />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  layoutWrapper: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center', // 수직 중앙 정렬
    alignItems: 'center', // 수평 중앙 정렬
  },
});
