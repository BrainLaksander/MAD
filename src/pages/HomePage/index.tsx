import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, Gap} from '../../components/atoms';

const HomePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.greeting}>Hi, John Doe</Text>
            <Text style={styles.subText}>Have you track your money today?</Text>
          </View>
          <Image
            source={require('../../assets/pic.png')}
            style={styles.avatar}
          />
        </View>

        {/* Balance Card */}
        <View style={styles.cardWrapper}>
          <Text style={styles.cardTitle}>Your Balance</Text>
          <Text style={styles.totalBalance}>Rp. 10.000.000</Text>
          <View style={styles.divider} />
          <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>Cash on Hand</Text>
            <Text style={styles.balanceAmount}>Rp. 4.000.000</Text>
          </View>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>Cash on Bank</Text>
            <Text style={styles.balanceAmount}>Rp. 6.000.000</Text>
          </View>
        </View>

        {/* Transaction Section */}
        <View style={styles.transactionCard}>
          <Text style={styles.transactionTitle}>Add Transaction</Text>
          <Gap height={20} />
          <Button text="Cash On Hand" />
          <Gap height={20} />
          <Button text="Cash On Bank" />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F9F9F9',
  },
  page: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 50,
    backgroundColor: '#F9F9F9',
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
  },
  headerTextContainer: {
    flex: 1,
    marginRight: 14,
  },
  greeting: {
    fontSize: 24,
    color: '#020202',
  },
  subText: {
    fontSize: 16,
    color: '#8D92A3',
    marginTop: 6,
    width: 900,
  },
  avatar: {
    width: 65,
    height: 65,
  },
  cardWrapper: {
    borderRadius: 16,
    padding: 24,
    marginTop: 30,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#020202',
  },
  totalBalance: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 14,
  },
  divider: {
    borderBottomWidth: 1.2,
    borderBottomColor: '#E0E0E0',
    marginVertical: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#020202',
  },
  balanceAmount: {
    fontSize: 16,
    color: '#020202',
  },
  transactionCard: {
    borderRadius: 16,
    padding: 24,
    marginTop: 30,
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#020202',
  },
});
