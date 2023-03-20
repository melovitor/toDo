import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({   
    conteiner:{
        backgroundColor: "#1A1A1A",
    },

    form: {
        zIndex: 1,
        backgroundColor: '#0D0D0D',
        height: 173,
        width: '100%',
        flexDirection: 'row',
        padding: 24
    },
    input: {
        marginTop: 122,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 10,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 18,
        flex: 1,
        marginRight: 12,
    },
    button: {
        marginTop: 122,
        width: 56,
        height: 56,
        borderRadius: 10,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 26
    },
    list: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#1A1A1A",
    },
    listTitle: {
        color: '#808080',
        fontWeight: 'bold',
    },
    listSubTitle: {
        color: '#808080',
    },
    counters:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#262626',
        borderRadius: 20
    },
    create : {
        fontWeight: 'bold',
        color: '#4EA8DE',
    },
    fineshed : {
        fontWeight: 'bold',
        color: '#8284FA',
    },
    counter: {
        backgroundColor: '#333333',
        borderRadius: 9,
        padding: 3,
        marginLeft: -200,
        alignItems: 'center',
    },
    counterText: {
        color: '#fff',
    }
})