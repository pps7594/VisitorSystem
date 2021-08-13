import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counter";

const CountScreen = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CountScreen;
