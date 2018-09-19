import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { onUpdateState } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    count: state.home.count,
    loading: state.global.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateState: payload => dispatch(onUpdateState(payload)),
  };
}

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    count: PropTypes.number,
    loading: PropTypes.bool,
    updateState: PropTypes.func,
  };

  static defaultProps = {
    navigation: {},
    count: 0,
    loading: false,
    updateState: () => {},
  };
  componentWillMount() {}

  onPress = () => {
    const { count, updateState } = this.props;
    updateState({ count: count + 1 });
  };

  onPress2 = () => {
    const { count, updateState } = this.props;
    updateState({ count: count - 1 });
  };

  backHome1 = () => {
    const { navigation } = this.props;
    navigation.navigate('Home2');
  };

  render() {
    const { count, loading } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          {count}
        </Text>
        <TouchableOpacity onPress={this.onPress}>
          <Text>点我多</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress2}>
          <Text>点我少</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.backHome1}>
          <Text>去Home2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
