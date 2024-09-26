import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  name: string;
  color: string;
  size: number;
  isCommunityIcons?: boolean;
}
export const IconPresenter = React.memo(function IconPresenter(props: IconProps) {
  const { name, color, size, isCommunityIcons } = props;
  return (
    <React.Fragment>
      {isCommunityIcons ? (
        <IconCommunityIcons name={name} color={color} size={size} />
      ) : (
        <Icon name={name} color={color} size={size} />
      )}
    </React.Fragment>
  );
});
