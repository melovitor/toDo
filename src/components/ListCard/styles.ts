import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A1A",
        paddingHorizontal: 16,
        marginBottom: 10
    },
    card: {
        backgroundColor: '#333333',
        padding: 16,
        borderRadius: 10,
        borderColor: '#262626',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    delete: {
        width: 26,
        height: 26,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderColor: '#E23636',
        borderWidth: 1
    },

    text: {
        color: '#fff',
    },
    textDelete:{
        color: '#E23636'
    },
    textConclued: {
        color: 'red'
    }    
    
})