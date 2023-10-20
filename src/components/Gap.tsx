import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  height?: number;
  width?: number;
};

const Gap = ({height, width}: Props) => {
  return <View style={{height, width}} />;
};

export default Gap;
