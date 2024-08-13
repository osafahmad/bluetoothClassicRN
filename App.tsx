/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'red'}
      />
      <Provider store={store} >
      <AppNavigator/>
      </Provider>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
