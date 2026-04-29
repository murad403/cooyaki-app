import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const slides = [
  {
    image: require('../../assets/onboarding/onboarding1.jpg'),
    title: 'Order Food Anytime',
    description:
      'Discover your favorite meals, explore nearby offers, and enjoy food from your city whenever you want.',
  },
  {
    image: require('../../assets/onboarding/onboarding2.png'),
    title: 'Ride with Safety First',
    description:
      'Book rides instantly with verified drivers and real-time tracking for your security.',
  },
  {
    image: require('../../assets/onboarding/onboarding3.png'),
    title: 'Shop Without Limits',
    description:
      'From daily essentials to curated shopping, explore a powerful marketplace for every need.',
  },
];

const OnboardingScreen = ({ navigation }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = slides[activeSlide];
  const isLastSlide = activeSlide === slides.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      navigation.replace('Welcome');
      return;
    }

    setActiveSlide(currentSlide => currentSlide + 1);
  };

  return (
    <View className="flex-1 bg-[#efece7]">
      <Image source={slide.image} className="absolute inset-0 h-full w-full" resizeMode="cover" />

      <View className="absolute inset-x-0 bottom-0 h-[44%] rounded-t-[34px] bg-white px-6 pb-8 pt-7">
        <View className="flex-1 items-center justify-end">
          <Text className="mb-3 text-center text-[28px] font-black leading-[34px] text-slate-950">
            {slide.title}
          </Text>
          <Text className="mb-8 max-w-[300px] text-center text-[13px] leading-5 text-slate-500">
            {slide.description}
          </Text>
        </View>

        <Pressable
          className="h-12 items-center justify-center rounded-xl bg-[#b78a00]"
          onPress={handleNext}>
          <Text className="text-base font-bold text-white">Next</Text>
        </Pressable>

        <Pressable
          className="mt-3 items-center justify-center py-2"
          onPress={() => navigation.replace('Welcome')}>
          <Text className="text-sm font-semibold text-slate-500">Skip</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OnboardingScreen;
