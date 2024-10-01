import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Text, Appearance, Image } from 'react-native';
import styled from 'styled-components/native';
import { BOTTOM_HEIGHT } from '../../utils/constant'; // BOTTOM_HEIGHT는 픽셀 단위로 설정
import { IconContainer } from '../../components/commom/icon/IconContainer';
import { useTheme } from 'styled-components/native';
import Home from '../../assets/image/bottom/home.png';
import Explorer from '../../assets/image/bottom/explorer.png';
import Library from '../../assets/image/bottom/library.png';

const BottomWrapper = styled(View)`
  height: ${BOTTOM_HEIGHT}px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const TabWrapper = styled(View)`
  flex-direction: row;
`;

const Tab = styled(TouchableOpacity)`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const BottomPresenter = React.memo(function BottomPresenter() {
  const theme = useTheme();

  console.log(theme);
  return (
    <BottomWrapper>
      <TabWrapper>
        <Tab>
          <Image source={Home} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </Tab>
        <Tab>
          <Image
            source={Explorer}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </Tab>
        <Tab>
          <Image
            source={Library}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </Tab>
      </TabWrapper>
    </BottomWrapper>
  );
});
