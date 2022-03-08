import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faBed} from '@fortawesome/free-solid-svg-icons';
import {faTableCells} from '@fortawesome/free-solid-svg-icons';
import {faBath} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';

const DATA = [
  {
    name: 'Casa 1',
    id: 1,
    direction: '3571 W. Gray St. Utica',
    location: '',
    latitud: 111,
    longitud: 222,
    rooms: 3,
    bathroom: 1,
    ft: 12,
    price: 15000,
    qualif: 1.1,
    uri: 'https://i.blogs.es/c68014/casa-3d/450_1000.jpeg',
    stars: '4.5',
  },
  {
    name: 'Casa 2',
    id: 2,
    direction: 'P. Sherman',
    location: '',
    latitud: 111,
    longitud: 222,
    rooms: 4,
    bathroom: 1,
    ft: 11,
    price: 15000,
    qualif: 1.1,
    uri: 'https://img10.naventcdn.com/avisos/18/00/62/60/93/91/720x532/286318094.jpg',
    stars: '4.3',
  },
  {
    name: 'Casa 3',
    id: 3,
    direction: 'Direction #123',
    location: '',
    latitud: 111,
    longitud: 222,
    rooms: 1,
    bathroom: 1,
    ft: 15,
    price: 15000,
    qualif: 1.1,
    uri: 'https://centraldecasas.com/wp-content/uploads/2020/03/Venta-y-renta-de-casas-y-terrenos-en-guadalajara2.png',
    stars: '4.2',
  },
  {
    name: 'Casa 4',
    id: 4,
    direction: 'Direction #123',
    location: '',
    latitud: 111,
    longitud: 222,
    rooms: 3,
    bathroom: 1,
    ft: 12,
    price: 15000,
    qualif: 1.1,
    uri: 'https://www.elperiodicousa.com/wp-content/uploads/2020/05/Tex-Casas-venta.jpg',
    stars: '4.9',
  },
  {
    name: 'Casa 5',
    id: 5,
    direction: 'Direction #123',
    location: '',
    latitud: 111,
    longitud: 222,
    rooms: 3,
    bathroom: 1,
    ft: 12,
    price: 15000,
    qualif: 1.1,
    uri: 'http://www.arqhys.com/casas/fotos/casas/Casas-en-venta.jpg',
    stars: '3.1',
  },
  {
    name: 'Casa 6',
    id: 6,
    direction: 'Direction #123',
    location: '',
    latitud: 111,
    longitud: 222,
    rooms: 3,
    bathroom: 1,
    ft: 12,
    price: 15000,
    qualif: 1.1,
    uri: 'https://img10.naventcdn.com/avisos/18/00/61/59/26/40/720x532/266893063.jpg',
    stars: '4.1',
  },
  {
    name: 'Casa 7',
    id: 7,
    direction: 'Direction #123',
    location: '',
    latitud: 111,
    longitud: 222,
    rooms: 3,
    bathroom: 1,
    ft: 12,
    price: 15000,
    qualif: 1.1,
    uri: 'https://realestateclemus.com/wp-content/grand-media/image/casa-dos-plantas-frente-playa-vista-mar-venta-bucerias.jpg',
    stars: '2.1',
  },
  {
    name: 'Casa 8',
    id: 8,
    direction: 'Direction #123',
    location: '',
    latitud: 111,
    longitud: 222,
    rooms: 3,
    bathroom: 1,
    ft: 12,
    price: 15000,
    qualif: 1.1,
    uri: 'https://realestateclemus.com/wp-content/uploads/2019/12/casa-venta-residencial-los-tigres-nuevo-vallarta.jpg',
    stars: '4.9',
  },
  {
    name: 'Casa 9',
    id: 9,
    direction: 'Direction #123',
    location: '',
    latitud: 111,
    longitud: 222,
    rooms: 3,
    bathroom: 1,
    ft: 10,
    price: 15000,
    qualif: 1.1,
    uri: 'https://www.buscandocasa.com.mx/wordpress/wp-content/uploads/2016/08/casa-venta-cumbres-modelo-inland-peninsula-1.jpg',
    stars: '4.3',
  },
];

const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
const space = <>&nbsp;&nbsp;</>;
const App = () => {
  const renderItem = ({item}) => (
    <ScrollView>
      <View style={styles.item}>
        <Image style={styles.img} source={{uri: item.uri}} />
        <Text style={styles.puntuacion}>{item.stars}</Text>
        <Image
          style={styles.img2}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Estrella_amarilla.png',
          }}
        />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <View>
            <Text style={styles.info}>
              <FontAwesomeIcon icon={faLocationDot} />
              {item.direction}
            </Text>
            <Text style={styles.boxes}>
              <FontAwesomeIcon icon={faBed} />
              {space}
              <Text style={styles.txt}>{item.rooms}</Text>
              {tab}
              <FontAwesomeIcon icon={faBath} />
              {space}
              <Text style={styles.txt}>{item.bathroom}</Text>
              {tab}
              <FontAwesomeIcon icon={faTableCells} />
              {space}
              <Text style={styles.txt}>{item.ft}</Text>
            </Text>
            <Text style={styles.price}>${item.price}/m</Text>
            <FontAwesomeIcon style={styles.heart} icon={faHeart} />
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  heart: {
    color: 'green',
    position: 'absolute',
    paddingTop: 120,
    marginLeft: 220,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  price: {
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  puntuacion: {
    position: 'absolute',
    marginTop: 85,
    marginLeft: 40,
    borderRadius: 5,
    backgroundColor: '#F1DB62',
    minWidth: 60,
    textAlign: 'right',
    paddingRight: 7,
    fontWeight: 'bold',
  },
  img2: {
    width: 20,
    height: 20,
    borderRadius: 8,
    position: 'absolute',
    marginTop: 83,
    marginLeft: 45,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 22,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    paddingLeft: 20,
  },
  txt: {
    fontSize: 18,
  },
  boxes: {
    paddingLeft: 20,
  },
});

export default App;
