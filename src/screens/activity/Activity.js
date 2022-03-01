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
import {
  Avatar,
  Badge,
  Icon,
  Input,
  LinearProgress,
  ListItem,
  Overlay,
  Switch,
  Text,
} from "react-native-elements";
import BottomTabs from "../shared/BottomTabs";
const { width, height } = Dimensions.get("window");

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";

export default function Activity({ navigation }) {
  const [show, setShow] = useState(false);

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

  const [showTrans, setShowTrans] = useState(false);

  const [tData, setTData] = useState([
    {
      title: "Sent BTC",
      date: "6 Feb 2022",
      btc: "0.00029235 BTC",
      usd: "US$50.10",
    },
    {
      title: "Sent BTC",
      date: "6 Feb 2022",
      btc: "0.00029235 BTC",
      usd: "US$50.10",
    },
    {
      title: "Sent BTC",
      date: "6 Feb 2022",
      btc: "0.00029235 BTC",
      usd: "US$50.10",
    },
    {
      title: "Sent BTC",
      date: "6 Feb 2022",
      btc: "0.00029235 BTC",
      usd: "US$50.10",
    },
    {
      title: "Sent BTC",
      date: "6 Feb 2022",
      btc: "0.00029235 BTC",
      usd: "US$50.10",
    },
    {
      title: "Sent BTC",
      date: "6 Feb 2022",
      btc: "0.00029235 BTC",
      usd: "US$50.10",
    },
    {
      title: "Sent BTC",
      date: "6 Feb 2022",
      btc: "0.00029235 BTC",
      usd: "US$50.10",
    },
  ]);

  const Transactions = () => {
    if (!showTrans) {
      return (
        <View style={{ marginTop: 100 }}>
          <Text h4 style={{ textAlign: "center" }}>
            You Have No Activity
          </Text>
          <Text style={{ textAlign: "center", color: "#666" }}>
            All your transactions will show up here.
          </Text>
        </View>
      );
    }

    return (
      <View style={{ flex:1, }}>
        {tData.map((d, i) => (
          <ListItem
            key={i}
            style={{ width: width }}
            bottomDivider
            onPress={() => {
              setShow(true);
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#F6C8F5",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <Icon type="feather" name="arrow-up-right" color="#e234e3" />
            </View>
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: "bold" }}>
                {d.title}
              </ListItem.Title>
              <ListItem.Subtitle>{d.date}</ListItem.Subtitle>
            </ListItem.Content>

            <ListItem.Content style={{ alignItems: "flex-end" }}>
              <ListItem.Title style={{ fontWeight: "bold" }}>
                {d.btc}
              </ListItem.Title>
              <ListItem.Subtitle style={{ textAlign: "right" }}>
                {d.usd}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor={"#e234e3"}
      />
      <LinearGradient
        // Button Linear Gradient
        style={{ width: width, paddingVertical: 20, paddingHorizontal: 10 }}
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
              Activity
            </Text>
          </View>
          <View>
            {/* <TouchableOpacity onPress={() => {}}>
              <Icon type="feather" name="info" color={"#FFF"} />
            </TouchableOpacity> */}
          </View>
        </View>
      </LinearGradient>

      <View style={{ flex:1,alignItems: "center", width: width }}>
        <ListItem
          style={{ width: width }}
          bottomDivider
          onPress={() => {
            setShow(true);
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#F6C8F5",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Icon type="fontisto" name="wallet" color="#e234e3" />
          </View>
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "bold" }}>
              All Wallets
            </ListItem.Title>
            {showTrans?<ListItem.Subtitle>US$20.80</ListItem.Subtitle>:<View></View>}
          </ListItem.Content>
          <Icon type="fontisto" name="angle-down" size={12} color="#e234e3" />
        </ListItem>
        <View style={{ height: height - 220, width }}>
            <ScrollView
            style={{
                flex: 1,
                backgroundColor: "#FFF",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingTop: 10,
                height: 200,
            }}
            >
            <Transactions />
            </ScrollView>
        </View>
      </View>

      <Overlay
        visible={show}
        onBackdropPress={() => {
          setShow(false);
        }}
        overlayStyle={{
          width: width - 20,
          height,
          borderRadius: 20,
          padding: 0,
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: "center",
              borderBottomWidth: 1,
              padding: 10,
              position: "relative",
              borderColor: "#CCC",
            }}
          >
            <Text h4>Select a Wallet</Text>
            <TouchableOpacity
              style={{ position: "absolute", right: 10, top: 10 }}
              onPress={() => {
                setShow(false);
              }}
            >
              <Badge
                value={
                  <Text style={{ color: "#FFF", fontSize: 18, marginTop: -5 }}>
                    x
                  </Text>
                }
                status="primary"
                badgeStyle={{
                  width: 26,
                  height: 26,
                  borderRadius: 50,
                  backgroundColor: "#A8A8A8",
                }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <ListItem
              bottomDivider
              onPress={() => {
                // setShow(true);
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#F6C8F5",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                }}
              >
                <Icon type="fontisto" name="wallet" color="#e234e3" />
              </View>
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "bold", fontSize: 18 }}>
                  All Wallets
                </ListItem.Title>
                <ListItem.Subtitle>Total Balance</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>
          <ScrollView style={{}}>
            <View style={{ padding: 10, paddingBottom: 80 }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  paddingVertical: 7,
                  alignItems: "center",
                }}
                onPress={()=>{setShowTrans(true);setShow(false);}}
              >
                <View style={{ width: "20%" }}>
                  <View>
                    <Image
                      source={require("../../../assets/images/bnb.png")}
                      resizeMode="contain"
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", height: 60, width: "20%" }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>BNB</Text>
                    <Text style={{ color: "#999" }}>BNB</Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", width: "30%", height: 60 }}
                >
                  <View>
                    <LineChart
                      data={data}
                      width={90}
                      height={40}
                      chartConfig={chartConfig}
                      transparent={true}
                      bezier={true}
                      fromZero={true}
                      withHorizontalLabels={false}
                      withVerticalLabels={false}
                      withDots={true}
                      style={{ paddingRight: 0 }}
                      hideLegend={true}
                      withHorizontalLines={false}
                      withVerticalLines={false}
                      withShadow={false}
                    />
                  </View>
                </View>
                <View style={{ width: "20%" }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      $410.09
                    </Text>
                    <Text style={{ textAlign: "right", color: "#0099CC" }}>
                      +10.72%
                    </Text>
                  </View>
                </View>
                <View style={{ width: "10%" }}>
                  <Icon
                    type="fontisto"
                    name="angle-right"
                    size={12}
                    color="#e234e3"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  paddingVertical: 7,
                  alignItems: "center",
                }}
                onPress={()=>{setShowTrans(true);setShow(false);}}
              >
                <View style={{ width: "20%" }}>
                  <View>
                    <Image
                      source={require("../../../assets/images/bnb.png")}
                      resizeMode="contain"
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", height: 60, width: "20%" }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>BNB</Text>
                    <Text style={{ color: "#999" }}>BNB</Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", width: "30%", height: 60 }}
                >
                  <View>
                    <LineChart
                      data={data}
                      width={90}
                      height={40}
                      chartConfig={chartConfig}
                      transparent={true}
                      bezier={true}
                      fromZero={true}
                      withHorizontalLabels={false}
                      withVerticalLabels={false}
                      withDots={true}
                      style={{ paddingRight: 0 }}
                      hideLegend={true}
                      withHorizontalLines={false}
                      withVerticalLines={false}
                      withShadow={false}
                    />
                  </View>
                </View>
                <View style={{ width: "20%" }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      $410.09
                    </Text>
                    <Text style={{ textAlign: "right", color: "#0099CC" }}>
                      +10.72%
                    </Text>
                  </View>
                </View>
                <View style={{ width: "10%" }}>
                  <Icon
                    type="fontisto"
                    name="angle-right"
                    size={12}
                    color="#e234e3"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  paddingVertical: 7,
                  alignItems: "center",
                }}
                onPress={()=>{setShowTrans(true);setShow(false);}}
              >
                <View style={{ width: "20%" }}>
                  <View>
                    <Image
                      source={require("../../../assets/images/bnb.png")}
                      resizeMode="contain"
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", height: 60, width: "20%" }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>BNB</Text>
                    <Text style={{ color: "#999" }}>BNB</Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", width: "30%", height: 60 }}
                >
                  <View>
                    <LineChart
                      data={data}
                      width={90}
                      height={40}
                      chartConfig={chartConfig}
                      transparent={true}
                      bezier={true}
                      fromZero={true}
                      withHorizontalLabels={false}
                      withVerticalLabels={false}
                      withDots={true}
                      style={{ paddingRight: 0 }}
                      hideLegend={true}
                      withHorizontalLines={false}
                      withVerticalLines={false}
                      withShadow={false}
                    />
                  </View>
                </View>
                <View style={{ width: "20%" }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      $410.09
                    </Text>
                    <Text style={{ textAlign: "right", color: "#0099CC" }}>
                      +10.72%
                    </Text>
                  </View>
                </View>
                <View style={{ width: "10%" }}>
                  <Icon
                    type="fontisto"
                    name="angle-right"
                    size={12}
                    color="#e234e3"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  paddingVertical: 7,
                  alignItems: "center",
                }}
                onPress={()=>{setShowTrans(true);setShow(false);}}
              >
                <View style={{ width: "20%" }}>
                  <View>
                    <Image
                      source={require("../../../assets/images/bnb.png")}
                      resizeMode="contain"
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", height: 60, width: "20%" }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>BNB</Text>
                    <Text style={{ color: "#999" }}>BNB</Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", width: "30%", height: 60 }}
                >
                  <View>
                    <LineChart
                      data={data}
                      width={90}
                      height={40}
                      chartConfig={chartConfig}
                      transparent={true}
                      bezier={true}
                      fromZero={true}
                      withHorizontalLabels={false}
                      withVerticalLabels={false}
                      withDots={true}
                      style={{ paddingRight: 0 }}
                      hideLegend={true}
                      withHorizontalLines={false}
                      withVerticalLines={false}
                      withShadow={false}
                    />
                  </View>
                </View>
                <View style={{ width: "20%" }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      $410.09
                    </Text>
                    <Text style={{ textAlign: "right", color: "#0099CC" }}>
                      +10.72%
                    </Text>
                  </View>
                </View>
                <View style={{ width: "10%" }}>
                  <Icon
                    type="fontisto"
                    name="angle-right"
                    size={12}
                    color="#e234e3"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  paddingVertical: 7,
                  alignItems: "center",
                }}
                onPress={()=>{setShowTrans(true);setShow(false);}}
              >
                <View style={{ width: "20%" }}>
                  <View>
                    <Image
                      source={require("../../../assets/images/bnb.png")}
                      resizeMode="contain"
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", height: 60, width: "20%" }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>BNB</Text>
                    <Text style={{ color: "#999" }}>BNB</Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", width: "30%", height: 60 }}
                >
                  <View>
                    <LineChart
                      data={data}
                      width={90}
                      height={40}
                      chartConfig={chartConfig}
                      transparent={true}
                      bezier={true}
                      fromZero={true}
                      withHorizontalLabels={false}
                      withVerticalLabels={false}
                      withDots={true}
                      style={{ paddingRight: 0 }}
                      hideLegend={true}
                      withHorizontalLines={false}
                      withVerticalLines={false}
                      withShadow={false}
                    />
                  </View>
                </View>
                <View style={{ width: "20%" }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      $410.09
                    </Text>
                    <Text style={{ textAlign: "right", color: "#0099CC" }}>
                      +10.72%
                    </Text>
                  </View>
                </View>
                <View style={{ width: "10%" }}>
                  <Icon
                    type="fontisto"
                    name="angle-right"
                    size={12}
                    color="#e234e3"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  paddingVertical: 7,
                  alignItems: "center",
                }}
                onPress={()=>{setShowTrans(true);setShow(false);}}
              >
                <View style={{ width: "20%" }}>
                  <View>
                    <Image
                      source={require("../../../assets/images/bnb.png")}
                      resizeMode="contain"
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", height: 60, width: "20%" }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>BNB</Text>
                    <Text style={{ color: "#999" }}>BNB</Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", width: "30%", height: 60 }}
                >
                  <View>
                    <LineChart
                      data={data}
                      width={90}
                      height={40}
                      chartConfig={chartConfig}
                      transparent={true}
                      bezier={true}
                      fromZero={true}
                      withHorizontalLabels={false}
                      withVerticalLabels={false}
                      withDots={true}
                      style={{ paddingRight: 0 }}
                      hideLegend={true}
                      withHorizontalLines={false}
                      withVerticalLines={false}
                      withShadow={false}
                    />
                  </View>
                </View>
                <View style={{ width: "20%" }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      $410.09
                    </Text>
                    <Text style={{ textAlign: "right", color: "#0099CC" }}>
                      +10.72%
                    </Text>
                  </View>
                </View>
                <View style={{ width: "10%" }}>
                  <Icon
                    type="fontisto"
                    name="angle-right"
                    size={12}
                    color="#e234e3"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  paddingVertical: 7,
                  alignItems: "center",
                }}
                onPress={()=>{setShowTrans(true);setShow(false);}}
              >
                <View style={{ width: "20%" }}>
                  <View>
                    <Image
                      source={require("../../../assets/images/bnb.png")}
                      resizeMode="contain"
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", height: 60, width: "20%" }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>BNB</Text>
                    <Text style={{ color: "#999" }}>BNB</Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "column", width: "30%", height: 60 }}
                >
                  <View>
                    <LineChart
                      data={data}
                      width={90}
                      height={40}
                      chartConfig={chartConfig}
                      transparent={true}
                      bezier={true}
                      fromZero={true}
                      withHorizontalLabels={false}
                      withVerticalLabels={false}
                      withDots={true}
                      style={{ paddingRight: 0 }}
                      hideLegend={true}
                      withHorizontalLines={false}
                      withVerticalLines={false}
                      withShadow={false}
                    />
                  </View>
                </View>
                <View style={{ width: "20%" }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      $410.09
                    </Text>
                    <Text style={{ textAlign: "right", color: "#0099CC" }}>
                      +10.72%
                    </Text>
                  </View>
                </View>
                <View style={{ width: "10%" }}>
                  <Icon
                    type="fontisto"
                    name="angle-right"
                    size={12}
                    color="#e234e3"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Overlay>

      <BottomTabs navigation={navigation} activeTab="activity" />
    </View>
  );
}

const styles = StyleSheet.create({});
