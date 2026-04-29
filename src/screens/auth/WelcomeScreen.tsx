import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-black">
      <Image
        source={require('../../assets/onboarding/welcome.png')}
        className="absolute inset-0 h-full w-full"
        resizeMode="cover"
      />

      <View className="absolute inset-x-0 bottom-0 rounded-t-[34px] bg-white px-6 pb-8 pt-6">
        <View className="mb-5 items-center">
          <Image source={require('../../assets/logo/logo.png')} className="h-8 w-24" resizeMode="contain" />
        </View>

        <Text className="text-[32px] font-black leading-[38px] text-slate-950">
          Global Ordering Without{'\n'}Any Limits.
        </Text>

        <Text className="mt-3 max-w-[300px] text-[13px] leading-5 text-slate-500">
          Send anything to friends and family with secure international payments and a smooth delivery experience.
        </Text>

        <Pressable
          className="mt-8 h-12 flex-row items-center rounded-full bg-[#b78a00] px-3"
          onPress={() => navigation.replace('Login')}>
          <View className="h-7 w-7 items-center justify-center rounded-full bg-white/15">
            <Text className="text-sm font-black text-white">›</Text>
          </View>
          <Text className="flex-1 text-center text-sm font-bold text-white">Let's Get Started</Text>
          <Text className="w-7 text-right text-sm font-black text-white">››</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;
