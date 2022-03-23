import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  PixelRatio,
  Switch,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import { useSelector, useDispatch } from 'react-redux';
import { addRegisterCountry_id } from '../../../../store/slicers/userSlice';
import { getCountries, getLoggedInUser } from "../../../../../http";

const { width, height } = Dimensions.get("window");

import {Picker} from '@react-native-picker/picker';

export default function RegisterHome({ navigation }) {
  const [countries, setCountries] = useState([]);
  const [country_id, setCountry_id] = useState(1);
  const [loading, setLoading] = useState(true);
  const registerData = useSelector((state) => state.user.registerData);
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      // const token = await AsyncStorage.getItem("token");
      // console.log("token", token);
      let {data} = await getCountries();
      setCountries(data);
      let uData = await getLoggedInUser();
      if(uData.data.success)
      {
        const user = uData.data.user;
        // console.log("user", uData.data.user);
        if(user.country_id > 0)
        {
          // console.log(user.verified);
          if(user.verified ==="Yes")
          {
            if(user.phrase !== "" && user.phrase !== null)
            {
              navigation.navigate("HomeScreen");
            }
            else
            {
              navigation.navigate("RegisterVerifyRecoveryPhrase");
            }
          }
          else
          {
            navigation.navigate("RegisterCode");
          }
        }
        else
        {
          setLoading(false);
        }
      }
      
      // console.log("countries", data);
    } catch (error) {
      console.log("error", error);
    }
    
  }, []);

  const next = async () => {
    console.log("Country_id", country_id);
    dispatch(addRegisterCountry_id(country_id));
    // console.log(registerData);
    navigation.navigate("RegisterForm");
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center", flex: 1 }}>
          <View
            style={{
              position: "relative",
              height: 50,
              width,
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity
              style={{ paddingVertical: 12 }}
              onPress={() => {
                navigation.navigate("Welcome");
              }}
            >
              <Icon name="close" size={30} color="black"></Icon>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../../../assets/images/image7.png")}
            resizeMode="contain"
            style={{ width: 150, height: 150 }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#000",
              textAlign: "center",
              paddingLeft: 40,
              paddingRight: 40,
              paddingBottom: 2,
              lineHeight: 40,
            }}
          >
            Before we start, we'll have to know your current location of residence.
          </Text>

          <View
            style={{ backgroundColor: "#dcdcdc", width: 300, marginTop: 40 }}
          >
            <Picker selectedValue={country_id} onValueChange={(value, index)=>{ setCountry_id(value); }} >
              {countries.map((c, i) => (
                <Picker.Item key={i} label={c.name} value={c.id} />
              ))}
            </Picker>
          </View>
          <View style={{ alignItems: "center", paddingTop: 50 }}>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                textAlign: "center",
                paddingLeft: 40,
                paddingRight: 40,
                paddingBottom: 2,
                lineHeight: 20,
                bottom: 40,
              }}
            >
              The registration process is subject to change based on the
              information you provide.
            </Text>
            <View
              style={{
                alignItems: "flex-end",
                marginTop: 100,
                paddingHorizontal: 20,
                width,
              }}
            >
              <TouchableOpacity
                style={{}}
                onPress={async () => {
                  await next();
                }}
              >
                <LinearGradient
                  // Button Linear Gradient
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 7,
                    marginTop: -10,
                  }}
                  colors={["#e234e3", "#e234e3"]}
                >
                  <Icon
                    type="fontisto"
                    name="arrowright"
                    size={20}
                    color={"#FFF"}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "white",
  },
  welcome: {
    fontSize: 17,
    textAlign: "center",
    margin: 5,
  },
  instructions: {
    fontSize: 10,
    textAlign: "center",
    color: "#888",
    marginBottom: 0,
  },
  data: {
    maxWidth: 250,
    padding: 10,
    marginTop: 7,
    backgroundColor: "#ddd",
    borderColor: "#888",
    borderWidth: 1 / PixelRatio.get(),
    color: "#777",
  },
});
