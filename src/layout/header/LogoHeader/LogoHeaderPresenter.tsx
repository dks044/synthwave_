import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import { IconContainer } from '../../../components/commom/icon/IconContainer';

const StyledLogoHeader = styled(SafeAreaView)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledLogoImageBox = styled(View)`
  width: 60px;
  height: 60px;
`;
interface LogoHeaderPresenter {
  animatedStyle: any;
}
export const LogoHeaderPresenter = React.memo(function LogoHeaderPresenter({
  animatedStyle,
}: LogoHeaderPresenter) {
  return (
    <StyledLogoHeader>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
          <StyledLogoImageBox>
            <Animated.View style={animatedStyle}>
              <Animated.Image
                source={LogoImage}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </Animated.View>
          </StyledLogoImageBox>
        </TouchableOpacity>
      </View>
    </StyledLogoHeader>
  );
});
