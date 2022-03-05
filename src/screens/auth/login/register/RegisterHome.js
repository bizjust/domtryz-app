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
  Picker
} from "react-native";
import React from "react";
import { Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get("window");

export default function RegisterHome({ navigation }) {
  

  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', flex:1, }}>
          <View style={{ position: 'relative', height: 50, width, paddingHorizontal: 10, }}>
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
            Before we start, we'll have to know your current location of
            residence.
          </Text>

          <View
            style={{ backgroundColor: "#dcdcdc", width: 300, marginTop: 40 }}
          >
          

            <Picker>
              <Picker.Item label="Albania" value="Albania" />
              <Picker.Item label="Andorra" value="Andorra" />
              <Picker.Item label="Armenia" value="Armenia" />
              <Picker.Item label="Australia" value="Australia" />
              <Picker.Item label="Belarus" value="Belarus" />
              <Picker.Item label="Belgium" value="Belgium" />
              <Picker.Item label="China" value="China" />
              <Picker.Item label="Croatia" value="Croatia" />
              <Picker.Item label="France" value="France" />
              <Picker.Item label="Georgia" value="Georgia" />
              <Picker.Item label="Germany" value="Germany" />
              <Picker.Item label="Greece" value="Greece" />
              <Picker.Item label="Ireland" value="Ireland" />
              <Picker.Item label="Italy" value="Italy" />
              <Picker.Item label="Kosovo" value="Kosovo" />
              <Picker.Item label="Latvia" value="Latvia" />
              <Picker.Item label="Norway" value="Norway" />
              <Picker.Item label="Pakistan" value="Pakistan" />
              <Picker.Item label="Portugal" value="Portugal" />
              <Picker.Item label="Romania" value="Romania" />
              <Picker.Item label="Russia" value="Russia" />
              <Picker.Item label="Spain" value="Spain" />
              <Picker.Item label="Turkey" value="Turkey" />
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
                width
              }}
            >
              <TouchableOpacity
                style={{  }}
                onPress={() => {
                  navigation.navigate("RegisterForm");
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
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "white",
  },
  welcome: {
    fontSize: 17,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    fontSize: 10,
    textAlign: 'center',
    color: '#888',
    marginBottom: 0,
  },
  data: {
    maxWidth: 250,
    padding: 10,
    marginTop: 7,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777',
  },
});
