import React from 'react';
import { View, FlatList } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';
import TaskCard from '../components/TaskCard';

const tasks = [
  { id: 1, title: 'Comprar leite', categoryColor: '#FFC107' },
  { id: 2, title: 'Pagar conta de luz', categoryColor: '#4CAF50' },
  { id: 3, title: 'Fazer exercícios', categoryColor: '#2196F3' },
  { id: 4, title: 'Estudar React Native', categoryColor: '#FF5722' },
];

const HomeScreen = () => {
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
        onPress={() => console.log('Adicionar tarefa')}
      />
    </View>
  );
};

export default HomeScreen;
