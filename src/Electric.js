import React from 'react';
import { StyleSheet,TouchableOpacity,Text,TextInput, Button,Picker, View } from 'react-native';
import ModalFilterPicker from 'react-native-modal-filter-picker';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
      backgroundColor:'#f6f6f6'
    },
    button: {
      alignItems: 'center',
      padding: 10,
      backgroundColor:'#c2eaeb',
      margin:20,
      width:150,
      alignItems:'center',
      borderRadius:5
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: '#FF00FF'
    },
    text:{
        textAlign:'center',
        color:'#159e96',
        fontSize:16,
        fontWeight:'600'
    },
    inputText:{
        marginLeft:10,
        marginRight:10,
        minHeight:40,
        fontSize:14,
        color:'#495057',
        // backgroundColor:'#fff',
        borderColor:'#ced4da',
        borderStyle:'solid',
        borderWidth:1
    },
    inputLabel:{
        paddingLeft:10,
        paddingTop:20,
        paddingBottom:10,
        fontSize:15,
        fontWeight:'400',
        lineHeight:10,
        color:'#159e96',
    }
  });


export default class Electric extends React.Component{
    static navigationOptions = {
        title: 'Elektrik',
      };
    constructor(props,ctx){
        super(props,ctx);
        this.state = { 
                       text:'',
                       text2:'',
                       count:0,
                      
                    };
    }

    onPress = () => {
      
        const kw = this.state.text;
        const aktif = this.state.text2;
        const tzt = kw*aktif;  //Tek zamanlı tarife
        const dB = kw*0.72;//Dağıtım bedeli
        const ef = kw*0.01;//Enerji fonu
        const trt = kw*0.02;//Trt Payı
        const tv = kw*0.05;//Tüketim Vergisi
        const kdv = (tzt + dB + ef + trt + tv)*0.18; //Kdv tutarı
        this.setState({
          count: "Fatura Tutarı: "+(parseFloat(tzt+dB+ef+trt+tv+kdv).toFixed(2)).replace(".",",")
        })
      }

    render(){
        
        return(
            <View>
                
                    <Text style={styles.inputLabel}>Tüketim Kw</Text>
                  
                    <TextInput
                        
                        style={styles.inputText}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Text style={styles.inputLabel}>Aktif Birim Fiyat</Text>
                    <TextInput
                        
                        style={styles.inputText}
                        onChangeText={(text2) => this.setState({text2})}
                        value={this.state.text2}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text style={styles.text}> Hesapla </Text>
                    </TouchableOpacity>
                 
                    <View style={styles.countContainer}>
                        <Text style={styles.countText}>
                            { this.state.count !== 0 ? this.state.count: null}
                        </Text>
                        </View>
                
            </View>
        );
    }

}

