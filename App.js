import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import Task from './assets/Components/task';

export default function App() {

  const [task, setTask] = useState();
  const [todolist, setTodolist] = useState([]);

  const additems = () => {
    Keyboard.dismiss;
    setTodolist([...todolist, task])
    setTask(null);
  }

 const completetask = (index) => {
  const todolistcopy = [...todolist];
  todolistcopy.splice(index, 1),
  setTodolist(todolistcopy);
 }

  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.taskText}>Today's Tasks</Text>
        {
          todolist.map((item, index) =>
          {
            return (
            <TouchableOpacity key={index}  onPress={() => completetask(index)}>
                  <Task text={item} />
            </TouchableOpacity>)
        })
        }
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.TextView}
      >
        <TextInput style={styles.TextInput} placeholder='create new task' value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity style={styles.plus} onPress={() => additems()}>
          <Text>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop: Constants.statusBarHeight,
  },
  task:{
    marginHorizontal: 20,
  },
  taskText: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 94,
  },
  
  TextView: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  TextInput: {
    width: 250,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    paddingLeft:20,
  },
  plus: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
