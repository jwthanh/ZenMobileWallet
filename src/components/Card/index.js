import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Card extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
};

Card.defaultProps = {
  title: 'Card',
};

export default Card;
