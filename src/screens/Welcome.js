import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
  PixelRatio,
} from "react-native";
import React, { useState } from "react";
const { width, height } = Dimensions.get("window");
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from "react-native-elements";

export default function Welcome() {

    const [sliderState, setSliderState] = useState({ currentPage: 0 });


    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
          setSliderState({
            ...sliderState,
            currentPage: indexOfNextScreen,
          });
        }
      };
    
      const { currentPage: pageIndex } = sliderState;

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex:1, }}>
      <View style={styles.navBar}>
        <TouchableOpacity style={{ backgroundColor: '#FFF', width: 80, paddingVertical: 10, }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', }} >Skip</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView
        style={{ paddingTop: 50, backgroundColor: '#FFF', }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
      >
        <View style={{ width:width, height: height, alignItems: 'center' }}>
            <Image source={require('../../assets/images/wallet.png')} style={styles.imageStyle} resizeMode="contain" />
            <View style={styles.wrapper}>
              <Text style={styles.header}>All assets in one place</Text>
              <Text style={styles.paragraph}>View and share your assets seamlessly</Text>
            </View>
          </View>
          <View style={{ width:width, height: height, alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/digital-wallet.png')}
              style={styles.imageStyle}
              resizeMode="contain"
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Investment assets</Text>
              <Text style={styles.paragraph}>Invest your assets anonymously.</Text>
            </View>
          </View>
          <View style={{ width:width, height: height, alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/security.png')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Private and secure</Text>
              <Text style={styles.paragraph}>Private keys never leave your device</Text>
            </View>
          </View>
          
      </ScrollView>

      <View style={styles.paginationWrapper}>
          {Array.from(Array(3).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
      
      <View style={[styles.container, { height: 200 }]}>
      <TouchableOpacity>
            <LinearGradient
            // Button Linear Gradient
            style={{ paddingVertical: 12, paddingHorizontal: 10, width: width - 50, borderRadius: 7, }}
            colors={['#e234e3', '#3e3477']}
            >
            <Text style={{ color: '#FFF', textAlign: 'center' }}>Create a new wallet</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingVertical: 12, }}>
          <Text style={{ textAlign: 'center', color: '#e234e3', fontWeight: 'bold', }}>I already have a wallet</Text>
      </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#FFFFFF",
  },
  navBar: {
    width: "100%",
    height: 40,
    backgroundColor: "#FFF",
    alignContent: "center",
    justifyContent: "flex-end",
    flexDirection: 'row'
  },
  navBarTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  scrollViewContainerStyle: {
    alignItems: "center",
    height: 500,
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#e234e3',
    marginLeft: 10,
  },
});
