' import {StyleSheet, Text, View} from 'react-native';
' import CountryPicker from 'rn-country-picker';
' export default class App extends Component {
'   constructor(props) {
'     super(props);
'     this.state = {
'       mCountryCode: '91',
'     };
'   }

'   _selectedValue = (index) => {
'     this.setState({mCountryCode: index});
'   };

'   render() {
'     return (
'       <View style={styles.container}>
'         <Text style={styles.titleText}>React Native Country Picker</Text>

'         <CountryPicker
'           disable={false}
'           animationType={'slide'}
'           containerStyle={styles.pickerStyle}
'           pickerTitleStyle={styles.pickerTitleStyle}
'           dropDownImage={require('./res/ic_drop_down.png')}
'           selectedCountryTextStyle={styles.selectedCountryTextStyle}
'           countryNameTextStyle={styles.countryNameTextStyle}
'           pickerTitle={'Country Picker'}
'           searchBarPlaceHolder={'Search......'}
'           hideCountryFlag={false}
'           hideCountryCode={false}
'           searchBarStyle={styles.searchBarStyle}
'           backButtonImage={require('./res/ic_back_black.png')}
'           searchButtonImage={require('./res/ic_search.png')}
'           countryCode={this.state.mCountryCode}
'           selectedValue={this._selectedValue}
'         />
'       </View>
'     );
'   }
' }

' const styles = StyleSheet.create({
'   container: {
'     flex: 1,
'     justifyContent: 'center',
'     alignItems: 'center',
'     backgroundColor: '#F5FCFF',
'   },
'   titleText: {
'     color: '#000',
'     fontSize: 25,
'     marginBottom: 25,
'     fontWeight: 'bold',
'   },
'   pickerTitleStyle: {
'     justifyContent: 'center',
'     flexDirection: 'row',
'     alignSelf: 'center',
'     fontWeight: 'bold',
'     flex: 1,
'     marginLeft: 10,
'     fontSize: 16,
'     color: '#000',
'   },
'   pickerStyle: {
'     height: 60,
'     width: 250,
'     marginBottom: 10,
'     justifyContent: 'center',
'     padding: 10,
'     borderWidth: 2,
'     borderColor: '#303030',
'     backgroundColor: 'white',
'   },
'   selectedCountryTextStyle: {
'     paddingLeft: 5,
'     paddingRight: 5,
'     color: '#000',
'     textAlign: 'right',
'   },

'   countryNameTextStyle: {
'     paddingLeft: 10,
'     color: '#000',
'     textAlign: 'right',
'   },

'   searchBarStyle: {
'     flex: 1,
'     justifyContent: 'center',
'     flexDirection: 'row',
'     marginLeft: 8,
'     marginRight: 10,
'   },
' });
' .....................
'       <PhoneInput 
'            renderFlag={({ imageSource }) => {
'         return (
'             <View>
'                 <Icon name="chevron" />
'                 <Image source={imageSource} width={customWidth} height={customHeight} style={customStyles} />
'             </View>
'         )
'     }}
' />
' -----------------------------
'     <View style={styles.container}>
'         <View style={{ alignItems: 'center', paddingTop: 50, }}>
'         <Image source={require('../../../../../assets/images/images.png')} resizeMode="contain" style={{ width: 250, height: 200, marginTop:100 }} />
'         <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000',textAlign:'center',paddingLeft:40,paddingRight:40, paddingBottom:20, lineHeight:40,marginTop:10 }}>Before we start, we'll have to know your current location of residence.</Text>
        
'         <LinearGradient
'             // Button Linear Gradient
'             style={{ paddingVertical: 12, paddingHorizontal: 10, width: width - 50, borderRadius: 7, }}
'             colors={['#666666', '#000000']}
'             >
'             <Text style={{ color: '#FFF', textAlign: 'center' }}>Login With Mobile</Text>
'         </LinearGradient>
'         </View>
'       <StatusBar style="auto" />
'     </View>
'   )
' }
' ...................
'    {/* <View>
'         <FontAwesome icon={SolidIcons.smile} />
'         <FontAwesome icon={RegularIcons.smileWink} />
'         <FontAwesome icon={BrandIcons.github} />
'          </View> */}
'         {/* <PhoneInput ref='phone'/> */}// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
' // import PhoneInput from 'react-native-phone-input'
' ----------------------
'   {/* <Icon name="right" size={30} color="blue" ></Icon> *// import Icon from 'react-native-vector-icons/AntDesign';
' <Icon name="rocket" size={30} color="#900" />---------------https://oblador.github.io/react-native-vector-icons/#f8f8ff\
' import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
' import React from "react";
' import { Text } from "react-native-elements";
' import { Button } from "react-native-elements/dist/buttons/Button";
' import Icon from 'react-native-vector-icons/AntDesign';

' export default function RegisterDomtryz({ navigation }) {
'     return (
'         <View style={{ flex: 1, backgroundColor: 'white' }}>
     
'             <Image source={require('../../../../../assets/images/Android.png')} resizeMode="contain" style={{ width: 100, height: 100, }} />
           
'             <View>
'                 <Text style={{ fontSize: 40, fontWeight: 'bold', paddingLeft: 60, marginTop: 180, paddingBottom: 0 }}>Welcome to Domtryz</Text>
'                 <Text style={{ fontSize: 20, paddingLeft: 75, paddingBottom: 60, }}>
'                     Join the world's largest crypto Wallet
'                 </Text>
'                 <View style={{ borderColor: 'white', borderWidth: 2, backgroundColor: '#f5f5f5', paddingBottom: 20, marginLeft: 20, marginRight: 20 }}>
'                     <View>
'                         <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 45, marginTop: 40, }}>
'                             <View>
'                                 <TouchableOpacity >
'                                     <Icon name="checkcircle" size={20} color="#e234e3" ></Icon>
'                                 </TouchableOpacity>
'                             </View>
'                             Create your account
'                         </Text>
'                     </View>
'                     <View>
'                         <TouchableOpacity>
'                             <Text style={{ color: "#e234e3", fontSize: 15, paddingLeft: 75, }}>
'                                 +18903***555
'                             </Text>
'                         </TouchableOpacity>
'                     </View>
'                     <View>
'                         <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 45, }}>
'                             <View>
'                                 <TouchableOpacity >
'                                     <Icon name="checkcircle" size={20} color="#e234e3" ></Icon>
'                                 </TouchableOpacity>
'                             </View>
'                             Verify your identity (2mints)
'                         </Text>
'                     </View>
'                     <View>
'                         <TouchableOpacity>
'                             <Text style={{ color: "#e234e3", fontSize: 20, paddingLeft: 60, marginTop: 20, paddingBottom: 0, }}>
'                                 <View>
'                                     <TouchableOpacity >
'                                         <Icon name="check" size={20} color="#1e90ff" ></Icon>
'                                     </TouchableOpacity>
'                                 </View>
'                                 Buy crypto with credit or debit card
'                             </Text>
'                         </TouchableOpacity>
'                     </View>
'                     <View>
'                         <TouchableOpacity>
'                             <Text style={{ color: "#e234e3", fontSize: 20, paddingLeft: 60, marginTop: 10, paddingBottom: 0, }}>
'                                 <View>
'                                     <TouchableOpacity >
'                                         <Icon name="check" size={20} color="#1e90ff" ></Icon>
'                                     </TouchableOpacity>
'                                 </View>
'                                 Deposit and withdraw
'                             </Text>
'                         </TouchableOpacity>
'                     </View>
'                 </View>
'                 <View>
'                     <TouchableOpacity style={{ backgroundColor: '#e234e3', borderRadius: 10, paddingVertical: 10, marginTop: 100, width: 350, marginLeft: 35 }} onPress={() => { navigation.navigate("RegisterPin"); }}>
'                         <Button title='Verify Now' ></Button>
'                     </TouchableOpacity>
'                 </View>
'                 <View>
'                     <TouchableOpacity>
'                         <Text style={{ color: "#e234e3", fontSize: 30, paddingLeft: 180, marginTop: 10, }}>
'                             Skip
'                         </Text>
'                     </TouchableOpacity>
'                 </View>
'             </View>
'             <StatusBar style="auto" />
'         </View>
'     );
' }

' const styles = StyleSheet.create({

' });
'  <SelectDropdown style={{ width: 19 }}
'           data={countries}

'           onSelect={(selectedItem, index) => {
'             console.log(selectedItem, index)
'           }}
'           buttonTextAfterSelection={(selectedItem, index) => {
'             return selectedItem
'           }}
'           rowTextForSelection={(item, index) => {
'             return item
'           }}

'         />
' import SelectDropdown from 'react-native-select-dropdown'
' const countries = ["Egypt", "Canada", "Australia", "Ireland"]

' --------------------------------------------------------------------
'   // import React, {Component} from "react";
'   // import { View, Text, Picker,StyleSheet } from "react-native";
'   //  class MyPicker extends Component{
'   //    state ={user:''}
'   //    updateUser =(user) => {
'   //      this.setState({user: user})
'   //    }
'   //    render(){
'   //      return(
'   //        <View>
'   //          <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={{borderColor:'red',width:,}} >
'   //         <Picker.Item label="Ali" value="Hussian"/>
'   //         <Picker.Item label="test1" value="Picker1"/>
'   //         <Picker.Item label="test2" value="Picker2"/>
'   //         <Picker.Item label="test3" value="Picker3"/>
'   //         <Picker.Item label="test4" value="Picker4"/>
'   //          </Picker>
'   //          <Text style={{fontSize: 50,alignSelf:'center',color:'red',}}>{this.state.user}</Text>
'   //        </View>
'   //      )
'   //    }
'   //  }
'   //  export default MyPicker
' import React, { Component } from 'react';
 
' import { View,Picker } from 'react-native';
 
'  class App extends Component {
 
'   constructor(){
 
'     super();
 
'     this.state={}
'   }

'  render() {
'    return (
'      <View style={{width:202,backgroundColor:'gray'}} >
'       <Picker>
'         <Picker.Item label="React Native" value="React Native" />
'         <Picker.Item label="Java" value="Java" />
'         <Picker.Item label="Html" value="Html" />
'         <Picker.Item label="Php" value="Php" />
'         <Picker.Item label="C++" value="C++" />
'         <Picker.Item label="C+" value="C+" />
'         <Picker.Item label="JavaScript" value="JavaScript" />
 
'       </Picker>
'      </View>
'    );
'  }
' }
' export default App
' import { Dimensions, Image, StatusBar, StyleSheet, TouchableOpacity, View, } from 'react-native'
' import React from 'react'
' import { Text } from 'react-native-elements'
' import { LinearGradient } from 'expo-linear-gradient'
' import Icon from 'react-native-vector-icons/AntDesign';
' import { Picker } from 'react-native';
' const { width, height } = Dimensions.get("window");
' export default function RegisterHome({ navigation }) {

'   return (
'     <View style={styles.container}>
'       <View>
'         <TouchableOpacity style={{ paddingVertical: 12, marginTop: 40, marginRight: 350 }} onPress={() => { navigation.navigate("Welcome"); }}>
'           <Icon name="close" size={30} color="black" ></Icon>
'         </TouchableOpacity>
'       </View>
'       <Image source={require('../../../../../assets/images/image7.png')} resizeMode="contain" style={{ width: 300, height: 200, }}/>
'       <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000', textAlign: 'center', paddingLeft: 40, paddingRight: 40, paddingBottom: 2, lineHeight: 40, }}>Before we start, we'll have to know your current location of residence.</Text>

'       <View style={{ backgroundColor: '#dcdcdc', width: 300, marginTop: 40,}}>
'         <Picker>
'           <Picker.Item label="Albania" value="Albania"/>
'           <Picker.Item label="Andorra" value="Andorra" />
'           <Picker.Item label="Armenia" value="Armenia" />
'           <Picker.Item label="Australia" value="Australia" />
'           <Picker.Item label="Belarus" value="Belarus" />
'           <Picker.Item label="Belgium" value="Belgium" />
'           <Picker.Item label="China" value="China" />
'           <Picker.Item label="Croatia" value="Croatia" />
'           <Picker.Item label="France" value="France" />
'           <Picker.Item label="Georgia" value="Georgia" />
'           <Picker.Item label="Germany" value="Germany" />
'           <Picker.Item label="Greece" value="Greece" />
'           <Picker.Item label="Ireland" value="Ireland" />
'           <Picker.Item label="Italy" value="Italy" />
'           <Picker.Item label="Kosovo" value="Kosovo" />
'           <Picker.Item label="Latvia" value="Latvia" />
'           <Picker.Item label="Norway" value="Norway" />
'           <Picker.Item label="Pakistan" value="Pakistan" />
'           <Picker.Item label="Portugal" value="Portugal" />
'           <Picker.Item label="Romania" value="Romania" />
'           <Picker.Item label="Russia" value="Russia" />
'           <Picker.Item label="Spain" value="Spain" />
'           <Picker.Item label="Turkey" value="Turkey" />
'         </Picker>
'       </View>
'       <View style={{ alignItems: 'center', paddingTop: 50, }}>
'         <Text style={{ fontSize: 15, color: '#000', textAlign: 'center', paddingLeft: 40, paddingRight: 40, paddingBottom: 2, lineHeight: 20, bottom: 40, }}>The registration process is subject to change based on the information you provide.</Text>
'         <View style={{ alignItems: "flex-end", marginLeft: 300, marginTop: 100, }}>
'           <TouchableOpacity
'             style={{ marginBottom: 200 }}
'             onPress={() => {
'               navigation.navigate("RegisterForm");
'             }}
'           >
'             <LinearGradient
'               // Button Linear Gradient
'               style={{
'                 paddingVertical: 8,
'                 paddingHorizontal: 15,
'                 borderRadius: 7,
'                 marginTop: -10,
'               }}
'               colors={["#e234e3", "#e234e3"]}
'             >
'               <Icon type="fontisto" name="arrowright" size={30} color={'#FFF'} />
'             </LinearGradient>
'           </TouchableOpacity>
'         </View>
'       </View>
'       <StatusBar style="auto" />
'     </View>
'   )
' }

' const styles = StyleSheet.create({
'   container: {
'     justifyContent: "center",
'     alignItems: "center",
'     alignContent: "center",
'     backgroundColor: 'white'
'   }
' });
