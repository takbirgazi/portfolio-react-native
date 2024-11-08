import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SectionHeader from './SectionHeader';

const About = () => {
    const image = { uri: 'https://portfolio-woad-nine-59.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaboutImage.0e471b23.jpg&w=1200&q=75' };

    return (
        <View>
            <SectionHeader headerDesc="Get to know me" headerTitle="About Me" />
            <View style={styles.paddingTopBottom}>
                <Text style={styles.whoText}>Who am I ? 🤔</Text>
                <Text style={styles.taglineText}>I’m Md. Takbir Gazi, a Full Stack Web Developer.</Text>
                <Text style={styles.descText}>I am a passionate web developer with a strong foundation in front-end and full-stack development. Currently, I’m pursuing a BSS Honor’s degree in Economics at the National University of Bangladesh, but my love for technology has led me to a rewarding journey in web development.</Text>
                <Image style={styles.aboutImage} source={image} />
            </View>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    paddingTopBottom: {
        paddingVertical: 5,
        paddingHorizontal: 25,
    },
    whoText: {
        color: '#00844e',
        fontSize: 16,
    },
    taglineText: {
        color: 'white',
        paddingVertical: 5,
        fontWeight: 500,
        fontSize: 16,
    },
    descText: {
        color: '#929292',
    },
    aboutImage: {
        height: 300,
        marginVertical: 25,
        width: '100%',
        filter: 'grayscale(100%)',
        borderRadius: 5,
    },
});
