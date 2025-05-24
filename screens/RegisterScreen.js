import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function RegisterScreen({ navigation }) {
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('ADM');

    // Regex simples para validações
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateCPF = (cpf) => /^\d{11}$/.test(cpf.replace(/[.\-]/g, ''));
    const validateName = (name) => name.trim().length >= 3;
    const validatePassword = (pass) => pass.length >= 6;

    const handleRegister = () => {
        if (!validateName(fullName)) {
            Alert.alert('Erro', 'Nome completo deve ter pelo menos 3 caracteres.');
            return;
        }
        if (!birthDate) {
            Alert.alert('Erro', 'Informe sua data de nascimento.');
            return;
        }
        if (!validateCPF(cpf)) {
            Alert.alert('Erro', 'CPF deve conter 11 números.');
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert('Erro', 'Email inválido.');
            return;
        }
        if (!validatePassword(password)) {
            Alert.alert('Erro', 'Senha deve ter pelo menos 6 caracteres.');
            return;
        }

        Alert.alert('Sucesso', 'Cadastro realizado!');
        navigation.navigate('Login');
    };

    return (

        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Cadastro</Text>
            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nome completo"
                    value={fullName}
                    onChangeText={setFullName}
                    autoCapitalize="words"
                />
            </View>

            <View style={styles.inputContainer}>
                <Feather name="calendar" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Data de nascimento (DD/MM/AAAA)"
                    value={birthDate}
                    onChangeText={setBirthDate}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="id-card" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="CPF (somente números)"
                    value={cpf}
                    onChangeText={setCpf}
                    keyboardType="numeric"
                    maxLength={11}
                />
            </View>

            <View style={styles.inputContainer}>
                <Feather name="mail" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputContainer}>
                <Picker
                    selectedValue={role}
                    onValueChange={(itemValue) => setRole(itemValue)}
                    style={{ flex: 1, color: '#000' }}
                    dropdownIconColor="#000"
                >
                    <Picker.Item label="ADM" value="ADM" />
                    <Picker.Item label="MONITOR" value="MONITOR" />
                    <Picker.Item label="PILOTO" value="PILOTO" />
                </Picker>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Já tenho conta</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#273A28',
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 60,
        alignSelf: 'center',
        marginTop: 100,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        height: 44,
    },
    button: {
        backgroundColor: '#000',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 4,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 44,
        color: '#000',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    link: {
        color: '#A5A5A5',
        textAlign: 'center',
        marginTop: 16,
    },
});
