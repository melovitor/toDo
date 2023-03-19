import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Svg, { Image } from 'react-native-svg';
import { styles } from './styles';

export function Header() {
    return (
      <>
        <View style={styles.form}>
          <TextInput 
              style={styles.input} 
              placeholder='Adicione uma tarefa.'
              placeholderTextColor='#6B6B6B'
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          {/* <FlatList
            ListEmptyComponent={() => (
              <>
                <Text style={styles.listTitle}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.listSubTitle}>Crie tarefas e organize seus itens a fazer</Text>
              </>
              
            )}
          
          /> */}
        </View>
      </>
        
      
    );
  }