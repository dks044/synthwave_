import React from 'react';
import { Appearance, View } from 'react-native';
import styled from 'styled-components/native';
import { LogoHeaderContainer } from './LogoHeader/LogoHeaderContainer';
import { DarkSignatureBackgroundColor, LightSignatureBackgroundColor } from '../../utils/theme';
import { HeaderCategoryContainer } from './HeaderCategory/HeaderCategory.Container';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const StyledHeaderWrapper = styled(GestureHandlerRootView)`
  background-color: ${Appearance.getColorScheme() === 'dark'
    ? `${DarkSignatureBackgroundColor}`
    : `${LightSignatureBackgroundColor}`};
  width: 100%;
  height: 500px;
`;

export const HeaderPresenter = React.memo(function HeaderPresenter() {
  return (
    <StyledHeaderWrapper>
      <LogoHeaderContainer />
    </StyledHeaderWrapper>
  );
});
