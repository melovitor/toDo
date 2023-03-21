import {View,Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'

type Props = {
    name: string;
    onRemove: () => void;
    onConclued: () => void;
}
export function ListCard({name, onRemove, onConclued}: Props){
    return(
    <View style={styles.container}>
        <View style={styles.card}>
        <TouchableOpacity onPress={onConclued}>
            <Text style={styles.text}> 
                {name}
            </Text>
        </TouchableOpacity>        
        <TouchableOpacity style={styles.delete} onPress={onRemove}>
            <Text style={styles.textDelete}> 
                -
            </Text>
        </TouchableOpacity>        
    </View>
    </View>
    )
}