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
import { DarkSignatureComponentBackgroundColor } from '../../../utils/theme';
import { LinearGradientWrapper } from '../../../utils/LinearGradientWrapper';

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
  position: relative;
`;
const StyledDialMenu = styled(Animated.View)`
  z-index: -10;
  //background-color: rgba(255, 46, 0, 0.5);
  position: absolute;
  border-radius: 50px;
  width: 31px;
  height: 31px;
  top: 24%;
  left: 24%;
`;

interface LogoHeaderPresenter {
  rotateAnimationStyle: any;
  onTouchToOpenDialMenu: () => void;
  dialMenuAnimationStyle: any;
  dialMenuColorStyle: any;
}

export const LogoHeaderPresenter = React.memo(function LogoHeaderPresenter({
  rotateAnimationStyle,
  onTouchToOpenDialMenu,
  dialMenuAnimationStyle,
  dialMenuColorStyle,
}: LogoHeaderPresenter) {
  return (
    <StyledLogoHeader>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => onTouchToOpenDialMenu()}>
          <StyledLogoImageBox>
            <Animated.View style={rotateAnimationStyle}>
              <Animated.Image
                source={LogoImage}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </Animated.View>
          </StyledLogoImageBox>
          <StyledDialMenu style={[dialMenuAnimationStyle, dialMenuColorStyle]}>
            <Text>&nbsp;</Text>
          </StyledDialMenu>
        </TouchableOpacity>
      </View>
    </StyledLogoHeader>
  );
});
