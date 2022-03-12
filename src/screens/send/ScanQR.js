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
import { Avatar, Icon, Input, ListItem, Text } from "react-native-elements";
const { width, height } = Dimensions.get("window");
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

export default function ScanQR({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    // return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    // return <Text>No access to camera</Text>;
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
              Scan a QR Code
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ScanQR");
              }}
            >
              <Icon type="font-awesome" name="image" color={"#FFF"} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        {/* <Text>ScanQR</Text> */}
        {/* <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ width: 400, height: 300, borderWidth: 5, }}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )} */}
        <View
          style={{
            width: width,
            height: height,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 280,
              height: 280,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                padding: 10,
                width: 270,
                height: 270,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <Camera
                onBarCodeScanned={(r) => {
                  navigation.navigate("SentBTC", { data: r });
                  console.log(r);
                }}
                barCodeScannerSettings={{
                  barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                }}
                style={StyleSheet.absoluteFillObject}
              />
            </View>
            <View
              style={{
                borderColor: "#CCC",
                borderWidth: 10,
                width: 100,
                height: 100,
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: 10,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            />
            <View
              style={{
                borderColor: "#CCC",
                borderWidth: 10,
                width: 100,
                height: 100,
                position: "absolute",
                top: 0,
                right: 0,
                borderRadius: 10,
                borderLeftWidth: 0,
                borderBottomWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
            <View
              style={{
                borderColor: "#CCC",
                borderWidth: 10,
                width: 100,
                height: 100,
                position: "absolute",
                bottom: 0,
                left: 0,
                borderRadius: 10,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
            <View
              style={{
                borderColor: "#CCC",
                borderWidth: 10,
                width: 100,
                height: 100,
                position: "absolute",
                bottom: 0,
                right: 0,
                borderRadius: 5,
                borderLeftWidth: 0,
                borderTopWidth: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            />
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Be sure to only scan a BTC QR Code
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //
  absoluteFillObject: {
    width: 300,
    height: 300,
  },
});
