import React from 'react'
import { 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native'




export default function Inicio(){
   
 
    return(
        <SafeAreaView style={styles.container}>
           <View>
            <Text>Tela de Inicio</Text>
           </View>  
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 
