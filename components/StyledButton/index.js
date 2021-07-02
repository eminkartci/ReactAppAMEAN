import React from 'react';
import { View , Text , Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    return (
            <View style={styles.container}>

                <Pressable
                    style={styles.button}
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