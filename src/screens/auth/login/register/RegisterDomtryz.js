import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Divider, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
// import SelectDropdown from 'react-native-select-dropdown'
import { Button } from "react-native-elements/dist/buttons/Button";
const { width, height } = Dimensions.get("window");
const countries = ["Egypt", "Canada", "Australia", "Irelan"];
export default function RegisterDomtryz({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ alignItems:'center', }}>
          <Image
            source={require("../../../../../assets/images/favicon.png")}
            resizeMode="contain"
            style={{ width: 100, height: 100, marginTop: 80 }}
          />

          <Text
            style={{
              marginTop: 20,
            }}
          h3>
            Welcome to Domtryz
          </Text>
          <Text
            style={{
              fontSize: 16,
              paddingBottom: 50,
              marginTop: 5,
            }}
          >
            Join the world's largest crypto Wallet
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#EEEEEE",
            paddingBottom: 50,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 5,
            alignItems: 'flex-start',
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 40,
              }}
            >
              <View>
                <TouchableOpacity>
                  <Icon name="checkcircle" size={15} color="#e234e3"></Icon>
                </TouchableOpacity>
              </View>
               &nbsp;Create your account
            </Text>
          </View>
          <View style={{ paddingHorizontal: 30, }}>
            <TouchableOpacity>
              <Text style={{ color: "#e234e3", fontSize: 15, }}>
                +18903***555
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 0,
                paddingBottom: 2,
              }}
            >
              <View>
                <TouchableOpacity>
                  <Icon name="checkcircle" size={15} color="#e234e3"></Icon>
                </TouchableOpacity>
              </View>
              &nbsp;Verify your identity (2mints)
            </Text>
          </View>
          <View style={{ paddingLeft: 30, }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#e234e3",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                <View>
                  <TouchableOpacity>
                    <Icon name="check" size={15} color="#1e90ff"></Icon>
                  </TouchableOpacity>
                </View>
                Buy crypto with credit or debit card
              </Text>
            </TouchableOpacity>


            <TouchableOpacity>
              <Text style={{ color: "#e234e3", fontSize: 16, marginTop: 10, }}>
                <View>
                  <TouchableOpacity>
                    <Icon name="check" size={15} color="#1e90ff"></Icon>
                  </TouchableOpacity>
                </View>
                Deposit and withdraw
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center', paddingTop: 50, }}>
          <TouchableOpacity style={{ paddingVertical: 12, }} onPress={() => { navigation.navigate("RegisterVerifyRecoveryPhrase"); }}>
            <LinearGradient
            // Button Linear Gradient
            style={{ paddingVertical: 14, paddingHorizontal: 10, width: width - 50, borderRadius: 7, }}
            colors={['#e234e3', '#3e3477']}
            >
            <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>Verify Now</Text>
        </LinearGradient>
      </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: "#e234e3",
              fontSize: 20,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
