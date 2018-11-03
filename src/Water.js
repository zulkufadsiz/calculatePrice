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
                <Text>İl</Text>
                <Picker
                    selectedValue={this.state.city}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({city: itemValue})}>
                   {Object.keys(City).map((key) => {
                        return (<Picker.Item label={City[key].title} value={key} key={key}/>) //if you have a bunch of keys value pair
                    })}
                    </Picker>
                    <Text>Tüketim m3</Text>
                    <TextInput
                        
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                <Text>Konut Tipi</Text>
                 <Picker
                    selectedValue={this.state.type}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                    <Picker.Item label="Ev" value="ev" />
                    <Picker.Item label="İşYeri" value="isyeri" />
                    </Picker>
                   
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

