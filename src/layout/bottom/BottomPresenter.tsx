import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { BOTTOM_HEIGHT } from '../../utils/constant';
import { IconContainer } from '../../components/commom/icon/IconContainer';
import { useTheme } from 'styled-components/native';

// BottomWrapper 정의
const BottomWrapper = styled(View)`
  height: ${BOTTOM_HEIGHT}px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

// TabWrapper 정의
const TabWrapper = styled(View)`
  flex-direction: row;
`;

// Tab 정의
const Tab = styled(TouchableOpacity)`
  align-items: center;
  flex: 1;
`;

export const BottomPresenter = React.memo(function BottomPresenter() {
  const theme = useTheme(); // 현재 테마 가져오기

  return (
    <BottomWrapper>
      <TabWrapper>
        <Tab>
          <IconContainer name='home-filled' color={theme.color} size={30} />
          <Text style={{ color: theme.color, fontSize: 12 }}>홈</Text>
        </Tab>
        <Tab>
          <IconContainer name='explore' color={theme.color} size={30} />
          <Text style={{ color: theme.color, fontSize: 12 }}>둘러보기</Text>
        </Tab>
        <Tab>
          <IconContainer name='library-music' color={theme.color} size={30} />
          <Text style={{ color: theme.color, fontSize: 12 }}>보관함</Text>
        </Tab>
      </TabWrapper>
    </BottomWrapper>
  );
});
