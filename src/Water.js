import React from 'react';
import { StyleSheet,TouchableOpacity,Text,TextInput, Button,Picker, View } from 'react-native';
import City from './cities.json'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
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
    },
    select:{
        minHeight:40,
        marginLeft:10,
        marginRight:10,
        fontSize:14,
        color:'#495057',
        // backgroundColor:'#fff',
        borderColor:'#ced4da',
        borderStyle:'solid',
        borderWidth:1
    },
    selectOption:{

    }
  });


export default class Water extends React.Component{
    static navigationOptions = {
        title: 'Su',
      };
    constructor(){
        super();
        this.state = { city: "1",
                       text:'',
                       type:'ev',
                       count:0,
                    };
    }

    onPress = () => {
        const m3 = this.state.text;
        const type = this.state.type;
        const m3T = City[this.state.city][type];
        const tuketim = m3*m3T;
        const kdv = (tuketim+m3T)*0.08;
        this.setState({
          count: tuketim+m3T+kdv+2.8,
        })
      }

    render(){
        return(
            <View>
                <Text style={styles.inputLabel}>İl</Text>
                <Picker
                    selectedValue={this.state.city}
                    style={styles.select}
                    onValueChange={(itemValue, itemIndex) => this.setState({city: itemValue})}>
                   {Object.keys(City).map((key) => {
                        return (<Picker.Item style={styles.selectOption} label={City[key].title} value={key} key={key}/>) //if you have a bunch of keys value pair
                    })}
                    </Picker>
                    <Text style={styles.inputLabel}>Tüketim m3</Text>
                    <TextInput
                        
                        style={styles.inputText}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                <Text style={styles.inputLabel}>Konut Tipi</Text>
                 <Picker
                    selectedValue={this.state.type}
                    style={styles.select}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                    <Picker.Item style={styles.selectOption} label="Ev" value="ev" />
                    <Picker.Item style={styles.selectOption} label="İşYeri" value="isyeri" />
                    </Picker>
                   
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

