// App.js
import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Keyboard,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function App() {
  const [text, setText] = React.useState('');
  const [items, setItems] = React.useState([]);

  const addItem = () => {
    const trimmed = text.trim();
    if (!trimmed) return; 
    setItems(prev => [{ id: Date.now().toString(), label: trimmed }, ...prev]);
    setText('');
    Keyboard.dismiss();
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.label}</Text>
    </View>
  );

  return (
    <LinearGradient

      colors={["#a5c0df", "#cedad9"]}
      style={styles.root}
      start={{ x: 1.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      type="radial"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>PERIPHERALS </Text>

          <View style={styles.row}>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="Enter Item"
              placeholderTextColor="rgba(0,0,0,0.35)"
              style={styles.input}
              onSubmitEditing={addItem}
              returnKeyType="done"
            />

            <TouchableOpacity style={styles.addButton} onPress={addItem} activeOpacity={0.8}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />
          <View style={styles.card}>
          <Text style={styles.subHeader}>Added Items:</Text>

          {items.length === 0 ? (
            <Text style={styles.empty}></Text>
          ) : (
            <FlatList
              data={items}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              contentContainerStyle={styles.list}
              keyboardShouldPersistTaps="handled"
            />
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,


  },

  header: {
    marginTop: 50,
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 5,
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },

  row: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    minHeight: Platform.OS === 'ios' ? 40 : 44,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#111',
  },

  addButton: {
    marginLeft: 10,
    backgroundColor: '#000000',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: 12,
    borderRadius: 1,
  },

  subHeader: {
    color: '#fff',
    fontWeight: '700',
    marginBottom: 8,
    fontSize: 16,
  },

  empty: {
    color: 'rgba(255,255,255,0.9)',
    fontStyle: 'italic',
  },

  list: {
    paddingBottom: 8,
  },

  listItem: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  listItemText: {
    color: '#111',
    fontSize: 15,
  },
});
