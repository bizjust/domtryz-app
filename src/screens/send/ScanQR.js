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
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

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
        <Text>ScanQR</Text>
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
        <View style={{ width: width, height: height, position:'relative', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 280, height: 280, borderRadius: 30, overflow: 'hidden' }}>
            <Camera
            onBarCodeScanned={(r)=> { navigation.navigate("SentBTC", { data:r }); console.log(r); }}
            barCodeScannerSettings={{
                barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
            style={StyleSheet.absoluteFillObject}
            />
        </View>
        <Ionicons
                  name="scan-outline"
                  size={width * 1.07}
                  color={"#CCC"}
                  style={{ position: 'absolute', left: 0, width: width }}
                />
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
    }
});
