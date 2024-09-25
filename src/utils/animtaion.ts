import { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

const floatingButtonStyle = useAnimatedStyle((animatedValue: SharedValue) => {
  return {
    transform: [
      {
        translateY: interpolate(animatedValue.value, [50, 100], [50, -100], {
          extrapolateRight: Extrapolation.CLAMP,
        }),
      },
    ],
  };
});
