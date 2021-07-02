import React from 'react';
import { View , Text , Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const backgroundColor = props.type === "primary" ? 'rgba(100,220,250,0.6)' :  'rgba(90,140,1400,0.1)'
    const topMargin = props.topMargin == undefined ? '15%' : props.topMargin

    return (
            <View style={styles.container}>

                <Pressable
                    style={[styles.button,{backgroundColor: backgroundColor, marginTop: topMargin}]}
                    onPress={() => {
                        console.log("Button is pressed!")
                    }}
                >

                    <Text style={styles.buttonText}> 
                        {props.text}
                    </Text>
                </Pressable>

            </View>
 
    );
}

export default StyledButton;