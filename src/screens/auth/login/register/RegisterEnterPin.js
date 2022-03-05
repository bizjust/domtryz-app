import {
  Alert,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
const { width, height } = Dimensions.get("window");

const CELL_COUNT = 4;

export default function RegisterEnterPin({ navigation }) {
  const [enableMask, setEnableMask] = useState(true);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const toggleMask = () => setEnableMask((f) => !f);
  const renderCell = ({ index, symbol, isFocused }) => {
    let textChild = "_";

    if (symbol) {
      textChild = enableMask ? "•" : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {textChild}
      </Text>
    );
  };

  function checkf() {
    // Alert.alert("ok", "ok"+value);
    navigation.navigate("RegisterDomtryz");
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor={"#8C4BA8"}
      />
      <View>
        <TouchableOpacity>
          <Text style={{ color: "#FFF" }}>Log out</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Enter Your PIN</Text>
      <View style={styles.fieldRow}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={(v) => {
            setValue(v);
            console.log(value);
          }}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
        {/* <Text style={styles.toggle} onPress={toggleMask}>
          {enableMask ? '🙈' : '🐵'}
        </Text> */}
      </View>
      <Text>{value.length === 4 ? checkf() : ""}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    minHeight: 300,
    backgroundColor: "#8C4BA8",
    height: height,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 100,
  },
  fieldRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 50,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#FFFFFF00",
    color: "#BB85C9",
  },
  toggle: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 24,
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#FFFFFF00",
  },
});
