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
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledLogoImageBox = styled(View)`
  width: 50px;
  height: 50px;
`;
const StyledLogoHeaderText = styled(Text)`
  color: ${({ theme }) => theme.color};
  font-size: 22px;
`;

const StyledHeaderIconWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
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
        <StyledLogoHeaderText>SYNTHWAVE</StyledLogoHeaderText>
      </View>
      <StyledHeaderIconWrapper>
        {/* TODO: 알림올거 있으면 아이콘 변경하는거 있어야함. */}
        <IconContainer name='bell-outline' size={30} color='white' isCommunityIcons={true} />
        <IconContainer name='magnify' size={30} color='white' isCommunityIcons={true} />
        <IconContainer
          name='account-circle-outline'
          size={30}
          color='white'
          isCommunityIcons={true}
        />
      </StyledHeaderIconWrapper>
    </StyledLogoHeader>
  );
});
