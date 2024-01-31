import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useFonts, Poppins_400Regular  } from '@expo-google-fonts/poppins'
import { Container } from './src/components/Container/Container';
import { Button, ButtonDecrement } from './src/components/Button/Button';
import { Gradient } from './src/components/Gradient/Gradient';
import { Title } from './src/components/Title/Title';
import { ButtonText } from './src/components/ButtonText/ButtonText';



export default function App() {

  const [fontLoaded] = useFonts({
    Poppins_400Regular
  });

  const [count, setCount] = useState(0);

  //funcao de incremento
  const increment = () => {
    setCount(count + 1)
  }

  //funcao de decremento
  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <Gradient
      colors={['#2E335A', '#1C1B33']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Container>
        <Title>
          Contador: {count}
        </Title>

        <Button onPress={increment}>
          <ButtonText>Incrementar</ButtonText>
        </Button>

        <ButtonDecrement onPress={decrement}>
          <ButtonText>Decrementar</ButtonText>
        </ButtonDecrement>

        <StatusBar style="auto" />
      </Container>
    </Gradient>
  );
}