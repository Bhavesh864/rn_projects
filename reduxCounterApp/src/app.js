import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from 'react-redux';
import { counterIncreament, counterDecreament, counterClear, counterSet } from "./actions/counterActions";
import { helloAction } from "./actions/helloActions";

const App = (props) => {
    const onPressClear = () => {
        props.counterClear();
    }

    const onChangeText = (number) => {
        const count = parseInt(number);
        props.counterSet(count);
    }


    console.log(props);
    const { container, countViewStyle, welcome } = styles;
    return (
        <View style={container}>
            <TextInput
                style={{ width: 40, height: 40, borderWidth: 1, color: 'black', fontSize: 20 }}
                onChangeText={onChangeText}
                value={props.count.toString()}
            />
            <View style={countViewStyle}>
                <Button onPress={props.counterIncreament} title="+" />
                <Text style={welcome}>
                    {props.count}
                </Text>
                <Button onPress={props.counterDecreament} title="-" />
            </View>
            <Button onPress={onPressClear} title="Clear" />
            <Text>{props.hello.helloText}</Text>
            <Text>Do you press hello button {props.hello.pressedButton}</Text>
            <Button title="Press Hello button" onPress={() => { props.helloAction() }} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        color: 'black',
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        // color: 'black',
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    countViewStyle: {
        color: 'black',
        flexDirection: "row"
    }
});

function mapStateToProps(state) {
    return {
        count: state.counter,
        hello: state.hello,
    }
}

export default connect(mapStateToProps, { counterIncreament, counterDecreament, counterClear, counterSet, helloAction })(App);