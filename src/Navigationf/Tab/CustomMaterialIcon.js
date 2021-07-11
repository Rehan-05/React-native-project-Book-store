import React, { Component } from 'react'
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

export default function CustomMaterialIcon({name,color,size}) {
    return <Icon name={name} color={color} size={size} />
}
