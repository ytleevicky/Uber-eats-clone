import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function HeaderTabs() {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
            <HeaderButton text="Delivery" btnColor="black" textColor="white" />
            <HeaderButton text="Pick-up" btnColor="white" textColor="black" />
        </View>
    )
}

const HeaderButton = (props) => (
    <View>
        <TouchableOpacity style={[styles.button, { backgroundColor: props.btnColor }]}>
            <Text style={[styles.buttonText, { color: props.textColor }]}>{props.text}</Text>
        </TouchableOpacity>
    </View>
);


const styles = StyleSheet.create({
    button: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "900"
    }
});