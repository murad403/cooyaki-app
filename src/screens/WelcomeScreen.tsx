import React from 'react';
import {
    ImageBackground,
    Pressable,
    Text,
    View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen = ({ navigation }: Props) => {
    return (
        <ImageBackground
            source={{
                uri: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
            }}
            className="flex-1">
            <View className="flex-1 bg-black/40 justify-end">
                <View className="px-6 pb-12">
                    <Text className="text-white text-2xl font-black text-center mb-3">My Beauty Pass</Text>
                    <Text className="text-white text-2xl font-black text-center">Let's Join With Us</Text>
                    <Text className="text-white text-sm leading-5 text-center mt-2.5 mb-7">
                        Find and book beauty, salon, barber and spa services anytime.
                    </Text>

                    <Pressable className="h-14 bg-white rounded-2xl items-center justify-center mb-3">
                        <Text className="text-primary text-base font-black">Continue as Guest</Text>
                    </Pressable>

                    <Pressable className="h-14 bg-white rounded-2xl items-center justify-center mb-3">
                        <Text className="text-gray-500 text-base font-black">Join with Google</Text>
                    </Pressable>

                    <Pressable
                        className="h-14 bg-primary rounded-2xl items-center justify-center mb-4.5"
                        onPress={() => navigation.navigate('Login')}>
                        <Text className="text-white text-base font-black">Join with Email</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text className="text-white text-center text-sm">
                            Already have an account?{' '}
                            <Text className="text-amber-400 font-black">Sign In</Text>
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;
