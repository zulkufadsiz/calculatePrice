import React from 'react';
import { StyleSheet,TouchableOpacity,Text, Button, View } from 'react-native';


export default class Main extends React.Component{
    static navigationOptions = {
        title: 'Fatura Tutar Sorgulama Ekranı',
      };
    constructor(){
        super();
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Button
                    title="Su"
                    onPress={() =>
                    navigate('Water', { name: 'Su' })
                    }
                />
                <Button
                    title="Elektrik"
                    onPress={() =>
                    navigate('Electric', { name: 'Elektrik' })
                    }
                />
            </View>
        );
    }
}