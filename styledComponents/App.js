import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  //hook
  const[count, setCount] = useState(0);

  //função de incremento
  const increment = () => {
    setCount(count + 1)
  }

  //função de decremento
  const decrement = () => {
    setCount(count - 1)
  }

  //effect
  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <View>
      <Image 
        source={require('./src/assets/download.png')} 
      />

      <Text>Contador: {count}</Text>

      <TouchableOpacity onPress={increment}>
        <Text> Incrementar </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement}>
        <Text> Decrementar </Text>
      </TouchableOpacity>

      {/* <StatusBar /> */}
    </View>
  );
}