import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Text,
  LogBox,
  Image,
  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

export default function CustomSlider(props) {
  // ------------------ OPTIONS ------------------------ //
  // (Use props._VALUE_ in this section if needed)
  const name = "Price";
  const icon = "arrow-right";
  const minBoundary = 0;
  const maxBoundary = 100;
  const initVal = 0;
  const colorHighlight = "#FFF";

  const puzzles = [
    {
      pImage: require("../../../assets/images/captcha/p1.jpg"),
      ppImage: require("../../../assets/images/captcha/pp1.png"),
      cVal: 31,
    },
    {
      pImage: require("../../../assets/images/captcha/p2.png"),
      ppImage: require("../../../assets/images/captcha/pp2.png"),
      cVal: 31,
    },
    {
      pImage: require("../../../assets/images/captcha/p3.png"),
      ppImage: require("../../../assets/images/captcha/pp3.png"),
      cVal: 31,
    },
    {
      pImage: require("../../../assets/images/captcha/p4.png"),
      ppImage: require("../../../assets/images/captcha/pp4.png"),
      cVal: 31,
    },
    {
      pImage: require("../../../assets/images/captcha/p5.png"),
      ppImage: require("../../../assets/images/captcha/pp5.png"),
      cVal: 31,
    },
    {
      pImage: require("../../../assets/images/captcha/p6.png"),
      ppImage: require("../../../assets/images/captcha/pp6.png"),
      cVal: 67,
    },
  ];

  var rand = puzzles[(Math.random() * puzzles.length) | 0];

  // ----------------- Slider ----------------------- //
  const pan = React.useRef(new Animated.ValueXY()).current;
  const [forceRender, setForceRender] = React.useState(0);

  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
    console.log(rand);
  }, []);
  const animState = React.useRef({
    displayMinVal: 0,
    sliderWidth: 0,
    stepWidth: 0,
    minBoundary: 0,
    maxBoundary: 0,
    minBoundaryPosition: 0,
    maxBoundaryPosition: 0,
    offSet: 0,
    clampOffSet: 0,
    initOffSet: 0,
  }).current;

  const [sliderHeight, setSliderHeight] = React.useState(0);
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const [sliderCenter, setSliderCenter] = React.useState(0);
  const [initOffset, setInitOffset] = React.useState(0);
  const [minBoundaryPosition, setMinBoundaryPosition] = React.useState(0);
  const [maxBoundaryPosition, setMaxBoundaryPosition] = React.useState(0);
  const setSliderSize = (height, width) => {
    setSliderHeight(height);
    const sWidth = width - height; // - height : Avoid the slider to overlap the borders
    setSliderWidth(sWidth);
    animState.sliderHeight = height;
    animState.sliderWidth = sWidth;
    const stepWidth = sWidth / (maxBoundary - minBoundary);
    animState.stepWidth = stepWidth;
    animState.minBoundary = minBoundary;
    animState.maxBoundary = maxBoundary;

    const center = sWidth / 2;
    setSliderCenter(center);
    const initOff = (initVal - (maxBoundary - minBoundary) / 2) * stepWidth;
    setInitOffset(initOff);
    animState.initOffSet = initOff;
    animState.minBoundaryPosition = -sWidth / 2 - initOff;
    animState.maxBoundaryPosition = sWidth / 2 - initOff;
    setMinBoundaryPosition(-sWidth / 2 - initOff);
    setMaxBoundaryPosition(sWidth / 2 - initOff);

    placeSlider();
  };

  const placeSlider = () => {
    const newVal =
      pan.x._value +
      animState.offSet +
      animState.initOffSet -
      animState.clampOffSet;
    setForceRender(newVal); // Update the state so the render function is called (and elements are updated on screen)

    let filterVal = Math.trunc(
      (newVal + animState.sliderWidth / 2 + animState.stepWidth / 2) /
        animState.stepWidth
    );
    filterVal = Math.min(maxBoundary, filterVal);
    filterVal = Math.max(minBoundary, filterVal);
    animState.displayMinVal = filterVal;
  };

  const getPanResponder = () => {
    return PanResponder.create({
      onMoveShouldSetResponderCapture: () => true, //Tell iOS that we are allowing the movement
      onMoveShouldSetPanResponderCapture: () => true, // Same here, tell iOS that we allow dragging
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        const clamp = Math.max(
          animState.minBoundaryPosition,
          Math.min(animState.maxBoundaryPosition, pan.x._value)
        );
        animState.clampOffSet = animState.clampOffSet + pan.x._value - clamp;
        pan.setOffset({ x: clamp, y: 0 });
      },
      onPanResponderMove: (e, gesture) => {
        placeSlider();
        Animated.event([null, { dx: pan.x, dy: pan.y }], {})(e, {
          dx: gesture.dx,
          dy: 0,
        });
      },
      onPanResponderRelease: (e, gesture) => {
        animState.offSet = animState.offSet + pan.x._value;
        pan.flattenOffset();
      },
    });
  };
  const [panResponder, setPanResponder] = React.useState(getPanResponder());

  // ----------------- Render ----------------------- //
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={s.labelValueText}>{animState.displayMinVal}</Text>
      <View>
        <Image
          source={require("../../../assets/images/captcha/p6.png")}
          resizeMode="contain"
          style={{ height: 158, }}
        />
        <Animated.View
          style={{
            position: "absolute",
            left: sliderCenter + initOffset,
            transform: [
              {
                translateX: pan.x.interpolate({
                  inputRange: [
                    Math.min(minBoundaryPosition, maxBoundaryPosition),
                    Math.max(minBoundaryPosition, maxBoundaryPosition),
                  ],
                  outputRange: [
                    Math.min(minBoundaryPosition, maxBoundaryPosition),
                    Math.max(minBoundaryPosition, maxBoundaryPosition),
                  ],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <Image
            source={require("../../../assets/images/captcha/pp6.png")}
            resizeMode="contain"
            width={width}
          />
        </Animated.View>
      </View>
      <View style={s.mainContainer}>
        <View style={s.container}>
          {/* <View style={s.labelValue}>
            <Text style={s.labelValueText}>{animState.displayMinVal}</Text>
          </View> */}
          <View
            style={s.sliderContainer}
            onLayout={(event) =>
              setSliderSize(
                event.nativeEvent.layout.height,
                event.nativeEvent.layout.width
              )
            }
          >
            <View style={s.lineContainer}>
              <Animated.View
                style={[
                  s.line,
                  [
                    {
                      translateX: pan.x.interpolate({
                        inputRange: [
                          Math.min(minBoundaryPosition, maxBoundaryPosition),
                          Math.max(minBoundaryPosition, maxBoundaryPosition),
                        ],
                        outputRange: [
                          Math.min(
                            minBoundaryPosition + initOffset - sliderWidth / 2,
                            maxBoundaryPosition + initOffset - sliderWidth / 2
                          ),
                          Math.max(
                            minBoundaryPosition + initOffset - sliderWidth / 2,
                            maxBoundaryPosition + initOffset - sliderWidth / 2
                          ),
                        ],
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                ]}
              >
                <LinearGradient
                  // Button Linear Gradient
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    width: "100%",
                    height: "100%",
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                  colors={["#e234e3", "#3e3477"]}
                ></LinearGradient>
              </Animated.View>
              <Text
                style={{ position: "absolute", right: 10, color: "#707070" }}
              >
                Drag the left slide to verify
              </Text>
              <Animated.View
                style={[
                  s.draggable,
                  {
                    transform: [
                      {
                        translateX: pan.x.interpolate({
                          inputRange: [
                            Math.min(minBoundaryPosition, maxBoundaryPosition),
                            Math.max(minBoundaryPosition, maxBoundaryPosition),
                          ],
                          outputRange: [
                            Math.min(minBoundaryPosition, maxBoundaryPosition),
                            Math.max(minBoundaryPosition, maxBoundaryPosition),
                          ],
                          extrapolate: "clamp",
                        }),
                      },
                    ],
                  },
                  { left: sliderCenter + initOffset },
                ]}
                {...panResponder.panHandlers}
              >
                {/* <View style={s.circle}> */}
                <View style={s.icon}>
                  <MaterialCommunityIcons
                    name={icon}
                    size={25}
                    color={colorHighlight}
                  />
                </View>
                {/* <View style={s.labelContainer}>
                <Text style={s.label}>{name}</Text>
              </View> */}
                {/* </View> */}
              </Animated.View>
            </View>

            <View style={[s.boundary, { left: 0 }]} />
          </View>
          {/* <View style={s.labelValue}>
            <Text style={s.labelValueText}>{animState.displayMinVal}</Text>
          </View> */}
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    aspectRatio: 4,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
  },

  labelValue: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
  },
  labelValueText: {
    fontSize: 11,
  },

  sliderContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#FFF",
  },
  lineContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: 50,
    width: "90%",
    flexDirection: "row",
    borderRadius: 60,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#D1D1D1",
  },
  line: {
    height: "100%",
    width: "100%",
    zIndex: 9999,
  },
  draggable: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: 51,
    aspectRatio: 1,
    position: "absolute",
    top: 0,
    borderRadius: 0,
    overflow: "visible",
    zIndex: 99999,
  },
  circle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.24,
    shadowRadius: 2.8,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    aspectRatio: 1,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f1f1f1",
    overflow: "visible",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    aspectRatio: 3,
    position: "absolute",
    bottom: 0,
  },
  label: {
    fontSize: 9,
  },
});
