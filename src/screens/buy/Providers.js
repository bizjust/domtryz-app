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
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import { getDeepLink } from '../shared/utilities';

export default function Providers({ route, navigation }) {

  const ramp = new RampSdk({
    url: 'https://ri-widget-staging.firebaseapp.com',
    hostAppName: 'React Native Example',
    hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
  }).on('*', (event) => {
    console.log('ok');
    console.log(`RampSdk.on('*')`, event);
  });

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
              Providers
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Icon type="feather" name="info" color={"#FFF"} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <ScrollView style={{ width: width }}>
        <View style={{ alignItems: "center", width: width }}>
          <ListItem style={{ width: width }} bottomDivider onPress={() => { navigation.navigate("BuyWebView", { type: 'transak' }); }}>
            <Avatar source={require("../../../assets/images/transak.png")} />
            <ListItem.Content>
              <ListItem.Title>Transak</ListItem.Title>
            </ListItem.Content>
            <View>
              <ListItem.Title>0.00354 BTC</ListItem.Title>
              <Text
                style={{
                  backgroundColor: "#DDD",
                  textAlign: "center",
                  color: "#e234e3",
                  borderRadius: 5,
                  padding: 2,
                }}
              >
                Best Rate
              </Text>
            </View>
          </ListItem>

          <ListItem style={{ width: width }} bottomDivider onPress={async () => await ramp?.show()}>
            <Avatar source={require("../../../assets/images/ramp.jpg")} />
            <ListItem.Content>
              <ListItem.Title>Ramp</ListItem.Title>
            </ListItem.Content>
            <View>
              <ListItem.Title>0.00347 BTC</ListItem.Title>
            </View>
          </ListItem>

          <ListItem style={{ width: width }} bottomDivider onPress={async () => {
            try {
              await InAppBrowser.open("https://www.google.com");
            } catch (error) {
              console.log("error", error);
            }
          }}>
            <Avatar source={require("../../../assets/images/mercuryo.png")} />
            <ListItem.Content>
              <ListItem.Title>Mercuryo</ListItem.Title>
            </ListItem.Content>

            <View>
              <ListItem.Title>0.00354 BTC</ListItem.Title>
            </View>
          </ListItem>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
