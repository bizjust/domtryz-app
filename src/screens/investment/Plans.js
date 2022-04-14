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
import Carousel from "pinar";
import { investmentPlans } from "../../../http";

export default function Plans({ route, navigation }) {

  const [loading, setLoading] = useState(true);
  const [plans1, setPlans1] = useState([]);
  const [plans2, setPlans2] = useState([]);
  const [plans3, setPlans3] = useState([]);

  useEffect(async () => {
    try {
      const p1 = await investmentPlans({ type:1 });
      const p2 = await investmentPlans({ type:2 });
      const p3 = await investmentPlans({ type:3 });
      setPlans1(p1.data.investmentPlans);
      setPlans2(p2.data.investmentPlans);
      setPlans3(p3.data.investmentPlans);
      // console.log(p1.data.investmentPlans);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
    // return () => {
    //   effect
    // };
  }, [])

  if(loading){
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Loading...</Text></View>
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
              Buy BTC
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
      <ScrollView style={{ backgroundColor: '#FFF', }}>
        <View style={{ alignItems: "center" }}>
          <Text h4 style={{ marginVertical: 16 }}>
            Investment Plans
          </Text>


          <Carousel
            style={{ height: 180, width: 300, alignItems: "center" }}
            loop
            controlsButtonStyle={{
              backgroundColor: "#e234e3",
              height: 40,
              width: 40,
              justifyContent: "center",
              borderRadius: 50,
              marginTop: -40,
            }}
            controlsTextStyle={{
              color: "#FFF",
              fontSize: 40,
              alignSelf: "center",
              marginTop: -10,
            }}
          >

            {plans1.map((plan, index) => {
              return (<View key={index} style={styles.slide1}>
                <View style={[styles.slide1Inner, { backgroundColor: '#3E3477' }]}>
                  <View style={{ alignItems: 'center', paddingTop: 10, }}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>{'$'+plan.price}</Text>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>{plan.duration} Months</Text>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit {'$'+plan.profit}</Text>
                    <LinearGradient
                      // Button Linear Gradient
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 7,
                      }}
                      colors={["#FFF", "#CCC"]}
                    >
                        <Text style={{ color: '#3E3477' }}>Buy Now</Text>
                    </LinearGradient>
                  </View>
                  <View style={{ }}>
                      <View>
                          <View style={{ alignItems: 'flex-end', width: 100, }}>
                              <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:1 }); }}>
                                  <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                              </TouchableOpacity>
                          </View>
                          <View style={{ marginVertical: 20, }}>
                              <Image source={{ uri: plan.img }} style={{ width: 80, height: 80, }} resizeMode="contain" />
                          </View>
                      </View>
                  </View>
                </View>
              </View>);
            })}
            
            
          </Carousel>
        </View>







        <View style={{ alignItems: "center" }}>
          <Carousel
            style={{ height: 180, width: 300, alignItems: "center" }}
            loop
            controlsButtonStyle={{
              backgroundColor: "#e234e3",
              height: 40,
              width: 40,
              justifyContent: "center",
              borderRadius: 50,
              marginTop: -40,
            }}
            controlsTextStyle={{
              color: "#FFF",
              fontSize: 40,
              alignSelf: "center",
              marginTop: -10,
            }}
          >
            



            {plans2.map((plan, index) => {
              return (<View key={index} style={styles.slide1}>
                <View style={[styles.slide1Inner, { backgroundColor: '#7B68EE' }]}>
                  <View style={{ alignItems: 'center', paddingTop: 10, }}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>{'$'+plan.price}</Text>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>{plan.duration} Months</Text>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit {'$'+plan.profit}</Text>
                    <LinearGradient
                      // Button Linear Gradient
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 7,
                      }}
                      colors={["#FFF", "#CCC"]}
                    >
                        <Text style={{ color: '#3E3477' }}>Buy Now</Text>
                    </LinearGradient>
                  </View>
                  <View style={{ }}>
                      <View>
                          <View style={{ alignItems: 'flex-end', width: 100, }}>
                              <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:1 }); }}>
                                  <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                              </TouchableOpacity>
                          </View>
                          <View style={{ marginVertical: 20, }}>
                              <Image source={{ uri: plan.img }} style={{ width: 80, height: 80, }} resizeMode="contain" />
                          </View>
                      </View>
                  </View>
                </View>
              </View>);
            })}





            
            
            
            
            
          </Carousel>
        </View>



        <View style={{ alignItems: "center" }}>
          <Carousel
            style={{ height: 180, width: 300, alignItems: "center" }}
            loop
            controlsButtonStyle={{
              backgroundColor: "#e234e3",
              height: 40,
              width: 40,
              justifyContent: "center",
              borderRadius: 50,
              marginTop: -40,
            }}
            controlsTextStyle={{
              color: "#FFF",
              fontSize: 40,
              alignSelf: "center",
              marginTop: -10,
            }}
          >





            {plans3.map((plan, index) => {
              return (<View key={index} style={styles.slide1}>
                <View style={[styles.slide1Inner, { backgroundColor: '#28BDCD' }]}>
                  <View style={{ alignItems: 'center', paddingTop: 10, }}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>{'$'+plan.price}</Text>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>{plan.duration} Months</Text>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit {'$'+plan.profit}</Text>
                    <LinearGradient
                      // Button Linear Gradient
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 7,
                      }}
                      colors={["#FFF", "#CCC"]}
                    >
                        <Text style={{ color: '#3E3477' }}>Buy Now</Text>
                    </LinearGradient>
                  </View>
                  <View style={{ }}>
                      <View>
                          <View style={{ alignItems: 'flex-end', width: 100, }}>
                              <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:1 }); }}>
                                  <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                              </TouchableOpacity>
                          </View>
                          <View style={{ marginVertical: 20, }}>
                              <Image source={{ uri: plan.img }} style={{ width: 80, height: 80, }} resizeMode="contain" />
                          </View>
                      </View>
                  </View>
                </View>
              </View>);
            })}
            


          </Carousel>
        </View>


        <View style={{ alignItems: 'center', paddingBottom: 30, }}>
        <TouchableOpacity onPress={()=>{ navigation.goBack(); }} >
            <LinearGradient
            // Button Linear Gradient
            style={{ paddingVertical: 12, paddingHorizontal: 10, width: 250, borderRadius: 7, }}
            colors={['#e234e3', '#3e3477']}
            >
            <Text style={{ color: '#FFF', textAlign: 'center' }}>Back</Text>
        </LinearGradient>
      </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    alignItems: "center",
  },
  slide1Inner: {
    width: 250,
    height: 140,
    flexDirection: "row",
    borderRadius: 20,
    paddingHorizontal: 30,
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
});
