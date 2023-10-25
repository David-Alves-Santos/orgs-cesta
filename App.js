import { StatusBar, View } from 'react-native';
import Cesta from './src/views/Cesta/componentes';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import mocks from './src/mocks/cesta';
import { SafeAreaView } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontsLoaded){
    return <View />
  }

    return (
        <SafeAreaView style={{flex: 1}}>
          <StatusBar/>
          <Cesta {...mocks}/>
        </SafeAreaView>
  );
  };

