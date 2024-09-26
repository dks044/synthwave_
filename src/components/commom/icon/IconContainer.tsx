import React from 'react';
import { IconPresenter } from './IconPresenter';

interface IconProps {
  name: string;
  color: string;
  size: number;
  isCommunityIcons: boolean;
}
//Mui임.
export const IconContainer = React.memo(function IconContainer(props: IconProps) {
  const { name, color, size, isCommunityIcons } = props;
  return <IconPresenter {...props} />;
});
