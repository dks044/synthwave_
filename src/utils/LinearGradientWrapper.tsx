import React, { ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface LinearGradientWrapperProps {
  children: ReactNode;
}
export const LinearGradientWrapper = React.memo(function LinearGradientWrapper({
  children,
}: LinearGradientWrapperProps) {
  return (
    <LinearGradient
      colors={['#FF0000', '#FF0082', '#FF6400']}
      start={{ x: 0, y: 0 }}
      style={{ padding: 5, width: 20 }}
      end={{ x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
});
