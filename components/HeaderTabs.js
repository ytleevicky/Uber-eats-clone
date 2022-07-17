import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
            <HeaderButton
                text="Delivery"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pick-up"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => (
    <View>
        <TouchableOpacity
            style={[styles.button, { backgroundColor: props.activeTab === props.text ? "black" : "white" }]}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={[styles.buttonText, { color: props.activeTab === props.text ? "white" : "black" }]}>{props.text}</Text>
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