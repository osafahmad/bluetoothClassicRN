import React from 'react';

import {
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

const ResultScreen = () => {
  const { score, riskProfile } = useSelector((state : any) => state.questionnaire);

  return (
    <View>
      <Text>Your Risk Profile Score: {score}</Text>
      <Text>Your Risk Profile: {riskProfile}</Text>
    </View>
  );
};

export default ResultScreen;