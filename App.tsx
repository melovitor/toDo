import { StatusBar } from 'react-native';
import { Header } from './src/screens/Header';
import { List } from './src/components/List';

export default function App() {
  return (
    <>
    <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
    />
    <Header/>
    <List/>
  </>
  );
}

