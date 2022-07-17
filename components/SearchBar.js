import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from 'react-native'

export default function SearchBar() {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }} >
            <GooglePlacesAutocomplete
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: '800',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <TouchableOpacity>
                        <View style={{ backgroundColor: "white", flexDirection: 'row', padding: 10, borderRadius: 20, marginRight: 10, alignItems: 'center' }}>
                            <AntDesign name="clockcircle" size={11} style={{ marginRight: 5 }} />
                            <Text style={{ color: 'black', fontWeight: '600' }} >Search</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}