import React from 'react';
import { HeaderCategoryPresenter } from './HeaderCategory.Presenter';

export const HeaderCategoryContainer = React.memo(function HeaderCategoryContainer() {
  return <HeaderCategoryPresenter />;
});
