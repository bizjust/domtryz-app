import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, Icon, Input, ListItem, Text } from "react-native-elements";
const { width, height } = Dimensions.get("window");

export default function SendBTC({ navigation }) {
  return (
    <View style={{ flex:1, }}>
    <StatusBar style="auto" backgroundColor={"#e234e3"} />
      <LinearGradient
        // Button Linear Gradient
        style={{ width: width, paddingVertical: 30, paddingHorizontal: 10 }}
        colors={["#e234e3", "#3e3477"]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon type="ant-design" name="arrowleft" color={"#FFF"} />
          </TouchableOpacity>
          <View>
            <Text style={{ color: "#FFF" }} h4>
              Send BTC
            </Text>
          </View>
          <View>
              <TouchableOpacity onPress={() => { navigation.navigate("ConfirmSend"); }} >
                  <Text style={{ color: "#FFF" }}>Next</Text>
              </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <View>
          <View style={{ backgroundColor: '#FFF', margin: 20, borderRadius: 10, }}>
              <View style={{ flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#CCC', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'space-between' }}>
                <TextInput placeholder="Recipient Address" style={{ fontSize: 16, padding: 10, width: '70%' }} />
                <Text style={{ marginRight: 10, color: '#e234e3', fontWeight: 'bold' }}>Paste</Text>
                <Icon type="ant-design" name="scan1" style={{ marginRight: 10, }} color="#e234e3" />
              </View>
              <View style={{ flexDirection:'row', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'space-between' }}>
                <TextInput placeholder="USD Address" style={{ fontSize: 16, padding: 10, width: '70%' }} />
                <Text style={{ marginRight: 10, color: '#e234e3', fontWeight: 'bold' }}>USD</Text>
              </View>
          </View>
          <View style={{ paddingHorizontal: 20, }}>
              <Text style={{ fontWeight: 'bold', color: '#666' }}>= $0.00</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
