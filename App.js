import React from 'react';
import {Text, View} from "react-native";

import {Main} from './src/styles/index';
import Stopwatch from './src/components/Stopwatch';

export default function App() {
    return (
        <View style={Main.container}>
            <Text style={Main.titulo}>Cronometro</Text>
            <Stopwatch />
        </View>
    );
}
