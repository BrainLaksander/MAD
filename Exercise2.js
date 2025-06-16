import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Exercise2 = () => {
  return (
    <View style={styles.wrapper}>
      {/* Header: Foto & Nama */}
      <View style={styles.header}>
        <Image
          source={require('./assets/123.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>Brain Glisten Laksander</Text>
          <Text style={styles.job}>Data Analyst</Text>
          <Text style={styles.location}>📍 Manado, Indonesia</Text>
        </View>
      </View>

      {/* Kontak */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kontak</Text>
        <Text style={styles.sectionText}>📧 brainlaksander@gmail.com</Text>
        <Text style={styles.sectionText}>📞 0878-7867-5456</Text>
      </View>

      {/* Pendidikan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pendidikan</Text>
        <Text style={styles.sectionText}>
          🎓 S1 Sistem Informasi - Universitas Klabat
        </Text>
      </View>

      {/* Skill */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skill</Text>
        <Text style={styles.sectionText}>- Microsoft Excel</Text>
        <Text style={styles.sectionText}>- SQL</Text>
        <Text style={styles.sectionText}>
          - Python (Pandas, NumPy, Matplotlib)
        </Text>
        <Text style={styles.sectionText}>- Tableau / Power BI</Text>
        <Text style={styles.sectionText}>- Data Cleaning</Text>
        <Text style={styles.sectionText}>
          - Exploratory Data Analysis (EDA)
        </Text>
        <Text style={styles.sectionText}>- Data Visualization</Text>
      </View>

      {/* Hobi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hobi</Text>
        <Text style={styles.sectionText}>🏀 Bermain Basket</Text>
        <Text style={styles.sectionText}>📚 Membaca Buku</Text>
        <Text style={styles.sectionText}>🎮 Gaming</Text>
      </View>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#eef3f9',
    padding: 15,
    borderRadius: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  job: {
    fontSize: 16,
    color: '#2980b9',
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#ffffff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#2980b9',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 15,
    color: '#34495e',
    marginBottom: 4,
  },
});
