import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function App() {
  const [biometricExist, setBiometricExist] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [history, setHistory] = useState({})

  async function CheckExistAuthenticates(){
    //validar se o aparelho tem acesso a biometria
    const compatible = await LocalAuthentication.hasHardwareAsync()

    setBiometricExist(compatible)

    //consultar as validações existentes
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
    console.log( LocalAuthentication.AuthenticationType[types[0]] )
  }

  async function handleAuthentication() {
    const biometric = await LocalAuthentication.isEnrolledAsync();

    //validar se existe biometria cadastrada
    if (!biometric) {
      return Alert.alert(
        "Falha ao logar",
        "Não foi encontrada nenhuma biometria cadastrada."
      )
    }

    //caso exista
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage : 'Login com biometria'
    })

    setAuthenticated(auth.success)

    if(auth.success){
      SetHistory()
    }
  }

  async function SetHistory(){
    const objAuth = {
      dateAuthenticate : moment().format("DD/MM/YYYY HH:mm:ss")
    }

    await AsyncStorage.setItem("authenticate", JSON.stringify(objAuth))

    setHistory(objAuth)
  }

  async function GetHistory(){
    const objAuth = await AsyncStorage.getItem("authenticate")

    if (objAuth) {
      setHistory(JSON.parse(objAuth))
    }
  }

  useEffect(() => {
    CheckExistAuthenticates()
    GetHistory()
  }, [])

  return (
    <View style={styles.container}>
      <Text> { biometricExist ? 'Seu dispositivo é compatível com a biometria' : 'Seu dispositivo não suporta biometria' } </Text>

      <TouchableOpacity style={styles.button} onPress={() => handleAuthentication()}>
        <Text style={styles.txt}> Autenticar acesso </Text>
      </TouchableOpacity>

      <Text style={{ color : authenticated ? 'green' : 'red' }}> { authenticated ? 'Autenticado' : 'Não autenticado' } </Text>

      {
        history.dateAuthenticate ? <Text style={styles.txtHistory}> Último acesso em {history.dateAuthenticate} </Text> : null
      }

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

  button: {
    width: 125,
    height: 35,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25
  },

  txt: {
    color: '#FFF',
    fontWeight: 'bold'
  },

  txtHistory: {
    color: '#858383',
    position: 'absolute',
    bottom: 120
  }
});
