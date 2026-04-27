import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, Pressable, Text, View} from 'react-native';
import * as Keychain from 'react-native-keychain';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

const { width } = Dimensions.get('window');

const ONBOARDING_SERVICE = 'hasSeenOnboarding';
type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;
type Slide = {
    title: string;
    description: string;
    image: string;
};

const slides: Slide[] = [
    {
        title: 'Discover Beauty Services',
        description: 'Find salon, spa, barber and beauty experts near you.',
        image: 'https://cdn-icons-png.flaticon.com/512/2922/2922561.png',
    },
    {
        title: 'Book Appointment Easily',
        description: 'Choose your favorite professional and book anytime.',
        image: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    },
    {
        title: 'Enjoy Premium Experience',
        description: 'Get smooth beauty service experience with My Beauty Pass.',
        image: 'https://cdn-icons-png.flaticon.com/512/942/942748.png',
    },
];

const OnboardingScreen = ({ navigation }: Props) => {
    const flatListRef = useRef<FlatList<Slide>>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const finishOnboarding = async () => {
        await Keychain.setGenericPassword('onboarding', 'true', {
            service: ONBOARDING_SERVICE,
        });

        navigation.replace('Welcome');
    };

    const handleNext = () => {
        if (activeIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: activeIndex + 1,
                animated: true,
            });
        } else {
            finishOnboarding();
        }
    };

    const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
    };

    const renderItem = ({ item }: { item: Slide }) => {
        return (
            <View style={{ width }} className="flex-1 items-center justify-center px-7">
                <Image source={{ uri: item.image }} className="w-60 h-60" />

                <Text className="text-3xl font-black text-slate-900 text-center">{item.title}</Text>
                <Text className="text-base text-gray-500 text-center leading-6 mt-3">{item.description}</Text>
            </View>
        );
    };

    return (
        <View className="flex-1 bg-white">
            <Pressable onPress={finishOnboarding} className="absolute top-6 right-6 z-10 p-2">
                <Text className="text-base font-bold text-primary">Skip</Text>
            </Pressable>

            <FlatList
                ref={flatListRef}
                data={slides}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleScrollEnd}
            />

            <View className="flex-row justify-center items-center mb-3.5">
                {slides.map((slide, index) => (
                    <View
                        key={slide.title}
                        className={index === activeIndex ? 'w-7 h-2.5 rounded-full bg-primary mx-1' : 'w-2.5 h-2.5 rounded-full bg-gray-300 mx-1'}
                    />
                ))}
            </View>

            <Pressable className="h-14 mx-6 mb-8 rounded-3xl bg-primary items-center justify-center" onPress={handleNext}>
                <Text className="text-white text-lg font-black">
                    {activeIndex === slides.length - 1 ? 'Get Started' : 'Next'}
                </Text>
            </Pressable>
        </View>
    );
};

export default OnboardingScreen;