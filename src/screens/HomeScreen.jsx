import React, { useState } from 'react';
import { View, FlatList, Modal } from 'react-native';
import { Appbar, FAB, TextInput, Button, Colors } from 'react-native-paper';
import TaskCard from '../components/TaskCard';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryColor, setCategoryColor] = useState('');

  const handleAddTask = () => {
    // Aqui você pode implementar a lógica para adicionar a nova tarefa ao estado ou ao banco de dados
    console.log('Tarefa adicionada:', { title, description, categoryColor });
    // Fechar o modal após adicionar a tarefa
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />
      </Appbar.Header>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard title={item.title} categoryColor={item.categoryColor} />}
        keyExtractor={item => item.id.toString()}
      />
      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        icon="plus"
        onPress={() => setModalVisible(true)}
      />
      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
          <TextInput
            label="Título"
            value={title}
            onChangeText={text => setTitle(text)}
            style={{ width: '80%', marginBottom: 10 }}
          />
          <TextInput
            label="Descrição"
            value={description}
            onChangeText={text => setDescription(text)}
            style={{ width: '80%', marginBottom: 10 }}
          />
          <TextInput
            label="Cor da Categoria"
            value={categoryColor}
            onChangeText={text => setCategoryColor(text)}
            style={{ width: '80%', marginBottom: 10 }}
          />
          <Button mode="contained" onPress={handleAddTask} style={{ backgroundColor: Colors.blue500 }}>
            Adicionar Tarefa
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
