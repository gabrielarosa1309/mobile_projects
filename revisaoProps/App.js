import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      {/* <StatusBar/> */}

      <Person name='Carlos' age={37}/>
      <Person name='Edu' age={37}/>
      <Person name='Julia' age={18}/>
      <Person name='Gabi' age={18}/>
    </SafeAreaView>
  );
}
