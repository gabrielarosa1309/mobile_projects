import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  //Simulação de uma lista de pessoas 
  const peopleList = [
    {id: '1', name: 'Carlos', age: 37},
    {id: '2', name: 'Edu', age: 37},
    {id: '3', name: 'Julia', age: 18},
    {id: '4', name: 'Gabi', age: 18}
  ]

  return (
    <SafeAreaView>
      {/* <StatusBar/> */}

      {/* Usando flatlist */}
      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}

        renderItem={({item}) => (
          //Exibir cada item da lista
          <Person name={item.name} age={item.age}/>
        )}
      />
    </SafeAreaView>
  );
}
