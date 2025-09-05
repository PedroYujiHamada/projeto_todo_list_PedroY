import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Alert, TouchableOpacity} from 'react-native';
import logo from './assets/todo.png';
import Add from './assets/Add.png';
import { useState } from 'react';
import { FlashList } from "@shopify/flash-list";

export default function App() {
  const [tarefa,setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const btnAdicionar = () => {
    Alert.alert("TODO List" , "Valor: " + tarefa);
setTarefas([tarefa, ...tarefas]);
    setTarefa("")
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo}/>
        <Text>Todo List</Text>
        </View>
        <View style={styles.viewInput}>
        <TextInput placeholder="Adicione uma tarefa" onChangeText={setTarefa} value={tarefa}/>
        <TouchableOpacity onPress={btnAdicionar}>
        <Image source={Add} style={styles.Add}/>
        </TouchableOpacity>
        </View>
        <View style={styles.viewTarefas}>
          <FlashList
        data={tarefas}
        renderItem={({ Item }) => <Text>{Item}</Text>}
        />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  logo: {
    height: 128,
    width: 128,
  },
  viewInput: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Add: {
    height: 32,
    width: 32,
  },
  viewLogo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
    viewTarefas: {
      width: "100%",
      flex: 1
    },
  });
