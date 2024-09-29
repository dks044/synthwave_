import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { DarkSignatureBackgroundColor } from '../../../utils/theme';

const StyledHeaderCategoryWrapper = styled(View)`
  background-color: ${DarkSignatureBackgroundColor};
`;

export const HeaderCategoryPresenter = React.memo(function HeaderCategoryPresenter() {
  return <StyledHeaderCategoryWrapper></StyledHeaderCategoryWrapper>;
});
