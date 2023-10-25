import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";

export default function Detalhes ({nome, logoFazenda, nomeFazenda, descricao, preco }) {
    return (
        <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.logoNome}>
        <Image source={logoFazenda} style={estilos.logo} ></Image>
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        </>
    )
}

const estilos = StyleSheet.create({
    nome: {
        fontWeight: 'bold',
        color: "#464646",
        fontSize: 32,
        lineHeight: 42,
    },

    logoNome:{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingVertical: 12
    },

    logo: {
        width: 40,
        height: 40
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },

    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
})