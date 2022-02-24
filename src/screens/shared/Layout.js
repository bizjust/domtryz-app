import {
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, Text } from "react-native-elements";
const { width, height } = Dimensions.get("window");

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";

export default function Layout({children, navigation}) {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientTo: "#FFF",
    color: (opacity = 1) => `rgba(0, 100, 255, ${opacity})`,
    labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    stackedBar: false,
  };

  return (
    <LinearGradient
      // Button Linear Gradient
      style={{ width: width, height: height, flex: 1 }}
      colors={["#e234e3", "#3e3477", "#3e3477", "#3e3477"]}
    >
      <View style={{ height: 200 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <TouchableOpacity>
            <Icon type="font-awesome" name="bell" color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon type="font-awesome" name="qrcode" color={"#FFF"} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text h2 style={{ color: "#FFF" }}>
            $0.10
          </Text>
          <Text style={{ color: "#FFF" }}>Main Wallet</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-around', paddingVertical: 10, }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigation.navigate("SearchCoin", {back:true}); }}>
            <LinearGradient
              // Button Linear Gradient
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 7,
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              colors={["#FFFFFF55", "#FFFFFF55"]}
            >
              <Icon type="fontisto" name="arrow-up" color={"#FFF"} />
            </LinearGradient>
            <Text style={{ textAlign: 'center', color: '#FFF', }}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={()=>{ navigation.navigate("SearchReceive"); }} >
            <LinearGradient
              // Button Linear Gradient
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 7,
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              colors={["#FFFFFF55", "#FFFFFF55"]}
            >
              <Icon type="fontisto" name="arrow-down" color={"#FFF"} />
            </LinearGradient>
            <Text style={{ textAlign: 'center', color: '#FFF', }}>Receive</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={()=>{ navigation.navigate("SearchBuy"); }} >
            <LinearGradient
              // Button Linear Gradient
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 7,
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              colors={["#FFFFFF55", "#FFFFFF55"]}
            >
              <Icon type="material-community" name="cart-outline" color={"#FFF"} />
            </LinearGradient>
            <Text style={{ textAlign: 'center', color: '#FFF', }}>Buy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={()=>{ navigation.navigate("Plans"); }}>
            <LinearGradient
              // Button Linear Gradient
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 7,
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              colors={["#FFFFFF55", "#FFFFFF55"]}
            >
              <Icon type="font-awesome-5" name="hand-holding-usd" color={"#FFF"} />
            </LinearGradient>
            <Text style={{ textAlign: 'center', color: '#FFF', }}>Investment</Text>
          </TouchableOpacity>
        </View>
      </View>
      {children}
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
        <TouchableOpacity style={{ alignItems: "center", width: width / 6 }}>
          <Icon type="material-community" name="clock" />
          <Text style={styles.tabsText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", width: width / 6 }}>
          <Icon type="material-community" name="chart-line-stacked" />
          <Text style={styles.tabsText}>Prices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Icon type="fontisto" name="wallet" size={50} color="#e234e3" />
          <Text style={styles.tabsText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", width: width / 6 }}>
          <Icon type="material-community" name="credit-card-check" />
          <Text style={styles.tabsText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", width: width / 6 }}>
          <Icon type="material-community" name="cog" />
          <Text style={styles.tabsText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" backgroundColor={"#e234e3"} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  tabsText: {
    fontSize: 10,
  },
});
