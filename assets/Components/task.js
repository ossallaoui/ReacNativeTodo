import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Task = (props) => {
    return (
        <View style={styles.todoList} >
                <View style={styles.taskitem}>
                <View style={styles.square}></View>
                    <Text>{props.text}</Text>
            </View>
                <View style={styles.cercle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoList: {
        marginTop: 20,
        width: 350,
        height: 56,
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      },
      taskitem: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      square:{
        width:24,
        height: 24,
        backgroundColor: '#55BCF666',
        borderRadius: 5,
        marginRight: 15,
      },
      cercle: {
        width:12,
        height: 12,
        borderWidth: 3,
        borderColor: '#55BCF666',
        borderRadius: 5,
        alignItems: 'center',
      },
    });
export default Task;