import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View style={styles.headingText}>
            <Text>Blog Card</Text>
            <View style={styles.card}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        what's the diffrence between react native and flutter?
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    headingContainer: {},
    headerText: {}
})