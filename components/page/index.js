import React from 'react';
import { View , Text , ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const Homepage = (props) => {
    return (
            <View style={styles.imageContainer}>

                <ImageBackground 
                    source={require('../../assets/images/background.jpg')}
                    style={styles.background}
                /> 


                <View style={styles.titles}>

                    <ImageBackground 
                        source={require('../../assets/images/AmeanLogo.png')}
                        style={styles.logo}
                    /> 

                    

                    <Text style={styles.title}>A-MEAN Danışmanlık</Text>
                    <Text style={styles.subtitle}>Eğitim ve Yazılımda en iyisi!</Text>


                    <StyledButton text="Giriş yap" type="primary" topMargin='30%' onPress= {()=>{
                        console.log("Giriş Yap is pressed !!")
                    }}/>

                    <StyledButton text="Kayıt ol" type="secondary" topMargin='5%'onPress= {()=>{
                        console.log("Kayıt ol is pressed !!")
                    }}/>
                    

                </View>

            </View>
 
    );
}

export default Homepage;