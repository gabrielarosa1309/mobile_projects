//Componente Person
//Props: name, age

import { View, StyleSheet, Text } from "react-native";
import { useFonts, TitilliumWeb_400Regular } from "@expo-google-fonts/titillium-web";

const Person = ({ name, age }) => {
    const [fontLoaded] = useFonts({
        TitilliumWeb_400Regular
    })

    if (!fontLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.txt}> Nome: {name} </Text>
            <Text style={styles.txt}> Idade: {age} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    txt: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb_400Regular'
    }
})

export default Person;