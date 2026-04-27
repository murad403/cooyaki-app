import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

const ONBOARDING_SERVICE = 'hasSeenOnboarding';
type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({ navigation }: Props) => {
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const checkAppState = async () => {
            const seen = await Keychain.getGenericPassword({
                service: ONBOARDING_SERVICE,
            });
 
            timeoutId = setTimeout(() => {
                if (seen && seen.password === 'true') {
                    navigation.replace('Welcome');
                } else {
                    navigation.replace('Onboarding');
                }
            }, 2000);
        };

        checkAppState();

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [navigation]);

    return (
        <View className="flex-1 bg-pink-200 justify-center items-center">
            <Text className="text-5xl font-bold text-primary">My Beauty Pass</Text>
            <Text className="text-xl font-normal text-black">L'ÉCOSYSTÈME BEAUTÉ</Text>
        </View>
    );
};

export default SplashScreen;