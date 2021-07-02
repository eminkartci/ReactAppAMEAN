import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: '100%',
      },
      titles: {    
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 30,
        fontWeight: '500'
      },
      subtitle:{
        fontSize: 16,
        color: '#5c5e62'
      },
      logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        position: 'relative',
        marginBottom: '5%',
      },
      background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      }
});

export default styles;