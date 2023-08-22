import React, { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';

const mergeStyles = (base: any, extension: any) => {
  const mergedStyles = { ...base };
  for (const key in extension) {
    if (mergedStyles[key]) {
      mergedStyles[key] = { ...mergedStyles[key], ...extension[key] };
    } else {
      mergedStyles[key] = extension[key];
    }
  }
  return mergedStyles;
};

const App = () => {
  const [izinler, setIzinler] = useState([
    {
      izin_tipi: 'Yıllık İzin',
      izin_baslangic_tarihi: '18.05.2023',
      izin_bitis_tarihi: '19.05.2023',
      izin_suresi: '1 Gün',
      key: "1"
    },
    {
      izin_tipi: 'Yıllık İzin',
      izin_baslangic_tarihi: '18.05.2023',
      izin_bitis_tarihi: '19.05.2023',
      izin_suresi: '1 Gün',
      key: "2"
    },
    {
      izin_tipi: 'Yıllık İzin',
      izin_baslangic_tarihi: '18.05.2023',
      izin_bitis_tarihi: '19.05.2023',
      izin_suresi: '1 Gün',
      key: "3"
    }
  ]);

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>

      <View style={styles.box}>
        <Text style={styles.text}>İzin Tipi</Text>
        <Text style={styles.textInline}>{item.izin_tipi}</Text>
      </View>

      <View style={boxViewStyle}>
        <View style={styles.row}>
          <View style={leftViewWithLineStyle}>
            <Text style={styles.text}>İzin Başlangıç Tarihi</Text>
            <Text style={styles.textInline}>{item.izin_baslangic_tarihi}</Text>
          </View>
          <View style={rightViewWithLineStyle}>
            <Text style={styles.text}>İzin Bitiş Tarihi</Text>
            <Text style={styles.textInline}>{item.izin_bitis_tarihi}</Text>
          </View>
        </View>
      </View>

      <View style={boxViewStyle}>
        <View style={styles.row}>
          <View style={styles.viewNoLine}>
            <Text style={styles.text}>İzin Süresi</Text>
          </View>
          <View style={viewNoLineStyle}>
            <Text style={styles.textInlineStyle}>{item.izin_suresi}</Text>
          </View>
        </View>
      </View>

    </View>
  );

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <View
        style={styles.container}
      >
        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.key}
          data={izinler}
          renderItem={renderItem}
        />
      </View>
    </Provider>
  );
};

export default App;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  itemContainer: {
    marginTop: 24,
    backgroundColor: 'white',
    width: 328,
    height: 200,
    paddingTop: 22,
    fontSize: 14
  },
  text: {
    color: '#8F9BB3',
    fontFamily: 'Poppins',
    fontSize: 11,
    fontStyle: 'normal',
    maxWidth: 140,
    fontWeight: '400',
    lineHeight: 20,
    paddingLeft: 20,
  },
  textInline: {
    paddingLeft: 20,
    paddingTop: 5,
  },
  textInlineStyle: {
    paddingTop: 3,
    color: '#34C759',
    textAlign: 'right'
  },
  box: {
    width: 308,
    height: 50,
    marginLeft: 10,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF1F7',
    marginBottom: 0
  },
  row: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  view: {
    width: 149,
    height: 50,
  },
  viewNoLine: {
    paddingTop: 10
  },
});

const box = {
  borderBottomWidth: 0,
  borderBottomColor: '',
  marginBottom: 10,
};

const viewNoLine = {
  width: 149,
  height: 50
};

const viewWithLine = {
  borderBottomWidth: 1,
  borderBottomColor: '#EDF1F7',
};

const addMarginToViewWithLine = {
  marginLeft: 10
};

const boxViewStyle = mergeStyles(styles.box, box);
const viewNoLineStyle = mergeStyles(styles.viewNoLine, viewNoLine);
const leftViewWithLineStyle = mergeStyles(styles.view, viewWithLine);
const rightViewWithLineStyle = mergeStyles(leftViewWithLineStyle, addMarginToViewWithLine);
