import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ListCard } from "../../components/ListCard";
import { styles } from './styles';

export function Header() {
  const [task, setTask] = useState<string[]>([]);
  const [taskConclued, setTaskonclued] = useState<string[]>([]);
  const [contentTask, setContentTask] = useState('');

  function handleTaskAdd(){
    setTask(prevState => [...prevState, contentTask])
    setContentTask('')
  }
  function handleTaskConclued(text: string){
    if(taskConclued.includes(text)){
      return Alert.alert('Tarafa concluida.', 'Deseja remover está tarefa?', [
        {
          text: 'Sim',
          onPress: () => (setTask(prevState => prevState.filter(task => task !== text)), setTaskonclued(prevState => prevState.filter(task => task !== text)))
      },
      {
          text: 'Não',
          style: 'destructive',
      }
      ])
  }
    setTaskonclued(prevState => [...prevState, text])
  }
  function handleTaskRemove(text: string){
    Alert.alert('Remover Tarefa',`Deseja remover está tarefa de sua lista?`, [
        {
            text: 'Sim',
            onPress: () => (setTask(prevState => prevState.filter(task => task !== text)), setTaskonclued(prevState => prevState.filter(task => task !== text)))
        },
        {
            text: 'Não',
            style: 'destructive',
        }
    ])
}  
    return (
      <>
        <View style={styles.conteiner}>
          <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder='Adicione uma tarefa.'
                placeholderTextColor='#6B6B6B'
                onChangeText={setContentTask}
                value={contentTask}
            />
            <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
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
                {task.length}
              </Text>
            </View>            
            <Text style={styles.fineshed}>
                Concluídas
            </Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>
                {taskConclued? taskConclued.length: 0}
              </Text>
            </View> 
          </View>        
        </View>
        <View style={styles.list}>
          <FlatList
            data={task}
            keyExtractor={item => item}
            renderItem={({item}) => ( 
              <ListCard 
                onConclued={() => handleTaskConclued(item)}
                onRemove={() => handleTaskRemove(item)}
                name={item}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.listEmpty}>
                <Text style={styles.title}>
                    Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.subTitle}>
                    Crie tarefas e organize seus itens a fazer
                </Text>
            </View> 
            )}
          />
        </View>
      </>     
    );
  }