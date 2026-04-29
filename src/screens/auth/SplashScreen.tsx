/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

const SplashScreen = ({ navigation }: { navigation: any }) => {
    const scale = useRef(new Animated.Value(0.5)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(scale, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setTimeout(() => {
                navigation.replace('Onboarding');
            }, 1000);
        });
    }, [navigation, scale, opacity]);

    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Animated.Image
                source={require('../../assets/logo/logo.png')}
                style={{
                    width: 160,
                    height: 160,
                    transform: [{ scale }],
                    opacity,
                }}
                resizeMode="contain"
            />
        </View>
    );
};

export default SplashScreen;