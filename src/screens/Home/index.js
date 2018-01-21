import React, { Component } from 'react';
import { Animated, Text, View, ScrollView, Dimensions } from 'react-native';
import Overview from '../../components/Overview';
import Card from '../../components/Card';
import styles from './styles';
import device from '../../utils/device';

const HEADER_MAX_HEIGHT = Dimensions.get('window').width * 0.6;
const HEADER_MIN_HEIGHT = device.isIphoneX() ? 40 : 20;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const headerOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const barOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.View
            style={{ opacity: headerOpacity, transform: [{ translateY: headerTranslate }] }}
          >
            <Overview />
          </Animated.View>
          <View style={styles.bar}>
            <Text style={styles.title}>Title</Text>
          </View>
        </Animated.View>
        <ScrollView
          style={{ flex: 1, marginTop: Dimensions.get('window').width * -0.12 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }])}
        >
          <View style={{ marginTop: HEADER_MAX_HEIGHT }}>
            <Card title="Send ZEN" />
            <Card title="Receive ZEN" />
            <Card title="History transaction" />
            <Card title="Settings" />
          </View>
        </ScrollView>
        <Animated.View style={styles.headerTransparent}>
          <Animated.View style={{ opacity: barOpacity }}>
            <View style={[styles.bar, { height: HEADER_MIN_HEIGHT }]} />
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

export default Home;
