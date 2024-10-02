import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import LogoImage from '../../../assets/image/logo/logo.png';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Exercise from '../../../assets/image/category/EXERCISE.png';
import Focus from '../../../assets/image/category/FOCUS.png';
import GoWork from '../../../assets/image/category/GOWORK.png';
import Party from '../../../assets/image/category/PARTY.png';
import Rest from '../../../assets/image/category/REST.png';
import Sleep from '../../../assets/image/category/SLEEP.png';
import Happy from '../../../assets/image/category/SMILE.png';

const StyledLogoHeader = styled(SafeAreaView)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledLogoImageBox = styled(View)`
  width: 60px;
  height: 60px;
`;
const StyledDialMenu = styled(Animated.View)`
  z-index: -10;
  //background-color: rgba(255, 46, 0, 0.5);
  position: absolute;
  border-radius: 50px;
  width: 31px;
  height: 31px;
  top: 24%;
  left: 24%;
  //top: 200%;
`;

const CategoryExercise = styled(Animated.View)`
  position: absolute;
  top: 15px;
  left: 1px;
  width: 43%;
  height: 43%;
  transform: rotate(60deg);
`;
const CategoryFocus = styled(Animated.View)`
  position: absolute;
  top: 19px;
  left: 9px;
  width: 43%;
  height: 43%;
`;
const CategoryGoWork = styled(Animated.View)`
  position: absolute;
  top: 16px;
  left: 18px;
  width: 43%;
  height: 43%;
  transform: rotate(-40deg);
`;
const CategoryParty = styled(Animated.View)`
  position: absolute;
  top: 7px;
  left: 18px;
  width: 43%;
  height: 43%;
  transform: rotate(265deg);
`;
const CategoryRest = styled(Animated.View)`
  position: absolute;
  top: 6px;
  left: 0px;
  width: 43%;
  height: 43%;
  transform: rotate(90deg);
`;
const CategorySleep = styled(Animated.View)`
  position: absolute;
  top: -2px;
  left: 3px;
  width: 53%;
  height: 53%;
  transform: rotate(110deg);
`;
const CategoryHappy = styled(Animated.View)`
  position: absolute;
  top: -1px;
  left: 15px;
  width: 43%;
  height: 43%;
  transform: rotate(-150deg);
`;

interface LogoHeaderPresenter {
  rotateAnimationStyle: any;
  onTouchToOpenDialMenu: () => void;
  dialMenuAnimationStyle: any;
  dialMenuColorStyle: any;
  open: boolean;
}

export const LogoHeaderPresenter = React.memo(function LogoHeaderPresenter({
  rotateAnimationStyle,
  onTouchToOpenDialMenu,
  dialMenuAnimationStyle,
  dialMenuColorStyle,
  open,
}: LogoHeaderPresenter) {
  return (
    <StyledLogoHeader>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => onTouchToOpenDialMenu()}>
          <StyledLogoImageBox>
            <Animated.View style={rotateAnimationStyle}>
              <Animated.Image
                source={LogoImage}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </Animated.View>
          </StyledLogoImageBox>
        </TouchableOpacity>
        <StyledDialMenu style={[dialMenuAnimationStyle, dialMenuColorStyle]}>
          {open && (
            <React.Fragment>
              <CategoryExercise>
                <Image
                  source={Exercise}
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
              </CategoryExercise>
              <CategoryFocus>
                <Image
                  source={Focus}
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
              </CategoryFocus>
              <CategoryGoWork>
                <Image
                  source={GoWork}
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
              </CategoryGoWork>
              <CategoryParty>
                <Image
                  source={Party}
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
              </CategoryParty>
              <CategoryRest>
                <Image
                  source={Rest}
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
              </CategoryRest>
              <CategorySleep>
                <Image
                  source={Sleep}
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
              </CategorySleep>
              <CategoryHappy>
                <Image
                  source={Happy}
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
              </CategoryHappy>
            </React.Fragment>
          )}
        </StyledDialMenu>
      </View>
    </StyledLogoHeader>
  );
});
