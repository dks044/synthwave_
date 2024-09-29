import React from 'react';
import { HeaderCategoryPresenter } from './HeaderCategory.Presenter';

export const HeaderCategoryContainer = React.memo(function HeaderCategoryContainer() {
  //휴식, 에너지 충전, 집중, 운동, 출퇴근/등하교

  return <HeaderCategoryPresenter />;
});
