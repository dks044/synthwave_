import React from 'react';
import { HeaderCategoryPresenter } from './HeaderCategory.Presenter';
import Person from '../../../assets/image/category/PERSON.png';
import Bell from '../../../assets/image/category/BELL.png';
import GoWork from '../../../assets/image/category/GOWORK.png';
import Focus from '../../../assets/image/category/FOCUS.png';
import Rest from '../../../assets/image/category/REST.png';
import Exercise from '../../../assets/image/category/EXERCISE.png';

interface CategoryIconImage {
  label: string;
  source: any;
  index: number;
}
export const HeaderCategoryContainer = React.memo(function HeaderCategoryContainer() {
  //사람, 알림, 휴식, 에너지 충전, 집중, 운동, 출퇴근/등하교
  const categories = [
    { label: 'Person', source: require('../../../assets/image/category/PERSON.png'), index: 0 },
    { label: 'Bell', source: require('../../../assets/image/category/BELL.png'), index: 1 },
    { label: 'GoWork', source: require('../../../assets/image/category/GOWORK.png'), index: 2 },
    { label: 'Focus', source: require('../../../assets/image/category/FOCUS.png'), index: 3 },
    { label: 'Rest', source: require('../../../assets/image/category/REST.png'), index: 4 },
    { label: 'Exercise', source: require('../../../assets/image/category/EXERCISE.png'), index: 5 },
  ];

  return <HeaderCategoryPresenter categories={categories} />;
});
