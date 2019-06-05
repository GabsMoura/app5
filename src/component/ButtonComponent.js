import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class ButtonComponent extends Component {
  static propTypes = {
    texto: PropTypes.string,
    Func: PropTypes.func,
    cor: PropTypes.string
  }
  render() {
    return (
      <Button icon={{ name: 'cached' }} title={this.props.texto} onPress={this.props.Func} color={this.props.cor} />
    );
  }
}