import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.img}
        source={require('./src/assets/logo_senai.png')}
      />

      <Text style={styles.login}> Login </Text>

      <TextInput 
        style={styles.email}
        placeholder='Digite seu email'
      />

      <TextInput 
        style={styles.senha}
        placeholder='Digite sua senha'
      />

      <TouchableOpacity style={styles.entrar}>
        <Text> Entrar </Text>
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
  },
  img: {
    width: "50%",
    height: 50
  },
  login: {
    marginTop:40,
    fontSize: 24,
  },
  email: {
    width: '80%',
    height: 40,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10
  },
  senha: {
    width: '80%',
    height: 40,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10
  },
  entrar: {
    width: '30%',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});
