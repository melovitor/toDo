import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

export function Header() {
    return (
      <View style={styles.conteiner}>
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
        <View style={styles.counters}>
          <Text style={styles.create}>
            Criadas
          </Text>
          <View style={styles.counter}>
            <Text  style={styles.counterText}>
               0
            </Text>
          </View>            
          <Text style={styles.fineshed}>
              Concluídas
          </Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              0
            </Text>
          </View> 
        </View>        
      </View>
        
      
    );
  }