import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
    return (
        <View className="flex-1 justify-center items-center bg-white px-6">
            <Text className="text-2xl font-black text-slate-900 mb-2.5">Sign In</Text>
            <Text className="text-sm text-gray-500 text-center mb-6">Login form will be added here.</Text>

            <Pressable className="h-12 min-w-max rounded-xl bg-primary items-center justify-center px-4" onPress={() => navigation.goBack()}>
                <Text className="text-white text-base font-bold">Back</Text>
            </Pressable>
        </View>
    );
};

export default LoginScreen;
