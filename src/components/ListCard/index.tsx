import {View,Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'

type Props = {
    name: string;
    onRemove: () => void;
    onConclued: () => void;
    isConclued: boolean;
}

export function ListCard({name, onRemove, onConclued, isConclued}: Props){
    return(
    <View style={styles.container}>
        <View style={styles.card}>
        <TouchableOpacity onPress={onConclued}>
            <Text style={isConclued ? styles.textConclued : styles.text}> 
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