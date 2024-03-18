import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Notifications from "expo-notifications";

//Solicitar as permissoes de notificacoes 
Notifications.requestPermissionsAsync();

//definir como as notificacoes devem ser tratadas quando recebidas 
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true
  })
});

export default function App() {
   //funcao pra lidar com chamada da notificacao
   const handleCallNotifications = async () => {
    
    //obtem o status das permissoes 
    const {status} = await Notifications.getPermissionsAsync()

    //verifica se o usuario concedeu permissao pra notificacao 
    if(status !== "granted"){
      alert("voce nao deixou as notificacoes ativas")
      return;
    }

    //agendar uma notificacao pra ser exibida apos 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "JULIA VAI SE FUDE ;)",
        body: "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA"
      },
      trigger: null
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>
        <Text style={styles.txt}> Julia aperta aqui </Text>
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

  button: {
    width: 175,
    height: 60,
    backgroundColor: "red",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },

  txt: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  }
});
