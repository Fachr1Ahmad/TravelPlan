import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { JADWAL, MASKAPAI, BANDARA } from "../utils/data";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const Home = ({ navigation }) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");

  const departureRef = useRef("");
  const arrivalRef = useRef("");

  const onSubmit = () => {
    let newDeparture;
    console.log(departure);
    for (const [key, value] of Object.entries(BANDARA)) {
      if (value.bandara_nama === departure) {
        newDeparture = key;
        break;

      }

    }
    let newArrival;
    for (const [key, value] of Object.entries(BANDARA)) {
      if (value.bandara_nama === arrival) {
        newArrival = key;
        break;

      }
    }
    navigation.navigate("Detail", {
      departure: newDeparture,
      arrival: newArrival,
      date: date,

    });

  };

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <KeyboardAvoidingView style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.fieldContainer}>
              <Input
                type="text"
                value={departure}
                onChangeText={setDeparture}
                placeholder="Lokasi Keberangkatan"
                label="Lokasi Keberangkatan"
                autoCompleteType={undefined}
                leftIcon={
                  <FontAwesome
                    name="plane-departure"
                    size={20}
                    color="#88b454"
                  />
                }
                leftIconContainerStyle={{
                  padding: 20,
                }}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Input
                value={arrival}
                onChangeText={setArrival}
                placeholder="Lokasi Tujuan"
                label="Lokasi Tujuan"
                autoCompleteType={undefined}
                leftIcon={
                  <FontAwesome name="plane-arrival" 
                  size={20} 
                  color="#88b454" />
                }
                leftIconContainerStyle={{
                  padding: 20,
                }}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Input
                type="text"
                value={date}
                onChangeText={setDate}
                autoCompleteType={undefined}
                placeholder="Masukan Tanggal Keberangkatan"
                label="Tanggal Keberangkatan"
                leftIcon={
                  <FontAwesome name="calendar-alt" 
                  size={20} 
                  color="#88b454" />
                }
                leftIconContainerStyle={{
                  padding: 20,
                }}
              />
            </View>
            <View style={styles.fieldContainer}>
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.textButton}>Cari</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.copyright}>
          <Text>Fachri Ahmad-120140124</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#88b454",

  },
  screenContainer: {
    justifyContent: "space-between",
    flex: 1,

  },
  formContainer: {
    backgroundColor: "#f7f9fa",
    margin: 20,
    padding: 20,
    paddingTop: 35,
    borderRadius: 30,
    
  },
  fieldContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    paddingTop: 20,

  },
  button: {
    backgroundColor: "orange",
    color: "orange",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    padding: 10,

  },
  textButton: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 15,

  },
  copyright: {
    marginTop: 100,
    alignItems: "center",
    
  },

});
export default Home;
