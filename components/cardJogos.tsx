import React from 'react';
import { Image, View, Pressable } from 'react-native';
import { estilos } from './estilos';

type CardJogoProps = {
  titulo: string;
  genero: string;
  banner?: string;
  onPress?: () => void;
};

export function CardJogo({ titulo, genero, banner, onPress }: CardJogoProps) {
  return (
    <Pressable onPress={onPress}>
    <View>
      <Image source={{ uri: banner }} style={estilos.bannerCard} />
      {titulo}
      {genero}
    </View>
    </Pressable>
)
};