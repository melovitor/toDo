import { StatusBar } from 'react-native';
import { Header } from './src/screens/Header';

export default function App() {
  return (
    <>
    <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
    />
    <Header/>
  </>
  );
}

