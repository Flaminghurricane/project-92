import { Text, View, } from 'react-native'
import React, { Component } from 'react'
import { FlatList } from "react-native-gesture-handler";
import SportsCard from "../screens/SportsCard"

let SportsData = require("../assets/Temp.json");
export class SportsPerson extends Component {
  renderItem=({Item:content})=>{
  return <SportsCard SportsData={content} navigation={this.props.navigation}/>
  }
  keyExtractor=(Item,index)=>{
    index.toString()
  }
  render() {
    return (
      <View>
        <View >
              <FlatList
                keyExtractor={this.keyExtractor}
                data={SportsData}
                renderItem={this.renderItem}
              /></View>
      </View>
    )
  }
}

export default SportsPerson