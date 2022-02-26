import {
    Alert,
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import {
    Avatar,
    Badge,
    Divider,
    Icon,
    Input,
    LinearProgress,
    ListItem,
    Overlay,
    Switch,
    Text,
  } from "react-native-elements";
  const { width, height } = Dimensions.get("window");

export default function ReferFriend({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor={"#e234e3"}
      />
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
              Refer a friend
            </Text>
          </View>
          <View>
            {/* <TouchableOpacity onPress={() => {}}>
              <Icon type="feather" name="info" color={"#FFF"} />
            </TouchableOpacity> */}
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
          <View style={{ padding: 10, }}>
              <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Badge value={<Text style={{ color: '#e234e3', marginTop: -2, }}>!</Text>} badgeStyle={{ backgroundColor: 'transparent', borderColor: '#e234e3', borderWidth:1, marginRight: 5, }} />
              <Text style={{ color: '#e234e3', fontWeight: 'bold',  }}>How it Work</Text>
              </View>
              <TouchableOpacity>
                <Text style={{ color: '#e234e3', fontWeight: 'bold', textDecorationLine: 'underline',  }}>Track Referrals</Text>
              </TouchableOpacity>
              </View>


            <View style={{ alignItems: 'flex-start', padding: 10, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Badge value={<Text style={{ color: '#3E3477', fontSize: 28, fontWeight: 'bold', }}>1</Text>} badgeStyle={{ backgroundColor: '#FFF', width: 50, height: 50, borderRadius: 50, borderColor: '#EEE' }} />
                    <View style={{ paddingLeft: 10, }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Invite your friends</Text>
                        <Text style={{ fontSize: 16, color: '#A0A0A0', }}>Just share your link</Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 25, paddingVertical: 10, }}>
                    <View style={{ height: 10, borderLeftWidth:2, borderLeftColor: '#AAA', marginBottom: 5, }}>
                    </View>
                    <View style={{ height: 10, borderLeftWidth:2, borderLeftColor: '#AAA', marginBottom: 5, }}>
                    </View>
                    <View style={{ height: 10, borderLeftWidth:2, borderLeftColor: '#AAA', }}>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Badge value={<Text style={{ color: '#E466DF', fontSize: 28, fontWeight: 'bold', }}>2</Text>} badgeStyle={{ backgroundColor: '#FFF', width: 50, height: 50, borderRadius: 50, borderColor: '#EEE' }} />
                    <View style={{ paddingLeft: 10, }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Then Purchase a plan</Text>
                        <Text style={{ fontSize: 16, color: '#A0A0A0', }}>Signup and purchase plan</Text>
                    </View>
                </View>


                <View style={{ paddingHorizontal: 25, paddingVertical: 10, }}>
                    <View style={{ height: 10, borderLeftWidth:2, borderLeftColor: '#AAA', marginBottom: 5, }}>
                    </View>
                    <View style={{ height: 10, borderLeftWidth:2, borderLeftColor: '#AAA', marginBottom: 5, }}>
                    </View>
                    <View style={{ height: 10, borderLeftWidth:2, borderLeftColor: '#AAA', }}>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Badge value={<Text style={{ color: '#8675EF', fontSize: 28, fontWeight: 'bold', }}>3</Text>} badgeStyle={{ backgroundColor: '#FFF', width: 50, height: 50, borderRadius: 50, borderColor: '#EEE' }} />
                    <View style={{ paddingLeft: 10, }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', }}>You make savings!</Text>
                        <Text style={{ fontSize: 16, color: '#A0A0A0', }}>Get 30% Bonus</Text>
                    </View>
                </View>
            </View>


            <View style={{ alignItems: 'center', }}>
                <View style={{ borderWidth:1, borderColor: '#E466DF', borderRadius:5, borderStyle: 'dashed', padding:10, width: 130, }}>
                    <Text style={{ color:'#E466DF', textAlign: 'center', fontSize:16, fontWeight: 'bold', }}>Domtryz1235n</Text>
                </View>

                <View>
                    <Text style={{ color: '#AAA', textAlign:'center', }}>Refer your friend and get 30% bonus on first subscription of your referral</Text>
                </View>

                <TouchableOpacity style={{ borderWidth:2, borderColor: '#E466DF', borderRadius: 50, paddingVertical: 10, paddingHorizontal: 30, marginVertical:20, }}>
                    <Text style={{ color:'#E466DF', textAlign: 'center', fontWeight: 'bold', }}>Refer Friend Now</Text>
                </TouchableOpacity>
            </View>

          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})