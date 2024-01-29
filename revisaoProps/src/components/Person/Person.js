//Componente Person
//Props: name, age

import { View, StyleSheet, Text } from "react-native";

const Person = ({name, age}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}> Nome: {name} </Text>
            <Text style={styles.txt}> Idade: {age} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding:10,
        margin:10,
        borderRadius:5
    },
    txt: {
        fontSize:20,
    }
})

export default Person;