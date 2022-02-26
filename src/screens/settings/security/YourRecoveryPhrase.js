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
    Chip,
    Icon,
    Input,
    LinearProgress,
    ListItem,
    Overlay,
    Text,
  } from "react-native-elements";
  const { width, height } = Dimensions.get("window");

export default function YourRecoveryPhrase({ route, navigation }) {

    const { phrase } = route.params?route.params:{phrase:[]};

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
        <View
          style={{
            alignItems: "center",
            padding: 10,
            justifyContent: "space-between",
            height: height - 40,
          }}
        >
          <View>
            <Text h4 style={{ textAlign: "center" }}>
              Verify Recovery Phrase
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                paddingHorizontal: 46,
                color: "#666",
              }}
            >
              Tap the words to put them next to each other in the correct order.
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
                marginTop: 10,
                padding: 10,
                borderRadius: 20,
                marginBottom: 10,
              }}
            >
              {phrase.map((v, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.chip}
                  onPress={() => {
                  }}
                >
                  <Text>
                    {i + 1} {v}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>


            <View style={{ alignItems: 'center', }}>
                <TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', color: '#e234e3' }}>Copy</Text>
                </TouchableOpacity>
            </View>


            <View style={{ alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10, backgroundColor: '#FD71AF33', borderRadius: 20, marginVertical: 30, }}>
                <Badge value={<Text style={{ fontSize: 26, color: '#FFF' }}>!</Text>} status="error" badgeStyle={{ backgroundColor: '#FD71AF', width: 40, height: 40, borderRadius: 50, }} />
                <Text style={{ textAlign: 'center', color:'#E671E1', marginVertical: 10, fontSize:16, }}>Never share recovery phrase with anyone, store it securely!</Text>
            </View>

            
          </View>

          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity onPress={()=>{ navigation.navigate("EnterPin"); }} >
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
                  Continue
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>



        

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    chip: {
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 20,
        paddingVertical: 5,
        minWidth: 70,
        paddingHorizontal: 10,
        alignItems: "center",
        margin: 4,
      },
})