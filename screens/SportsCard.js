import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";


export default class SportsCard extends Component{
    render(){
        return(
            <View>
                <Image source={require("../assets/Cristiano.png")}/>
                <View>
                    <Text>{this.props.content.Name}</Text>
                </View>
            </View>
        )
    }
}
