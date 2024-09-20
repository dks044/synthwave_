import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { HeaderContainer } from '../../containers/Layout/HeaderContainer';
import { BottomContainer } from '../../containers/Layout/BottomContainer';

export const Layout = React.memo(function Layout() {
  return (
    <SafeAreaView style={styles.layoutWrapper}>
      <HeaderContainer />
      <View>
        <Text>이곳은 컨텐츠가 들어갈 공간</Text>
      </View>
      <BottomContainer />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  layoutWrapper: {
    flex: 1,
  },
});
