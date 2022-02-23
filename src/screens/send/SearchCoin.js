import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, Icon, ListItem } from "react-native-elements";
const { width, height } = Dimensions.get("window");

export default function SearchCoin({ navigation, params }) {
  const list = [
    {
      name: "Bitcoin",
      avatar: require("../../../assets/images/crypto/png-128/bitcoin.png"),
      subtitle: "OBTC",
    },
    {
      name: "Etherium",
      avatar: require("../../../assets/images/crypto/png-128/etherium.png"),
      subtitle: "OETH",
    },
    {
      name: "Litecoin",
      avatar: require("../../../assets/images/crypto/png-128/litecoin.png"),
      subtitle: "OLTC",
    },
    {
      name: "Bitcoin Cash",
      avatar: require("../../../assets/images/crypto/png-128/bitcoin.png"),
      subtitle: "OBCH",
    },
    {
      name: "XRP",
      avatar: require("../../../assets/images/crypto/png-128/bitcoin.png"),
      subtitle: "OXRP",
    },
    {
      name: "Zcash",
      avatar: require("../../../assets/images/crypto/png-128/zcash.png"),
      subtitle: "OZEC",
    },
    {
      name: "Tron",
      avatar: require("../../../assets/images/crypto/png-128/bitcoin.png"),
      subtitle: "OTRX",
    },
    {
      name: "VeChain",
      avatar: require("../../../assets/images/crypto/png-128/bitcoin.png"),
      subtitle: "OVET",
    },
    {
      name: "Tezos",
      avatar: require("../../../assets/images/crypto/png-128/bitcoin.png"),
      subtitle: "OXTZ",
    },
    {
      name: "Cosmos",
      avatar: require("../../../assets/images/crypto/png-128/bitcoin.png"),
      subtitle: "OATOM",
    },
  ];

  return (
    <View>
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
            <Icon type="font-awesome" name="long-arrow-left" color={"#FFF"} />
          </TouchableOpacity>
          <View>
            <Text style={{ color: "#FFF" }}>Search Coin</Text>
          </View>
          <View></View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View>
          {list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={l.avatar} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Title>{l.subtitle}</ListItem.Title>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});