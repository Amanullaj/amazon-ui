import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Category from '../components/Category'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Deals from '../components/Deals'
import Brands from '../components/Brands'

const HomeScreen = () => {
    
  return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
      <Header/>
      <SubHeader/>
      <Category/>
      <Carousel/>
      <Services/>
      <Deals/>
      <Brands/>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
