import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const zonas = {
    'Zona Combustão 1': [
        true, false, true, false,
        true, true, false, false,
        true, false, true, false,
        true, true, false, false,
    ],
    'Zona Elétrica': [
        false, false, true, true,
        false, true, false, true,
        false, true, false, true,
        false, false, true, true,
    ],
    'Zona Combustão 2': [
        true, true, false, false,
        true, false, true, false,
        true, false, true, false,
        true, false, true, false,
    ],
};

export default function DashboardScreen({ navigation }) {
    const [zonaSelecionada, setZonaSelecionada] = useState('Zona Combustão 1');

    const vagas = zonas[zonaSelecionada];

    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    const renderVaga = ({ item }) => (
        <View style={styles.vaga}>
            {item ? (
                <Image source={require('../assets/MotoZC1.png')} style={styles.motoIcon} />
            ) : (
                <Feather name="plus" size={28} color="#aaa" />
            )}
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.zonaSelector}>
                {Object.keys(zonas).map((zona) => (
                    <TouchableOpacity
                        key={zona}
                        onPress={() => setZonaSelecionada(zona)}
                        style={[
                            styles.zonaButton,
                            zonaSelecionada === zona && styles.zonaButtonAtivo,
                        ]}
                    >
                        <Text
                            style={[
                                styles.zonaButtonText,
                                zonaSelecionada === zona && styles.zonaButtonTextAtivo,
                            ]}
                        >
                            {zona}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.zonaBox}>
                <Text style={styles.zonaText}>{zonaSelecionada}</Text>
            </View>

            <FlatList
                data={vagas}
                renderItem={renderVaga}
                keyExtractor={(_, index) => index.toString()}
                numColumns={4}
                contentContainerStyle={styles.vagasContainer}
                scrollEnabled={false}
            />

            <ScrollView style={styles.descricaoContainer}>
                <Text style={styles.descricaoText}>Mottu</Text>
                <Text style={styles.descricaoText}>
                    Ocupadas: {vagas.filter(v => v).length} | Livres: {vagas.filter(v => !v).length}
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#273A28',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 16,
        fontWeight: 'bold',
    },
    zonaSelector: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    zonaButton: {
        paddingVertical: 6,
        paddingHorizontal: 5,
        borderRadius: 8,
        backgroundColor: '#364732',
    },
    zonaButtonAtivo: {
        backgroundColor: '#4CAF50',
    },
    zonaButtonText: {
        color: '#ccc',
        fontSize: 14,
    },
    zonaButtonTextAtivo: {
        color: '#fff',
        fontWeight: 'bold',
    },
    zonaBox: {
        backgroundColor: '#182615',
        height: 100,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    zonaText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    vagasContainer: {
        justifyContent: 'center',
        marginBottom: 20,
    },
    vaga: {
        backgroundColor: '#364732',
        width: 70,
        height: 70,
        margin: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    motoIcon: {
        width: 40,
        height: 40,
        tintColor: '#fff',
    },
    descricaoContainer: {
        marginTop: 0,
        paddingTop: 0,
        flex: 0,
    },

    descricaoText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 4,
    },
});
