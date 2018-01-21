import React, { Component } from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import styles from './styles';

class Overview extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LinearGradient colors={['#4B8ECA', '#2E5C85']} style={styles.container}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceNumber}>1000.000 ZEN</Text>
        <Text style={styles.balanceStatitics}>50980 USD | 3.000 BTC</Text>
      </LinearGradient>
    );
  }
}

// Overview.propTypes = {
//   balance: PropTypes.string.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     balance: state.overview.balance,
//   };
// }

export default Overview;
