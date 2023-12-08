import React from 'react'
import { 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet,
    Touchable,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default function Dashboard(){

    const navigation = useNavigation()
    
    return(
        <SafeAreaView style={styles.container}>
           <View>
            <Text>Tela de Dashboard</Text>
           </View>

           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
           <Text style={styles.texto}>Enviar</Text>
           </TouchableOpacity>
         
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
     
        alignItems: 'center'
    },
    button:{
        padding:20,
        backgroundColor:'#0E20E8',
        width:'70%',
        marginRight:10,
        justifyContent: 'center',
        alignItems: 'center',
    
        
        
        marginTop:300,
    },texto:{
        color:'#fff',

        
        
    }, 
    
    

})