import { useContext } from 'react';

import { StatusBar } from 'expo-status-bar';

import { AuthContext } from '../../contexts/Auth';

import { BackgroundWrapper } from '../../components/atoms/BackgroundWrapper';
import { Typography } from '../../components/molecules/Typography';
import { responsiveSize } from '../../utils/responsiveSize';
import { Button } from '../../components/molecules/Button';

import { COLORS } from '../../global/styles';
import LandingBackgroundSvg from '../../assets/LandingBackground.svg';
import { View } from 'react-native';
import Background11Svg from '../../assets/Background11.svg';
import Comida from '../../assets/Comida.svg';
import Alimentos from '../../assets/Alimentos.svg';
export function SignIn() {
  const { setIsLogged } = useContext(AuthContext);

  function handleSignIn() {
    setIsLogged(true);
  }

  return (
    <>
      <BackgroundWrapper>
        <Alimentos />
        <Typography
          textType="title"
          mt={responsiveSize(2)}
          textColor={COLORS.white10}
          style={{ fontSize: responsiveSize(3) }}
        >
          Receitas Fit!
        </Typography>
        <Typography
          mb={responsiveSize(1)}
          style={{ fontSize: responsiveSize(2) }}
        >
          O melhor jeito de {'\n'}
          descobrir receitas {'\n'}
          com os ingredientes Fitness {'\n'}
        </Typography>

        <View style={{ alignItems: 'center' }}>
          <Button onPress={handleSignIn}>
            <Typography>Iniciar</Typography>
          </Button>
        </View>
      </BackgroundWrapper>
    </>
  );
}
