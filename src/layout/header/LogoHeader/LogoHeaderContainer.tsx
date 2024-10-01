import React, { useEffect, useState } from 'react';
import { LogoHeaderPresenter } from './LogoHeaderPresenter';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';

export const LogoHeaderContainer = React.memo(function LogoHeaderContainer() {
  const rotateAnimationValue = useSharedValue(0);
  const dialMenuAnimationValue = useSharedValue(1);
  const vibrationAnimationValueX = useSharedValue(0);
  const vibrationAnimationValueY = useSharedValue(0);
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();

  // 애니메이션 스타일 정의
  const rotateAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotateAnimationValue.value}deg` }],
    };
  });

  const dialMenuAnimationStyle = useAnimatedStyle(() => {
    if (!open) {
      vibrationAnimationValueX.value = Math.random() * 4;
      vibrationAnimationValueY.value = Math.random() * 4;
    }
    return {
      transform: [
        { scale: dialMenuAnimationValue.value },
        { translateX: vibrationAnimationValueX.value },
        { translateY: vibrationAnimationValueY.value },
      ],
    };
  });

  useEffect(() => {
    rotateAnimationValue.value = withRepeat(
      withTiming(360, { duration: 3000, easing: Easing.linear }),
      -1,
      false,
    );
  }, []);

  useEffect(() => {
    if (!open) {
      vibrationAnimationValueX.value = withRepeat(
        withSpring(7, { damping: 1, stiffness: 800, overshootClamping: true }),
        -1,
        true,
      );

      vibrationAnimationValueY.value = withRepeat(
        withSpring(7, { damping: 1, stiffness: 800, overshootClamping: true }),
        -1,
        true,
      );
    } else {
      vibrationAnimationValueX.value = 0;
      vibrationAnimationValueY.value = 0;
    }
  }, [open]);

  const onTouchToOpenDialMenu = () => {
    setOpen(!open);
    dialMenuAnimationValue.value = withSpring(open ? 1 : 6);
  };

  const dialMenuColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: open ? '#2a2d31' : 'rgba(255, 46, 0, 0.5)',
    };
  });

  return (
    <LogoHeaderPresenter
      rotateAnimationStyle={rotateAnimationStyle}
      onTouchToOpenDialMenu={onTouchToOpenDialMenu}
      dialMenuAnimationStyle={dialMenuAnimationStyle}
      dialMenuColorStyle={dialMenuColorStyle}
    />
  );
});
