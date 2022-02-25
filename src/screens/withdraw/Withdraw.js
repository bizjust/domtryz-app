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
  Icon,
  Input,
  LinearProgress,
  ListItem,
  Overlay,
  Text,
} from "react-native-elements";
const { width, height } = Dimensions.get("window");
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";

import Slider from "@react-native-community/slider";

export default function Withdraw({ navigation }) {
  const [value, setValue] = useState(5000);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 30, 40, 50, 45, 20, 30, 20, 30, 40, 50, 40, 20, 30],
        barColors: ["#dfe4ea"],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E292300",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D00",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, 1)`,
    barRadius: 5,
    strokeWidth: 0, // optional, default 3
    barPercentage: 0.27,
    fillShadowGradientFrom: "#3F3577",
    fillShadowGradientFromOffset: 0.2,
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientTo: "#FFF",
    fillShadowGradientToOffset: 0.8,
    fillShadowGradientToOpacity: 1,
    fillShadowGradientOpacity: 1,
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        style="auto"
        barStyle="dark-content"
        backgroundColor={"#f2f2f2"}
      />
      <LinearGradient
        // Button Linear Gradient
        style={{ width: width, paddingVertical: 0, paddingHorizontal: 10 }}
        colors={["#FFFFFF00", "#FFFFFF00"]}
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
            <Icon type="ant-design" name="arrowleft" color={"#000"} />
          </TouchableOpacity>
          <View>
            {/* <Text style={{ color: "#FFF" }} h4>
              Plan Confirmation
            </Text> */}
          </View>
          <View>
            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate("ScanQR");
              }}
            >
              <Icon type="font-awesome" name="image" color={"#FFF"} />
            </TouchableOpacity> */}
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={{ color: "#000", textAlign: "left" }} h4>
            Withdraw
          </Text>
          <LinearGradient
            // Button Linear Gradient
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 20,
            }}
            colors={["#e234e3", "#3e3477"]}
          >
            <View>
              <Text style={{ color: "#FFF" }}>Total Earning</Text>
              <Text h4 style={{ color: "#FFF" }}>
                $10,000.00
              </Text>
            </View>

            <BarChart
              style={{ paddingRight: 0, paddingBottom: 0 }}
              data={data}
              width={width - 50}
              height={100}
              yAxisLabel="$"
              withHorizontalLabels={false}
              withVerticalLabels={false}
              withInnerLines={false}
              chartConfig={chartConfig}
              verticalLabelRotation={30}
              showBarTops={false}
              fromZero={true}
            />
          </LinearGradient>
        </View>
        <View style={{ padding: 10, alignItems: "center" }}>
          <Text h4 style={{ textAlign: "left", alignSelf: "flex-start" }}>
            Your Earnings
          </Text>

          <View
            style={{
              backgroundColor: "#FFF",
              alignItems: "center",
              justifyContent: "center",
              width: 150,
              height: 150,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Badge
              status="primary"
              badgeStyle={{
                width: 45,
                height: 45,
                borderRadius: 8,
                backgroundColor: "#E3F3FF",
              }}
              value={
                <Badge
                  status="primary"
                  value={<Text style={{ color: "#FFF" }}>P</Text>}
                  badgeStyle={{ borderRadius: 5, width: 30, height: 30 }}
                />
              }
            />
            <Text style={{ marginVertical: 10 }}>Pending</Text>
            <Text>$10,000.00</Text>
          </View>
          <View style={{ paddingVertical: 10, alignItems: "center" }}>
            <Text>Amount</Text>
            <Text h4>${value.toFixed(2)}</Text>
            <View style={{}}>
              <Slider
                style={{ width: width - 40, height: 60 }}
                onSlidingComplete={(value) => {
                  setValue(value);
                }}
                value={value}
                minimumValue={0}
                maximumValue={10000}
                minimumTrackTintColor="#3e3477"
                maximumTrackTintColor="#3e3477"
                thumbTintColor="#e234e3"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: width - 40,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#e234e344",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <LinearGradient
                  // Button Linear Gradient
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                  }}
                  colors={["#e234e322", "#e234e377"]}
                >
                  <LinearGradient
                    // Button Linear Gradient
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    colors={["#e234e3", "#3e3477"]}
                  >
                    <Text style={{ color: "#FFF" }}>$</Text>
                  </LinearGradient>
                  <View style={{ paddingTop: 6 }}>
                    <Text style={{ color: "#FFF" }}>20%</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#e234e344",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <LinearGradient
                  // Button Linear Gradient
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                  }}
                  colors={["#FFF", "#FFF"]}
                >
                  <LinearGradient
                    // Button Linear Gradient
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    colors={["#e234e3", "#3e3477"]}
                  >
                    <Text style={{ color: "#FFF" }}>$</Text>
                  </LinearGradient>
                  <View style={{ paddingTop: 6 }}>
                    <Text style={{ color: "#e234e3" }}>40%</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#e234e344",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <LinearGradient
                  // Button Linear Gradient
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                  }}
                  colors={["#e234e322", "#e234e377"]}
                >
                  <LinearGradient
                    // Button Linear Gradient
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    colors={["#e234e3", "#3e3477"]}
                  >
                    <Text style={{ color: "#FFF" }}>$</Text>
                  </LinearGradient>
                  <View style={{ paddingTop: 6 }}>
                    <Text style={{ color: "#FFF" }}>60%</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#e234e344",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <LinearGradient
                  // Button Linear Gradient
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                  }}
                  colors={["#e234e322", "#e234e377"]}
                >
                  <LinearGradient
                    // Button Linear Gradient
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    colors={["#e234e3", "#3e3477"]}
                  >
                    <Text style={{ color: "#FFF" }}>$</Text>
                  </LinearGradient>
                  <View style={{ paddingTop: 6 }}>
                    <Text style={{ color: "#FFF" }}>80%</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", paddingVertical: 10 }}>
              <TouchableOpacity onPress={()=>{ navigation.navigate("ConfirmAddress"); }}>
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
                    Request
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
