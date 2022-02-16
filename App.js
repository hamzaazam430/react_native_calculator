/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect } from 'react';
// import type {Node} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RNFetchBlob from 'rn-fetch-blob';

import NetInfo from '@react-native-community/netinfo';

export default class App extends Component {
  

  state = {
    amount: '0',
    result: '0',
    formula: '',
  }

  loadFormula = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/hamzaazam430/iatgs_formula/main/formula.txt'
      );
      const formula = await response.text();
      this.setState({
        formula: formula,
      })
      // console.log(this.state.formula);
    } catch (error) {
      // console.error(error);
    }
  }

  onPress = (value) => {
      if (this.state.amount !== '0') {
        var new_value = this.state.amount + value;
          this.setState({
            amount: new_value,
            result: this.calculate(new_value),
          });
      }
      else {
        if (value !== '0' && value !== '00' && value !== '000') {
          // console.log(eval('value * 2'))
          this.setState({
            amount: value,
            result: this.calculate(value),
          });
        }
      }
    this.calculate(this.state.amount);
  }

  calculate = (amount) => {
    // var final = amount * 2;
    var final = eval(this.state.formula);
    return final;
  }
  UNSAFE_componentWillMount(){
    // var NetInfo = useNetInfo();
    // NetInfo.fetch().then(state => {
    //   if (state.isConnected) {
    //     console.log("Connected");
        this.loadFormula();
    //   } else {
    //     console.log("Not connected");
    //     alert('You are not connected to internet.');
    //   }
    // });
  }

  render () {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 0.3, backgroundColor: "#d0d0d0" }} />
      <View style={styles.title}>
        <Text style={styles.titleText}>IATGS</Text>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputBoxHeading}>Policy Amount:</Text>
        <ScrollView style={styles.scrollView} contentContainerStyle={contentStyle.scrollViewContent} horizontal={true}>
          <Text style={styles.inputBoxNumber}>{this.state.amount}</Text>
        </ScrollView>
      </View>
      <View style={styles.outputBox}>
        <Text style={styles.outputBoxHeading}>Title Policy Premium:</Text>
        <ScrollView style={styles.scrollView} contentContainerStyle={contentStyle.scrollViewContent} horizontal={true}>
          <Text style={styles.outputBoxNumber}>{this.state.result}</Text>
        </ScrollView>
      </View>
      <View style={styles.buttonPanel} >
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('00')}>
            <Text style={styles.buttonText}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIndividual} onPress={() => this.onPress('000')}>
            <Text style={styles.buttonText}>000</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <Text style={styles.clearText} onPress={
            ()=>{ this.setState({
              amount: '0',
              result: '0',
            })}
          }>
            Clear
          </Text>
        </View>
      </View>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  title: {
    flex: 0.5,
    backgroundColor: "#002f51",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#f1ffff',
  },
  scrollView: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  inputBox: { 
    flex: 0.6, 
    backgroundColor: "#092441" ,
    flexDirection: "column"
  },
  inputBoxHeading: {
    flex: 0.5,
    marginTop: 8,
    fontSize: 13,
    color: '#e2f0ff',
    marginLeft: 10
  },
  inputBoxNumber: {
    flex: 0.5,
    textAlign: 'right',
    right: 0,
    fontSize: 30,
  },
  outputBox: { 
    flex: 0.7,
    backgroundColor: "#135287" ,
    flexDirection: "column"
  },
  outputBoxHeading: {
    flex: 0.5,
    marginTop: 5,
    fontSize: 13,
    color: '#e2f0ff',
    marginLeft: 10
  },
  outputBoxNumber: {
    flex: 0.5,
    textAlign: 'right',
    right: 0,
    fontSize: 40,
  },
  buttonPanel: { 
    flex: 4, 
    backgroundColor: "#e2e2e2",
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '15%'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonIndividual: {
    margin:5,
    width: '27%',
    textAlign: "center",
    backgroundColor: '#2c4960',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  clearText: {
    margin: 10,
    fontSize: 40,
    color: '#030303',
    fontWeight: 'bold',
  }
});

const contentStyle = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1, 
    justifyContent: 'flex-end'
  }
});
