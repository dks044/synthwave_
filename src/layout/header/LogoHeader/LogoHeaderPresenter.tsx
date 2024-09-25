import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { StausBarHeight } from '../../../utils/constant';
import LogoImage from '../../../assets/image/logo/logo.png';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated';

const StyledLogoHeaderWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: ${StausBarHeight}px;
  height: 100px;
`;

const StyledLogoImageBox = styled(View)`
  width: 50px;
  height: 50px;
`;

export const LogoHeaderPresenter = React.memo(function LogoHeaderPresenter() {
  const animationValue = useSharedValue(0);

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

  return (
    <StyledLogoHeaderWrapper>
      <StyledLogoImageBox>
        <Animated.View style={animatedStyle}>
          <Animated.Image
            source={LogoImage}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </Animated.View>
      </StyledLogoImageBox>
      {/* <Text>SYNTHWAVE</Text> */}
    </StyledLogoHeaderWrapper>
  );
});
