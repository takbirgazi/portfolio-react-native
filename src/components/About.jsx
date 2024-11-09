import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SectionHeader from './SectionHeader';
import EmailIcon from 'react-native-vector-icons/FontAwesome';
import CallIcon from 'react-native-vector-icons/Zocial';
import AddressIcon from 'react-native-vector-icons/Fontisto';
import SocialIcons from 'react-native-vector-icons/AntDesign';

const About = () => {
    const image = { uri: 'https://portfolio-woad-nine-59.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaboutImage.0e471b23.jpg&w=1200&q=75' };

    const handleContactInfoPress = (infoData) => {
        Linking.openURL(infoData);
    };

    const handleIconPress = (urlLink) => {
        Linking.openURL(urlLink);
    };

    return (
        <View>
            <SectionHeader headerDesc="Get to know me" headerTitle="About Me" />
            <View style={styles.paddingTopBottom}>
                <Text style={styles.whoText}>Who am I ? 🤔</Text>
                <Text style={styles.taglineText}>I’m Md. Takbir Gazi, a Full Stack Web Developer.</Text>
                <Text style={styles.descText}>I am a passionate web developer with a strong foundation in front-end and full-stack development. Currently, I’m pursuing a BSS Honor’s degree in Economics at the National University of Bangladesh, but my love for technology has led me to a rewarding journey in web development.</Text>
                <Image style={styles.aboutImage} source={image} />

                <View style={styles.infoView}>
                    <Text style={styles.contactInfo}><EmailIcon name="envelope" size={17} color="#ffff" /> Email : </Text>
                    <TouchableOpacity onPress={() => handleContactInfoPress('mailto:takbirgazibd@gmail.com')}>
                        <Text style={styles.infoColor}> takbirgazibd@gmail.com</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoView}>
                    <Text style={styles.contactInfo}><CallIcon name="call" size={17} color="#ffff" /> Phone : </Text>
                    <TouchableOpacity onPress={() => handleContactInfoPress('tel:+8801811947182')}>
                        <Text style={[styles.infoColor]}> +8801811947182</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.contactInfo}><AddressIcon name="map-marker-alt" size={17} color="#ffff" /> Address : </Text>
                    <TouchableOpacity>
                        <Text style={[styles.locationColor]}> Khulna, Bangladesh</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.socialIconsView}>
                    <TouchableOpacity onPress={() => handleIconPress('https://github.com/takbirgazi')}><SocialIcons name="github" size={30} color="#ffff" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleIconPress('https://www.linkedin.com/in/takbirgazi')}><SocialIcons name="linkedin-square" size={30} color="#ffff" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleIconPress('https://x.com/takbirgazibd')}><SocialIcons name="twitter" size={30} color="#ffff" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleIconPress('https://www.facebook.com/takbirgazibd')}><SocialIcons name="facebook-square" size={30} color="#ffff" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleIconPress('https://www.instagram.com/takbirgazibd')}><SocialIcons name="instagram" size={30} color="#ffff" /></TouchableOpacity>
                </View>
                <View style={styles.socialIconsView}>
                    <TouchableOpacity onPress={() => handleIconPress('https://drive.google.com/file/d/1S51nSx-wXBZWXybeMGwm3LDbhoaQkSJJ/view')} style={styles.downloadTouch}> <Text style={styles.downloadResumeText}>My Resume</Text> </TouchableOpacity>
                </View>

            </View>
        </View >
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
        borderBottomWidth: 2,
        paddingBottom: 25,
        borderColor: '#929292',
    },
    aboutImage: {
        height: 300,
        marginVertical: 25,
        width: '100%',
        filter: 'grayscale(100%)',
        borderRadius: 5,
    },
    contactInfo: {
        color: 'white',
        fontWeight: 500,
        fontSize: 16,
        paddingVertical: 2,
    },
    infoColor: {
        color: '#00844e',
        fontWeight: 500,
        fontSize: 16,
        paddingVertical: 2,
    },
    locationColor: {
        color: '#929292',
        fontWeight: 500,
        fontSize: 16,
        paddingVertical: 2,
    },
    infoView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        overflow: 'scroll',
    },
    socialIconsView: {
        flexDirection: 'row',
        width: '100%',
        overflow: 'scroll',
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    downloadResumeText: {
        color: 'white',
        backgroundColor: '#00844e',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 55,
        fontWeight: 700,
    },
});
