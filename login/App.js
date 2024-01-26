import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Pressable } from 'react-native';
import { useFonts, RobotoMono_700Bold, RobotoMono_500Medium, RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono';
import { useEffect } from 'react';

export default function App() {
  const[fontLoaded] = useFonts({
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

      <View style={styles.viewEmail}>
        <Text style={styles.txtViewEmail}> Email </Text>
        <TextInput style={styles.inputEmail} placeholder='Digite seu email' placeholderTextColor='#8b8b8b'/>
      </View>

      <View style={styles.viewSenha}>
        <Text style={styles.txtViewSenha}> Senha </Text>
        <TextInput style={styles.inputSenha} placeholder='Digite sua senha' placeholderTextColor='#8b8b8b'/>
      </View>

      <Pressable>
        <Text style={styles.default_txt}> Esqueci minha senha </Text>
      </Pressable>

      <TouchableOpacity style={styles.entrar}>
        <Text style={styles.txtEntrar}> Entrar </Text>
      </TouchableOpacity>

      <Text style={styles.default_txt}> Ou </Text>

      <TouchableOpacity style={styles.btnEntrarCom}>
        <Image
          style={styles.icon}
          source={require('./src/assets/images/chrome.png')}
        />

        <Text style={styles.txtEntrarCom}> Entrar </Text>
      </TouchableOpacity>

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

  viewEmail: {
    width: '80%'
  },
  txtViewEmail: {
    marginBottom: '5%',
    color: '#8b8b8b',
    fontFamily: 'RobotoMono_400Regular'
  },
  inputEmail: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor:'#282828',
    fontFamily: 'RobotoMono_400Regular'
  },

  viewSenha: {
    width: '80%'
  },
  txtViewSenha: {
    marginBottom: '5%',
    color: '#8b8b8b',
    fontFamily: 'RobotoMono_400Regular'
  },
  inputSenha: {
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor:'#282828',
    fontFamily: 'RobotoMono_400Regular'
  },

  default_txt: {
    color: '#8b8b8b',
    fontFamily: 'RobotoMono_400Regular'
  },

  entrar: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#a688fa',
    // marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  txtEntrar: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'RobotoMono_500Medium'
  },

  btnEntrarCom: {

  },
  icon: {
    width: 10,
    height: 10,
  },
  txtEntrarCom: {

  }
});
