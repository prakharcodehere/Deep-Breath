import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import beackImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';



const App = () => {

  const router = useRouter();


  return (
    <View className='flex-1'>
      <ImageBackground
        source={beackImage} resizeMode='cover' className='flex-1'
      >


<AppGradient  colors={['rgba(0,0,0, 0.4)', 'rgba(0,0,0,0.8)']}>
          <SafeAreaView className='flex-1 mx-5 my-12 justify-between'>
            <View>

              <Text className='text-center mt-10 text-white font-bold text-4xl'>Simple Meditation</Text>
              <Text className='text-center  text-white  text-2xl mt-3'>Simplying Meditation for Everyone</Text>
            </View>
            <View>
              <CustomButton onPress={() => router.push("/nature-meditate")}
                title='Get Started'
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>

      
        </AppGradient>
      </ImageBackground>

    </View>
  )
}

export default App