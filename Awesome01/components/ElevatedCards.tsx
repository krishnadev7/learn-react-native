import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>To</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>More...</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {
        padding: 10,
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10
    },
    cardElevated: {
        backgroundColor: "#CAD5E2"
    }
})