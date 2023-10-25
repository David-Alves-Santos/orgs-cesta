import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";

export default function Botao ({botao}) {
    return (
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.botaoTexto}>{botao}</Texto>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create ({
    botao: {
        marginTop: 15,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,
    },

    botaoTexto: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        lineHeight: 26,
    }
})