import React from "react";
import Texto from "../../../componentes/Texto";
import { Image, StyleSheet, View } from "react-native";


export default function Item ({item: {nome, imagem}}) {

    return <View key={nome} style={estilos.item}>
            <Image source={imagem} style={estilos.imagem} />
            <Texto style={estilos.nome} >{nome}</Texto>
        </View>
    }

const estilos = StyleSheet.create ({

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        gap: 20,
        paddingVertical: 16,
        marginHorizontal: 16
    },

    imagem: {
        width: 46,
        height: 46
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        color: '#464646'
    }
})