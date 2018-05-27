import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.116250,
          longitude:  115.087855
        },
        title: 'Universitas Pendidikan Ganesha',
        subtitle: 'Berlokasi di Jl. Udayana No. 11, Singaraja, Banjar Tegal, Kec. Buleleng, Kabupaten Buleleng, Bali'
      },
      {
        key:2,
        latlng: {
          latitude:-8.120582,
          longitude:  115.090605
        },
        title: 'Universitas Panji Sakti',
        subtitle: 'Berlokasi di Jl. Bisma No.22, Banjar Tegal, Singaraja, Kabupaten Buleleng, Bali'
      },
      {
        key:3,
        latlng: {
          latitude: -8.797902,
          longitude: 115.172381
        },
        title: 'Universitas Udayana',
        subtitle: 'Berlokasi di Jl. Raya Kampus UNUD, Kampus Bukit Jimbaran, Kuta Selatan, Jimbaran, Kuta Sel., Kabupaten Badung, Bali'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.797690,
          longitude: 115.161738
        },
        title: 'Politeknik Negeri Bali',
        subtitle: 'Berlokasi di Jl. Raya Uluwatu No.45, Jimbaran, Kuta Sel., Kabupaten Badung, Bali'
      },
      {
        key:5,
        latlng: {
          latitude:-8.628665,
          longitude: 115.206909
        },
        title: 'Universitas Mahendradatta Bali',
        subtitle: 'Berlokasi di Jl. Ken Arok No.12, Peguyangan, Denpasar Utara, Kota Denpasar, Bali'
      },
      {
        key:6,
        latlng: {
          latitude:-8.652792,
          longitude: 115.224954
        },
        title: 'Universitas Mahasaraswati Denpasar',
        subtitle: 'Berlokasi di Jl. Kamboja No.11A, Dangin Puri Kangin, Denpasar Utara, Kota Denpasar, Bali'
      },
      {
        key:7,
        latlng: {
          latitude:-8.660628,
          longitude: 115.239305
        },
        title: 'Universitas Warmadewa',
        subtitle: 'Berlokasi di JL. Terompong, No. 24, Tanjung Bungkak, Panjer, Denpasar Sel., Kota Denpasar, Bali'
      },{
        key:8,
        latlng: {
          latitude: -8.678255,
          longitude:  115.224650
        },
        title: 'Universitas Pendidikan Nasional',
        subtitle: 'Berlokasi di Jl. Waturenggong No.135, Dauh Puri Klod, Denpasar Bar., Kota Denpasar, Bali'
      },{
        key:9,
        latlng: {
          latitude: -8.653627,
          longitude: 115.232548
        },
        title: 'Institut Seni Indonesia Denpasar',
        subtitle: 'Berlokasi di Jl. Nusa Indah, Sumerta, Denpasar, Kota Denpasar, Bali'
      },{
        key:10,
        latlng: {
          latitude: -8.673192,
          longitude: 115.226701
        },
        title: 'STIKOM Bali',
        subtitle: 'Berlokasi di Jl. Raya Puputan No.86, Renon, Denpasar Tim., Kota Denpasar, Bali'
      },{
        key:11,
        latlng: {
          latitude: -8.437905,
          longitude: 115.612436
        },
        title: 'Stkip Agama Hindu Amlapura',
        subtitle: 'Berlokasi di Karangasem, Kec. Karangasem, Kabupaten Karangasem, Bali'
      },{
        key:12,
        latlng: {
          latitude: -8.462501,
          longitude: 115.350404
        },
        title: 'STKIP SUAR BANGLI',
        subtitle: 'Berlokasi di Kawan, Kec. Bangli, Kabupaten Bangli, Bali'
       },{
        key:13,
        latlng: {
          latitude: -8.524595,
          longitude: 115.402041
        },
        title: 'STIKES Panca AtmaJaya',
        subtitle: 'Berlokasi di Jl. Ngurah Rai, Semarapura Tengah, Kec. Klungkung, Kabupaten Klungkung, Bali'
      },{
        key:14,
        latlng: {
          latitude: -8.357654,
          longitude: 114.625771
        },
        title: 'STIKES Jembrana',
        subtitle: 'Berlokasi di Jalan Jenderal. Sudirman No.2, Pendem, Kecamatan Jembrana, Pendem, Kec. Jembrana, Kabupaten Jembrana, Bali'
      },{
        key:15,
        latlng: {
          latitude: -8.558093,
          longitude: 115.140377
        },
        title: 'Universitas Tabanan',
        subtitle: 'Berlokasi di Jalan Wagimin, No. 8, Kediri, Tabanan, Kediri, Denpasar, Bali'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Universitas di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>Gani@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
