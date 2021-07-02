import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding: 10,
        width: '80%',
    },button:{
        height: 40,
        backgroundColor: 'rgba(40,40,40,0.2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '300',
        textTransform: 'uppercase'
    }
});

export default styles;