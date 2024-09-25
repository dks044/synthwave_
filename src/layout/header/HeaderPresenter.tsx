import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { LogoHeaderContainer } from './LogoHeader/LogoHeaderContainer';

const StyledHeaderWrapper = styled(View)`
  background-color: #222;
  width: 100%;
  height: 300px;
`;

export const HeaderPresenter = React.memo(function HeaderPresenter() {
  return (
    <StyledHeaderWrapper>
      <LogoHeaderContainer />
    </StyledHeaderWrapper>
  );
});
