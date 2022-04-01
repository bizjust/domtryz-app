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
import RampSdk from '@ramp-network/react-native-sdk';

export default function BuyBTC({ route, navigation }) {

  const ramp = new RampSdk({
    url: 'https://ri-widget-staging.firebaseapp.com',
    hostAppName: 'React Native Example',
    hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
  }).on('*', (event) => {
    console.log('ok');
    console.log(`RampSdk.on('*')`, event);
  });

  useEffect(() => {
    console.log(route.params.coin);
  }, []);

  const submit = async () => {
    // navigation.navigate("Providers", { amount: 250.00 });
    ramp.show();
  }
  
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
              Buy Bitcoin
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Icon type="feather" name="info" color={"#FFF"} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <ScrollView style={{ flex:1, }}>
        <View style={{ flex:1, }}>
          <View style={{ alignItems: "center", padding: 30, height: 230, }}>
            <Text h1>US$250</Text>
            <Text>=0.0025368 BTC</Text>
          </View>



            <View>
            <ListItem bottomDivider onPress={()=>{  }} >
              <Avatar source={require('../../../assets/images/transak.png')} />
              <ListItem.Content>
                <ListItem.Title>Transak</ListItem.Title>
                <ListItem.Subtitle>Third Party Provider</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            </View>


          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: 'center',
                padding: 10,
              }}
            >
              <TouchableOpacity>
                <Text h4>1</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text h4>2</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text h4>3</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: 'center',
                padding: 10,
              }}
            >
              <TouchableOpacity>
                <Text h4>4</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text h4>5</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text h4>6</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: 'center',
                padding: 10,
              }}
            >
              <TouchableOpacity>
                <Text h4>7</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text h4>8</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text h4>9</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: 'center',
                padding: 10,
              }}
            >
              <TouchableOpacity>
                <Text h4>.</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text h4>0</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon type="material-community" name="backspace-outline" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: 'center', paddingVertical: 30, }}>
            <TouchableOpacity onPress={()=> { submit(); }} >
              <LinearGradient
                // Button Linear Gradient
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  width: width - 50,
                  borderRadius: 7,
                }}
                colors={["#e234e3", "#3e3477"]}
              >
                <Text style={{ color: "#FFF", textAlign: "center" }}>
                  Next
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
