import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [phpPerHour, setPhpPerHour] = useState('');
  const [workHoursPerDay, setWorkHoursPerDay] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [savingsRate, setSavingsRate] = useState('');
  const [annualWorkSummary, setAnnualWorkSummary] = useState('');
  const [annualGrossIncome, setAnnualGrossIncome] = useState('');
  const [annualTaxPayable, setAnnualTaxPayable] = useState('');
  const [annualSavings, setAnnualSavings] = useState('');
  const [spendableIncome, setSpendableIncome] = useState('');

  const calculateIncome = () => {
    const totWorkingDays = 5 * (52 - 2);

    const annualWorkSummaryValue = parseFloat(workHoursPerDay) * totWorkingDays;
    setAnnualWorkSummary(annualWorkSummaryValue);

    const annualGrossIncomeValue = parseFloat(phpPerHour) * annualWorkSummaryValue;
    setAnnualGrossIncome(annualGrossIncomeValue);

    const annualTaxPayableValue = (annualGrossIncomeValue * parseFloat(taxRate)) / 100;
    setAnnualTaxPayable(annualTaxPayableValue);

    const annualSavingsValue = (annualGrossIncomeValue * parseFloat(savingsRate)) / 100;
    setAnnualSavings(annualSavingsValue);

    const spendableIncomeValue = annualGrossIncomeValue - annualTaxPayableValue - annualSavingsValue;
    setSpendableIncome(spendableIncomeValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headtext}>INCOME PLANNER</Text>
      </View>

      <View style={styles.content}>
        <Text style={{ fontSize: 20, marginTop: 10 }}> Input Values Accordingly</Text>
        <View style={{ width: "100%", padding: 20, gap: 20, }}>
          <View>
            <Text>PHP Per hour</Text>
            <TextInput
              style={styles.input}
              value={phpPerHour}
              onChangeText={text => setPhpPerHour(text)}
            />
          </View>

          <View>
            <Text>Work Hours Per Day</Text>
            <TextInput
              style={styles.input}
              value={workHoursPerDay}
              onChangeText={text => setWorkHoursPerDay(text)}
            />
          </View>

          <View>
            <Text>Tax Rate (%)</Text>
            <TextInput
              style={styles.input}
              value={taxRate}
              onChangeText={text => setTaxRate(text)}
            />
          </View>

          <View>
            <Text>Savings Rate (%)</Text>
            <TextInput
              style={styles.input}
              value={savingsRate}
              onChangeText={text => setSavingsRate(text)}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={calculateIncome}>
          <Text style={styles.calctxt}>CALCULATOR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultcontent}>
        <View style={styles.result}>
          <Text style={{ fontSize: 16 }}>Annual Work Summary</Text>
          <Text style={{ fontSize: 16 }}>{annualWorkSummary} HRS</Text>
        </View>

        <View style={styles.result}>
          <Text style={{ fontSize: 16 }}>Annual Gross Income</Text>
          <Text style={{ fontSize: 16 }}>{annualGrossIncome} PHP</Text>
        </View>

        <View style={styles.result}>
          <Text style={{ fontSize: 16 }}>Annual Tax Payable</Text>
          <Text style={{ fontSize: 16 }}>{annualTaxPayable} PHP</Text>
        </View>

        <View style={styles.result}>
          <Text style={{ fontSize: 16 }}>Annual Savings</Text>
          <Text style={{ fontSize: 16 }}>{annualSavings} PHP</Text>
        </View>

        <View style={styles.result}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Spendable Income</Text>
          <Text style={{ fontSize: 16, fontWeight:"bold" }}>{spendableIncome} PHP</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 36,
  },
  header: {
    backgroundColor: "grey",
    width: "100%",
    height: 60,
    justifyContent: "center",
    padding: 10,
  },
  headtext: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  content: {
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000000",
  },
  btn: {
    width: "75%",
    height: 50,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    marginTop:15,
  },
  calctxt: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultcontent: {
    marginTop: 20,
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  result: {
    flexDirection: "row",
    justifyContent:"space-between",
  },
});