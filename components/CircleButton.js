import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

export default function CircleButton({ onPress }) {
    CircleButton.propTypes = {
        onPress: PropTypes.func
    }

    return (
        <View style={styles.circleButtonContainer}>
        <Pressable style={styles.circleButton} onPress={onPress}>
            <MaterialIcons name="add" size={38} color="#25292e" />
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 50,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
  },
});
