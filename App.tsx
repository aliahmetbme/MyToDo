import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Text, View, FlatList, Keyboard,} from 'react-native';
import SearchBar from "./component/search/searchBar"
import Task from "./component/Tasks/task"


function App() {

  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([])
  const [taskCount, setTaskCount] = useState(0);
  
  const handleChangeText = (text) => {
    setTask(text);
  };

  const handleAddTask = () => {
    setTaskCount(taskCount + 1)
    setTaskList([...taskList,task])
    setTask("")
    console.log(taskList)
  }



  function decreaseTaskAmount(){
    setTaskCount(taskCount - 1)
  }
  // value değeri text inputun içindeki şeyi, belirliyor task yaptığımız zaman value yi task güncellendikçe değişiyor.
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#58776F"}}>
      <View style={style.container}>
        <Text style={style.Task} >Tasks: </Text>
        <Text style={style.conuterStyle}>{taskCount}  </Text> 
      </View>
      <ScrollView>
        {taskList.map((item, index) => {
          return (
             <Task value={false} key={index} setComplate={decreaseTaskAmount} text={item}></Task>
          )
          })
        }
      </ScrollView>    
      <SearchBar 
          text={text => handleChangeText(text)} 
          clicked={() => handleAddTask()} 
          value={task}>
      </SearchBar>  
    </SafeAreaView>
  );
}

const style =  StyleSheet.create({
  container:{
    flexDirection:'row',
    margin:15,
    marginBottom:9    
  },
  conuterStyle: {
    color:'white',
    fontSize:30,
    marginLeft: 'auto',
   fontWeight:'bold'},
  Task: {
      color:'white',
      fontSize:30,
      alignSelf:'flex-end',
      fontWeight:'bold'},
})
export default App;
