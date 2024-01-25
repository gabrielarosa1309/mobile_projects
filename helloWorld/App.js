import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Hello World!
      </Text> 

      <TextInput
        style={styles.input}  
        placeholder='baiacu coquette ♡₊˚ 🦢・₊✧'
      />

      <TouchableOpacity style={styles.botao}> 
        <Text style={styles.txt_btn}> ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚ </Text>
      </TouchableOpacity>

      <Image
        style={styles.baiacu}
        source={require('./src/assets/Thumb_Baiacu.jpeg')}
      />

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'pink',
    fontSize: 24,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'pink',
    backgroundColor: 'lightgrey',
    padding: 10,
    marginTop: 25
  },
  botao: {
    width: '40%',
    height: 45,
    borderRadius: 10,
    backgroundColor: 'pink',
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  txt_btn: {
    color: 'white',
    fontSize: 24
  },
  baiacu: {
    width: '80%',
    height: 300,
    borderRadius: 10,
    marginTop: 25
  }
});
