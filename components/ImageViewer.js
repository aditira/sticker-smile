import { StyleSheet, Image } from "react-native";
import PropTypes from 'prop-types';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    ImageViewer.propTypes = {
        placeholderImageSource: PropTypes.any,
        selectedImage: PropTypes.string
    }

    console.log(placeholderImageSource);
    console.log(selectedImage);

    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

    return (
        <Image source={imageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})