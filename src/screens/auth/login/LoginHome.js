import { Dimensions, Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Divider, Text } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
const { width, height } = Dimensions.get("window");

export default function LoginHome({navigation}) {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center', paddingTop: 50, }}>
        <Image source={require('../../../../assets/images/favicon.png')} resizeMode="contain" style={{ width: 100, height: 100 }} />
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#8043ed', textShadowRadius: 2, }}>DOMTRYZ</Text>
        </View>
        <View>
        <TouchableOpacity style={{ marginBottom: 10, }} onPress={()=> {navigation.navigate("LoginEmail")}}>
            <LinearGradient
            // Button Linear Gradient
            style={{ paddingVertical: 12, paddingHorizontal: 10, width: width - 50, borderRadius: 7, }}
            colors={['#e234e3', '#3e3477']}
            >
            <Text style={{ color: '#FFF', textAlign: 'center' }}>Login With Email</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
            <Text style={{width: 30, textAlign: 'center', color: '#e234e3'}}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>


        <TouchableOpacity style={{ marginTop: 10, marginBottom: 40, }}>
            <LinearGradient
            // Button Linear Gradient
            style={{ paddingVertical: 12, paddingHorizontal: 10, width: width - 50, borderRadius: 7, }}
            colors={['#666666', '#000000']}
            >
            <Text style={{ color: '#FFF', textAlign: 'center' }}>Login With Mobile</Text>
        </LinearGradient>
      </TouchableOpacity>

        </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({})