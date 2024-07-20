import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'
import { MEDITATION_DATA } from '@/constants/meditationData'
import MEDITATION_IMAGES from '@/constants/meditation-images'
 
const NatureMeditate = () => {
  return (
    <View className='flex-1 '>
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
<View className='mb-6'>

      <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome</Text>
      <Text className='text-indigo-100 mb-3  text-xl font-medium text-left'>Start your meditation practice today</Text>
</View>

<View>
      <FlatList 
      data={MEDITATION_DATA} className='mb-20'
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
            <Pressable onPress={()=> console.log("tapped")}
            className='h-48 mx-2 my-4 rounded-md overflow-hidden'>

                  <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode='cover'
                  className='flex-1 rounded-lg justify-center'
                  >
                                 <Text>{item.title}</Text>
                  </ImageBackground>
            </Pressable>
  )}
      
      />
</View>
      </AppGradient>
      <StatusBar style='light'/>
    </View>
  )
}

export default NatureMeditate