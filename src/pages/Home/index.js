import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '10/01/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'PIX Client Marcos',
    value: '250',
    date: '17/01/2023',
    type: 1 // Receita/Entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '400',
    date: '24/01/2023',
    type: 1 // Receita/Entradas
  },
]


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Lucas Luan"></Header>
      
    <Balance saldo="8000,00" gastos="-257,90"/>

    <Actions/>


    <Text style={styles.title}>Últimas movimentações</Text>

    <FlatList
      style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => <Movements data={item} />}
    />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
    },
    list: {
      marginStart: 14,
      marginEnd: 14,
    }
  });

  
