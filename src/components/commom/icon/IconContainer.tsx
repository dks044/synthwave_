import React from 'react';
import { IconPresenter } from './IconPresenter';

interface IconProps {
  name: string;
  color: string;
  size: number;
}
export const IconContainer = React.memo(function IconContainer(props: IconProps) {
  const { name, color, size } = props;
  return <IconPresenter {...props} />;
});
