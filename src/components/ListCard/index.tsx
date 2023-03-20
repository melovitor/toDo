import {View,Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'


export function ListCard(){
    return(
    <View style={styles.card}>
        <TouchableOpacity>
            <Text style={styles.text}> 
                Hello Word!
            </Text>
        </TouchableOpacity>
        
    </View>
    )
}