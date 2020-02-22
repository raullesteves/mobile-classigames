import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Table
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.table}>
        <View style={styles.td}>
          <View style={styles.tr} id="1" onclick="sendId(1)"></View>
          <View style={styles.tr} id="2" onclick="sendId(2)"></View>
          <View style={styles.tr} id="3" onclick="sendId(3)"></View>
        </View>
        <View style={styles.td}>
          <View style={styles.tr} id="4" onclick="sendId(4)"></View>
          <View style={styles.tr} id="5" onclick="sendId(5)"></View>
          <View style={styles.tr} id="6" onclick="sendId(6)"></View>
        </View>
        <View style={styles.td}>
          <View style={styles.tr} id="7" onclick="sendId(7)"></View>
          <View style={styles.tr} id="8" onclick="sendId(8)"></View>
          <View style={styles.tr} id="9" onclick="sendId(9)"></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: 300,
    height: 300,
  },
  td: {
    flex: 1,
    flexDirection: "row"
  },
  tr: {
    borderWidth: 2,
    height: 100,
    width: 100,
  },
});

export default App;
