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

export default function PlanDetails({ route, navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");

  useEffect(() => {
    console.log(route.params);
  }, []);

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
              Details
            </Text>
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
        <View style={{ alignItems: "center" }}>
          <View style={{ padding: 20 }}>
            <Text h4>Plan Details</Text>
          </View>
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text>Profit in july</Text>
            <Text h2>$150.00</Text>
          </View>

          <View>
            <LineChart
              data={{
                labels: ["JUN", "JUL", "NOV", "SEP", "OCT", "DEC"],
                datasets: [
                  {
                    data: [100, 90, 95, 110, 120, 0, 70, 50, 90, 80, 150, 200],
                  },
                ],
              }}
              width={Dimensions.get("window").width - 10} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix="k"
              withShadow={true}
              withDots={false}
              withVerticalLines={false}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#FFF",
                backgroundGradientFrom: "#FFF",
                backgroundGradientTo: "#FFF",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(228, 2, 119, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#e234e3",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <LinearGradient
              // Button Linear Gradient
              style={{
                width: width - 40,
                paddingVertical: 30,
                paddingHorizontal: 20,
                borderRadius: 20,
              }}
              colors={["#e234e3", "#3e3477"]}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={{ color: "#FFF" }}>Plan Jan 2022</Text>
                    <Text style={{ color: "#FFF" }} h4>
                      Completed 10%
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setShowModal(!showModal);
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFF",
                          textDecorationLine: "underline",
                        }}
                      >
                        View Details
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 50,
                  }}
                >
                  <View style={{ width: 100 }}>
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      value={0.85}
                      trackColor="#FFF"
                      style={{ height: 10, borderRadius: 20 }}
                    />
                    <Text style={{ textAlign: "center", color: "#FFF" }}>
                      Tasks 85%
                    </Text>
                  </View>
                  <View style={{ width: 100 }}>
                    <LinearProgress
                      color="pink"
                      variant="determinate"
                      value={0.4}
                      trackColor="#FFF"
                      style={{ height: 10, borderRadius: 20 }}
                    />
                    <Text style={{ textAlign: "center", color: "#FFF" }}>
                      Report 40%
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>

        <Overlay
          isVisible={showModal}
          onBackdropPress={() => {
            setShowModal(false);
          }}
          overlayStyle={{ borderRadius: 20, width: width - 40, alignItems: 'center', paddingTop: 40, }}
        >
            <View>
            <Icon
                type="material-community"
                name="checkbox-marked-circle"
                color={"#e234e3"}
                size={100}
            />
            </View>
          <View style={{ borderBottomColor: '#CCC', borderBottomWidth: 1, width: width - 40, alignItems: 'center', paddingVertical: 20, }}>
          <Text h2>$10.00<Text style={{ marginBottom: 7, fontSize: 18, color: '#999' }}>USD</Text></Text>
          <Text style={{ color: '#999' }}>10 October 2022, 23.59</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingVertical: 10, }}>
              <TouchableOpacity onPress={()=>{ setActiveBtn("star"); navigation.navigate("PlanConfirmation");  }}>
                <Icon type="font-awesome" name="star" color={"#e234e3"} raised reverse={activeBtn==="star"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ setActiveBtn("refresh"); }}>
              <Icon type="font-awesome" name="refresh" color={"#e234e3"} raised reverse={activeBtn==="refresh"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{ setActiveBtn("share"); }}>
              <Icon type="material-community" name="share-variant" color={"#e234e3"} raised reverse={activeBtn==="share"} />
              </TouchableOpacity>
          </View>
        </Overlay>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
