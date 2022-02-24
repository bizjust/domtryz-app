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

export default function Plans({ route, navigation }) {
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
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#3E3477' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$100</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>3 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $10</Text>
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
                            <Image source={require('../../../assets/images/p10.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#3E3477' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$200</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>3 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $30</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:2 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p15.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#3E3477' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$500</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>3 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $150</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:3 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p30.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
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
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#7B68EE' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$100</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>6 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $20</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:4 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p20.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#7B68EE' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$200</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>6 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $60</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:5 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p30.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#7B68EE' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$500</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>6 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $250</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:6 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p50.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#7B68EE' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$1000</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>6 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $700</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:7 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p70.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#7B68EE' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$2000</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>6 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $1600</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:8 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p80.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
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
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#28BDCD' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$100</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>12 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $60</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:9 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p60.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#28BDCD' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$200</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>6 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $140</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:10 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p70.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#28BDCD' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$500</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>6 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $400</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:11 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p80.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>


            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#28BDCD' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$1000</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>6 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $900</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:12 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p90.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>



            <View style={styles.slide1}>
              <View style={[styles.slide1Inner, { backgroundColor: '#28BDCD' }]}>
                <View style={{ alignItems: 'center', paddingTop: 10, }}>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom:3, }}>$2000</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginBottom:3, }}>6 Months</Text>
                  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12, marginBottom:10,  }}>Profit $2000</Text>
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
                            <TouchableOpacity onPress={()=>{ navigation.navigate("PlanDetails", { plan_id:13 }); }}>
                                <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20, }}>
                            <Image source={require('../../../assets/images/p100.png')} resizeMode="contain" />
                        </View>
                    </View>
                </View>
              </View>
            </View>
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
