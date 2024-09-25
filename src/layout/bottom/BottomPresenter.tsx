import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { BOTTOM_HEIGHT } from '../../utils/constant'; // BOTTOM_HEIGHT는 픽셀 단위로 설정
import { IconContainer } from '../../components/commom/icon/IconContainer';
import { useTheme } from 'styled-components/native';

const BottomWrapper = styled(View)`
  height: ${BOTTOM_HEIGHT}px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
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
  const theme = useTheme(); // 현재 테마 가져오기

  return (
    <BottomWrapper>
      <TabWrapper>
        <Tab>
          <IconContainer name='home-filled' color={theme.color} size={25} />
          <Text style={{ color: theme.color, fontSize: 10 }}>홈</Text>
        </Tab>
        <Tab>
          <IconContainer name='explore' color={theme.color} size={30} />
          <Text style={{ color: theme.color, fontSize: 10 }}>둘러보기</Text>
        </Tab>
        <Tab>
          <IconContainer name='library-music' color={theme.color} size={30} />
          <Text style={{ color: theme.color, fontSize: 10 }}>보관함</Text>
        </Tab>
      </TabWrapper>
    </BottomWrapper>
  );
});
