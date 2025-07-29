import React from "react";
import { Text, View } from "react-native";

import "./global.css";

const Home: React.FC = () => {
    return (
        <>
            <View className="flex-1 items-center justify-center bg-red-50">
                <Text className="text-xl font-bold">Hello World.</Text>
            </View>
        </>
    );
};

export default Home;

// const styles = StyleSheet.create({});
