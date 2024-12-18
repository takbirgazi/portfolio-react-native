import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Graduation from 'react-native-vector-icons/Entypo';

const Hero = () => {
    const image = { uri: 'https://portfolio-woad-nine-59.vercel.app/_next/static/media/heroBackground.b79711da.jpg' };

    return (
        <View>
            <ImageBackground source={image} resizeMode="cover" style={styles.backGroundImage} >
                <View style={styles.containerView}>
                    <Text style={styles.textColor}>Md. Takbir Gazi</Text>
                    <Text style={styles.degText}>
                        I a'm Web Developer
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Hero;

const styles = StyleSheet.create({
    backGroundImage: {
        height: 260,
        filter: 'grayscale(100%)',
    },
    containerView: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000050',
        gap: 5,
        padding: 5,

    },
    textColor: {
        color: '#ffff',
        textAlign: 'center',
        fontSize: 24,
    },
    degText: {
        color: '#ffff',
        textAlign: 'center',
    },
});
