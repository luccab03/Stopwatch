import {StyleSheet, Dimensions} from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const Main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: Width,
        alignItems: 'center',
    },
    titulo: {
        paddingTop: 50,
        fontSize: 50,
    }
});

const Clock = StyleSheet.create({
    container: {
        marginTop: Height * 0.2,
        flex: 1,
    },
    buttons: {
        marginBottom: 20,
        flexDirection: 'row',
        width: Width * 0.5,
        justifyContent: 'space-between',
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tempoView: {
        alignItems: 'center',
    },
    tempo: {
        fontSize: 50,
        marginBottom: 20,
    },
    texto: {
        fontSize: 17,
    },
});

export {Main, Clock}
