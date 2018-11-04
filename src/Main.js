import React from 'react';
import { StyleSheet,TouchableOpacity,Text, Button, View } from 'react-native';


const styles =  StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#f6f6f6'
        
        
    },
    button:{
        backgroundColor:'#c2eaeb',
        margin:20,
        padding:10,
        width:150,
        alignItems:'center',
        borderRadius:5
        
    },
    text:{
        textAlign:'center',
        color:'#159e96',
        fontSize:16,
        fontWeight:'600'
    }
});

export default class Main extends React.Component{
    static navigationOptions = {
        title: 'Fatura Tutar Hesaplama',
      };
    constructor(){
        super();
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigate('Water', { name: 'Su' })
                            }
                    >
                        <Text style={styles.text}> Su </Text>
                    </TouchableOpacity>
                   <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigate('Electric', { name: 'Elektrik' })
                            }
                    >
                        <Text style={styles.text}> Elektrik </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}