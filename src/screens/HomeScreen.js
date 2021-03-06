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

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";

import Layout from "./shared/Layout";
import axios from "axios";


export default function HomeScreen({ navigation }) {
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

  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1&per_page=20');
      setDataSource(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
    // return () => {
    //   effect
    // };
  }, [])

  if(loading) {
    return (
      <Layout navigation={navigation}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#FFF', }}>
          <Text>Loading...</Text>
        </View>
      </Layout>
    )
  }

  return (
    <Layout navigation={navigation}>
      <ScrollView
        style={{
          backgroundColor: "#FFF",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10,
        }}
      >

        <Text h4 style={{ textAlign: "center" }}>
          Markets
        </Text>
        <View style={{ padding: 10, paddingBottom: 80 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "20%" }}>
              <Text style={{ fontWeight: "bold" }}>All</Text>
            </View>
            <View style={{ width: "20%" }}>
              <Icon type="font-awesome" name="star" color={"#ccc"} />
            </View>
            <View style={{ width: "40%" }}></View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "flex-end",
                width: "20%",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Hot </Text>
                </View>
                <Icon
                  type="font-awesome"
                  name="long-arrow-down"
                  color={"#666"}
                />
              </View>
            </View>
          </View>




          {dataSource.map((item, index) => {
            return (<View
            key={index}
            style={{
              flexDirection: "row",
              borderBottomWidth: 0,
              borderTopWidth: 0,
              paddingVertical: 7,
            }}
          >
            <View style={{ width: "20%" }}>
              <View>
                <Image
                  source={{uri: item.image}}
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "column", height: 60, width: "20%" }}>
              <View>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <Text style={{ color: "#999" }}>{item.symbol}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "column", width: "30%", height: 60 }}>
              <View>
                <LineChart
                  data={data}
                  width={110}
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
            <View style={{ width: "30%" }}>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: 'right' }}>
                  {'$'+item.current_price}
                </Text>
                <Text style={{ textAlign: "right", color: "#0099CC" }}>
                  {item.price_change_percentage_24h}%
                </Text>
              </View>
            </View>
          </View>)
          })}

          

          

          

          

          

          



        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({});
