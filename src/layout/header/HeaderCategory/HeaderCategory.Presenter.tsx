import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components/native';
import { DarkSignatureBackgroundColor } from '../../../utils/theme';

const StyledHeaderCategoryWrapper = styled(View)`
  display: flex;
  background-color: ${DarkSignatureBackgroundColor};
  flex-direction: row;
  justify-content: center;
`;

interface CategoryIconImage {
  label: string;
  source: any;
  index: number;
}

interface HeaderCategoryPresenterProps {
  categories: CategoryIconImage[];
}

const StyledLogoImageBox = styled(View)`
  width: 50px;
  height: 60px;
`;

export const HeaderCategoryPresenter = React.memo(function HeaderCategoryPresenter({
  categories,
}: HeaderCategoryPresenterProps) {
  console.log(categories);
  return (
    <StyledHeaderCategoryWrapper>
      {categories.map(item => (
        <StyledLogoImageBox key={item.index}>
          <Image
            source={item.source}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </StyledLogoImageBox>
      ))}
    </StyledHeaderCategoryWrapper>
  );
});
