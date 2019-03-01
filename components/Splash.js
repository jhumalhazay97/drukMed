import React, {Component} from 'react'
import {StyleSheet, Text, View,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
export default class Splash extends Component{
    render(){
        return(
            <LinearGradient colors={['#1C1328','#34234c']} style={styles.linearGradient} >
                <View style={styles.container}>
                    <Text style={styles.title}>Druk Med</Text>
                    <Text style={styles.subhead}>All Medicine In One App</Text>
                    <View syle={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../images/logo.png')} 
                        >  
                        </Image>
                    </View>
                    <Text style={styles.subhead1}>Search For The Medicine</Text>
                </View>
            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        //borderRadius: 5
      },
    container: {
        //backgroundColor:'rgba(255,0,0,0.3)',
        //backgroundColor: '#1C1328',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold', 
        fontSize: 24,
        color: 'white',
        marginTop:16,
        
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
    },
    logo: {
        width:250,
        height:250,
        marginTop:50,

    },
    subhead:{
        fontSize: 22,
        color: 'white',
       
    },
    subhead1:{
        fontSize:18,
        color: 'white',
        marginTop:70,
    }

})