import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function SobreScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>

            <Image source={require('../assets/Logo.png')} style={styles.logo} />

            <Text style={styles.appName}>HEIMDALL</Text>
            <Text style={styles.version}>Versão 1.0.0</Text>

            <Text style={styles.sectionTitle}>Sobre o Aplicativo</Text>
            <Text style={styles.paragraph}>
                O HEIMDALL é um sistema interno desenvolvido pela equipe de logística da MontClio para facilitar a localização e monitoramento de motos dentro dos pátios da Mottu.
                Com o uso de tecnologias como IoT e RFID, o app organiza visualmente zonas e modelos de motos em tempo real, otimizando tempo e produtividade.
            </Text>

            <Text style={styles.sectionTitle}>Equipe de Desenvolvimento</Text>
            <Text style={styles.paragraph}>• Pedro Lima - Leonardo – UX/UI Designer</Text>
            <Text style={styles.paragraph}>• Pedro Lima – Mobile Developer</Text>
            <Text style={styles.paragraph}>• Pedro Lima - Vitor Gomes– Arquiteto de Software</Text>
            <Text style={styles.paragraph}>• MontClio Tecnologia</Text>

            <Text style={styles.sectionTitle}>Contato</Text>
            <Text style={styles.paragraph}>Em caso de dúvidas, entre em contato pelo e-mail:</Text>
            <Text style={styles.email}>montclio.br@gmail.com</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#273A28',
    },
    content: {
        padding: 24,
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 16,
    },
    appName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    version: {
        fontSize: 14,
        color: '#A5A5A5',
        marginBottom: 24,
    },
    sectionTitle: {
        alignSelf: 'flex-start',
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 8,
    },
    paragraph: {
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#ccc',
        marginBottom: 8,
    },
    email: {
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: 'bold',
        marginTop: 4,
    },
});
