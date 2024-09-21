import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BOTTOM_HEIGHT } from '../../utils/constant';
import { IconContainer } from '../../components/commom/icon/IconContainer';

export const BottomPresenter = React.memo(function BottomPresenter() {
  return (
    <View style={styles.BottomWrapper}>
      <View style={styles.TabWrapper}>
        <TouchableOpacity style={styles.Tab}>
          <IconContainer name='home-filled' color='white' size={30} />
          <Text style={{ color: 'white', fontSize: 12 }}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Tab}>
          <IconContainer name='explore' color='white' size={30} />
          <Text style={{ color: 'white', fontSize: 12 }}>둘러보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Tab}>
          <IconContainer name='library-music' color='white' size={30} />
          <Text style={{ color: 'white', fontSize: 12 }}>보관함</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  BottomWrapper: {
    height: BOTTOM_HEIGHT,
    backgroundColor: '#222',
  },
  TabWrapper: {
    flexDirection: 'row',
  },
  Tab: {
    alignItems: 'center',
    flex: 1,
  },
});
