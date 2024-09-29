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
      style={{ padding: 10, borderRadius: 5 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
});
