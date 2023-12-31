import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo ({titulo}) {
    return(
        <>
        <Image source={topo} style={estilos.topo}></Image>
       <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },

    titulo: {
        width: "100%",
        position: "absolute",
        top: 20,
        textAlign: "center",
        fontSize: 26,
        color: "white",
        fontWeight: "bold",
        padding: 26,
    },

})