import React from 'react';
import { Card, IconButton, Colors } from 'react-native-paper';

const TaskCard = ({ title, categoryColor }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Title
        title={title}
        titleStyle={{ color: 'black' }}
        left={() => <Card.Cover style={{ backgroundColor: categoryColor, width: 50, height: 50, borderRadius: 25 }} />}
        right={() => <IconButton icon="pencil" color={Colors.blue500} onPress={() => console.log('Editar tarefa')} />}
      />
    </Card>
  );
};

export default TaskCard;
