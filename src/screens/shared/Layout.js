import { Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from 'react-native-elements';
const { width, height } = Dimensions.get("window");

export default function Layout() {
  return (
    <LinearGradient
            // Button Linear Gradient
            style={{ width: width, height: height }}
            colors={['#e234e3', '#3e3477']}
            >
      <View>
        <Text>Header</Text>
      </View>
      <View>
          <Text>Body</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', position: 'absolute', bottom: 0, width: width }}>
          <TouchableOpacity>
            <Icon type='ant-design' name='clockcircle' />
            <Text>Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon type='material-community' name='chart-line-stacked' />
            <Text>Prices</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon type='material-community' name='wallet' size={50} color="#e234e3" />
            <Text>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon type='font-awesome' name='cog' />
            <Text>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon type='font-awesome' name='cog' />
            <Text>Settings</Text>
          </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({})