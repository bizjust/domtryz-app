import { Dimensions, Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider, Text } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import { getLoggedInUser } from '../../../../http';
const { width, height } = Dimensions.get("window");

export default function LoginHome({navigation}) {

  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const {data} = await getLoggedInUser();
      if(data.success)
      {
        const user = data.user;
        // console.log("user", uData.data.user);
        if(user.country_id > 0)
        {
          // console.log(user.verified);
          if(user.verified ==="Yes")
          {
            if(user.phrase !== "" && user.phrase !== null)
            {
              navigation.navigate("HomeScreen");
            }
            else
            {
              navigation.navigate("RegisterVerifyRecoveryPhrase");
            }
          }
          else
          {
            navigation.navigate("RegisterCode");
          }
        }
        else
        {
          setLoading(false);
        }
      }
    } catch (error) {
      // console.log("error", error);
    }
  }, []);


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


        <TouchableOpacity style={{ marginTop: 10, marginBottom: 40, }} onPress={()=> {navigation.navigate("LoginPhone")}}>
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