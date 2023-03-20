import { FlatList, Text, View } from "react-native"
import { ListCard } from "../ListCard"
import { styles } from "./styles"

export function List(){
    return (
        <View style={styles.container}>
            <ListCard/>
            {/* <FlatList
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
        /> */}
        </View>
    )
}