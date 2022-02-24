import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, Icon, Input, ListItem, Text } from "react-native-elements";
const { width, height } = Dimensions.get("window");
import QRCode from 'react-native-qrcode-svg';

export default function ReceiveBTC({ navigation }) {

    const [amtShow, setAmtShow] = useState("none");
    const [active, setActive] = useState("copy");


  return (
    <View style={{ flex: 1 }}>
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
              Receive BTC
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                  
              }}
            >
              <Icon type="feather" name="info" color={"#FFF"} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
            <View style={{ alignItems: 'center', backgroundColor: '#FFF', width: 250, padding: 10, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 3.00,

elevation: 5, margin: 30, borderRadius: 10, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, }}>
                <Image source={require('../../../assets/images/favicon.png')} resizeMode="contain" style={{ width: 30, height: 30, marginRight: 10, }} />
                <Text style={{ fontWeight: 'bold' }}>Domtryz Wallet</Text>
            </View>
            <QRCode value="mnVsyqsTsKShsCYh3c9tNTFZ8myScz5AX3" size={200} />
            <Text style={{ textAlign: 'center' }} >mnVsyqsTsKShsCYh3c9tNTFZ8myScz5AX3</Text>
            </View>


        <View style={{ display: amtShow, }}>
            <Text><Text style={{ fontWeight: 'bold' }}>500 BTC</Text> = $20,250.00</Text>
        </View>

        <View style={{ alignItems: 'center', padding: 20, }}>
            <Text style={{ textAlign: 'center', fontSize: 17, color: '#666' }}>Send only <Text style={{ color: '#000' }}>Bitcoin(BTC)</Text> to this address.</Text>
            <Text style={{ textAlign: 'center', fontSize: 17, color: '#666' }}>Sending any other coins may result in permanent loss.</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ alignItems: 'center', margin: 10, }} onPress={()=>{ setAmtShow("none"); setActive("copy"); }} >
                <Icon type="material-community" name="content-copy" color={"#e234e3"} raised reverse={active=="copy"} />
                <Text>Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', margin: 10, }} onPress={()=>{ setAmtShow("flex"); setActive("amount"); }} >
                <Icon type="material-community" name="tag-outline" color={"#e234e3"} raised  reverse={active=="amount"} />
                <Text>Set Amount</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', margin: 10, }} onPress={()=>{ setAmtShow("none"); setActive("share"); }}>
                <Icon type="material-community" name="share-variant" color={"#e234e3"} raised  reverse={active=="share"} />
                <Text>Share</Text>
            </TouchableOpacity>
        </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
