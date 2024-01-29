import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    <View style={styles.container}>
      <Image 
        source={require('./src/assets/download.png')} 
      />

      <Text style={styles.txt}>Contador: {count}</Text>

      <TouchableOpacity onPress={increment} style={styles.btn}>
        <Text style={styles.txtBtn}> Incrementar </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement} style={styles.btn}>
        <Text style={styles.txtBtn}> Decrementar </Text>
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
    gap: 25
  },
  txt: {
    fontFamily: 'Poppins_400Regular'
  },
  btn: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#a688fa',
    alignItems: "center",
    justifyContent: "center"
  },
  txtBtn: {
    color: 'white',
    fontFamily: 'Poppins_400Regular'
  }
});
