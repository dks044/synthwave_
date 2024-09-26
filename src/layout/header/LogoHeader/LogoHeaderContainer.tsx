import React, { useEffect, useState } from 'react';
import { LogoHeaderPresenter } from './LogoHeaderPresenter';
import { dark, light } from '../../../utils/theme';
import { Appearance } from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';

export const LogoHeaderContainer = React.memo(function LogoHeaderContainer() {
  const animationValue = useSharedValue(0);
  const theme = useTheme();

  // 애니메이션 스타일 정의
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${animationValue.value}deg`,
        },
      ],
    };
  });

  // 애니메이션 시작 (예: 컴포넌트가 마운트될 때)
  React.useEffect(() => {
    animationValue.value = withRepeat(
      withTiming(360, { duration: 3000, easing: Easing.linear }),
      -1, // 무한 반복
      false, // 방향을 바꾸지 않음
    );
  }, []);

  return <LogoHeaderPresenter animatedStyle={animatedStyle} />;
});
