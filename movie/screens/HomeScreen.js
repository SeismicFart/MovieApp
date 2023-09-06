import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ios = Platform.OS == "ios";
export default function HomeScreen() {
    return (
        <View className="flex-1 bg-neutral-800">
            {/*search bar and logo*/}
            <SafeAreaView className={ios? "-mb-2": 'mb-3'}>
                <StatusBar style="light"/>
            </SafeAreaView>
        </View>
    )
}