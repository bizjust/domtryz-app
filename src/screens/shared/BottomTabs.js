import {
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, Text } from "react-native-elements";
const { width, height } = Dimensions.get("window");

export default function BottomTabs({ navigation, activeTab }) {

  const [cTab, setCTab] = useState("home");

  useEffect(() => {
    if(activeTab === undefined || activeTab === null)
    {
      setCTab("home");
    }
    else
    {
      setCTab(activeTab);
    }
    // console.log("active: ",activeTab);
    // return () => {
    //   effect
    // };
  }, [])

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
        position: "absolute",
        bottom: 0,
        width: width,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
        paddingVertical: 5,
      }}
    >
      <TouchableOpacity style={{ alignItems: "center", width: width / 6 }} onPress={()=>{ navigation.navigate("Activity"); }} >
        <Icon type="material-community" name="clock" color={(activeTab==="activity")?"#e234e3":"#000"} />
        <Text style={styles.tabsText}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center", width: width / 6 }} onPress={()=>{ navigation.navigate("ReferFriend"); }} >
        <Icon type="font-awesome" name="user-plus" color={(activeTab==="refer")?"#e234e3":"#000"} />
        <Text style={styles.tabsText}>Refer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }} onPress={()=>{ navigation.navigate("HomeScreen"); }}>
        <Icon type="fontisto" name="wallet" size={50} color="#e234e3" />
        <Text style={styles.tabsText}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", width: width / 6 }}
        onPress={() => {
          navigation.navigate("Withdraw");
        }}
      >
        <Icon type="material-community" name="credit-card-check" color={(activeTab==="withdraw")?"#e234e3":"#000"} />
        <Text style={styles.tabsText}>Withdraw</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", width: width / 6 }}
        onPress={() => {
          navigation.navigate("Settings");
        }}
      >
        <Icon type="material-community" name="cog" color={(activeTab==="settings")?"#e234e3":"#000"} />
        <Text style={styles.tabsText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabsText: {
    fontSize: 10,
  },
});
