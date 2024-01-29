import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Pressable } from 'react-native';
import { useFonts, RobotoMono_700Bold, RobotoMono_500Medium, RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono';
import { useEffect } from 'react';

export default function App() {
  const [fontLoaded] = useFonts({
    RobotoMono_700Bold,
    RobotoMono_500Medium,
    RobotoMono_400Regular
  })

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      <Image
        style={styles.img}
        source={require('./src/assets/images/login_img.png')}
      />

      <Text style={styles.login}> Bem vindo! </Text>

      <Text style={styles.subtitle}> Faça login em sua conta </Text>

      <View style={styles.viewInput}>
        <Text style={styles.txtViewInput}> Email </Text>
        <TextInput style={styles.input} placeholder='Digite seu email' placeholderTextColor='#8b8b8b' />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.txtViewInput}> Senha </Text>
        <TextInput style={styles.input} placeholder='Digite sua senha' placeholderTextColor='#8b8b8b' />
      </View>

      <Pressable>
        <Text style={styles.txtLink}> Esqueci minha senha </Text>
      </Pressable>

      <TouchableOpacity style={styles.entrar}>
        <Text style={styles.txtEntrar}> Entrar </Text>
      </TouchableOpacity>

      <Text style={styles.default_txt}> Ou </Text>

      <View style={styles.viewBtns}>
        <TouchableOpacity style={styles.btnEntrarCom}>
          <Image
            style={styles.icon}
            source={require('./src/assets/images/chrome.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEntrarCom}>
          <Image
            style={styles.icon}
            source={require('./src/assets/images/facebook.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.signup}>
        <Text style={styles.default_txt}> Não possui cadastro?</Text>

        <Pressable>
        <Text style={styles.txtLink}> Cadastre-se aqui! </Text> 
      </Pressable>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  img: {
    width: "30%",
    height: 130
  },
  login: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'RobotoMono_700Bold'
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'RobotoMono_500Medium'
  },

  viewInput: {
    width: '80%'
  },
  txtViewInput: {
    marginBottom: '5%',
    color: '#8b8b8b',
    fontFamily: 'RobotoMono_400Regular'
  },
  input: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#282828',
    fontFamily: 'RobotoMono_400Regular'
  },

  default_txt: {
    color: '#8b8b8b',
    fontFamily: 'RobotoMono_400Regular'
  },

  entrar: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#a688fa',
    alignItems: "center",
    justifyContent: "center"
  },
  txtEntrar: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'RobotoMono_500Medium'
  },

  viewBtns: { 
    flexDirection: "row",
  },
  btnEntrarCom: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#282828',
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 20,
    height: 20,
  },

  signup: {
    flexDirection: "row"
  },
  txtLink: {
    color: '#a688fa',
    fontFamily: 'RobotoMono_500Medium'
  }
});