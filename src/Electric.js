import React from 'react';
import { StyleSheet,TouchableOpacity,Text,TextInput, Button,Picker, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: '#FF00FF'
    }
  });


export default class Electric extends React.Component{
    static navigationOptions = {
        title: 'Su',
      };
    constructor(){
        super();
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
                
                    <Text>Tüketim Kw</Text>
                    <TextInput
                        
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Text>Aktif Birim Fiyat</Text>
                    <TextInput
                        
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text2) => this.setState({text2})}
                        value={this.state.text2}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text> Touch Here </Text>
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

