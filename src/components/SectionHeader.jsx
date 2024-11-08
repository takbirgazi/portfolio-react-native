import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SectionHeader = ({ headerDesc, headerTitle }) => {
    return (
        <View style={styles.headerMainView}>
            <Text style={[styles.headerTitle, styles.textStyle]}>{headerTitle}</Text>
            <Text style={[styles.headerDesc, styles.textStyle]}>{headerDesc}</Text>
            <View style={styles.borderBottom} />
        </View>
    );
};

export default SectionHeader;

const styles = StyleSheet.create({
    headerMainView: {
        paddingVertical: 15,
    },
    textStyle: {
        textAlign: 'center',
        paddingVertical: 2,
    },
    headerDesc: {
        color: '#929292',
        fontSize: 14,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 600,
        color: 'white',
    },
    borderBottom: {
        borderBottomColor: '#00844e',
        width: 105,
        margin: 'auto',
        marginTop: 10,
        borderBottomWidth: 5,
    },
});
