import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  //
  const[count, setCount] = useState(0);

  //função de incremento
  const increment = () => {
    setCount(count + 1)
  }

  //função de decremento
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <View style={styles.container}>
      <Text>Contador: {count}</Text>

      <TouchableOpacity onPress={increment}>
        <Text> Incrementar </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement}>
        <Text> Decrementar </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
