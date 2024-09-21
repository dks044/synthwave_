import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IconProps {
  name: string;
  color: string;
  size: number;
}
export const IconPresenter = React.memo(function IconPresenter(props: IconProps) {
  const { name, color, size } = props;
  return <Icon name={name} color={color} size={size} />;
});
