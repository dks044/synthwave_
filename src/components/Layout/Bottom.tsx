import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BOTTOM_HEIGHT } from '../../utils/constant';

export const Bottom = React.memo(function Bottom() {
  return (
    <View style={styles.BottomWrapper}>
      <Text style={{ color: 'white' }}>바텀이라니깐요!!!</Text>
      <Text style={{ color: 'white' }}>바텀이라니깐요!!!</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  BottomWrapper: {
    height: BOTTOM_HEIGHT,
    backgroundColor: '#222',
  },
});
