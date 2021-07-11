import  Icon  from "react-native-vector-icons/Fontisto";
import React, { Component } from "react";


export default function CustomIcon({name,color,size}) {
    return <Icon name={name} color={color} size={size} />
}