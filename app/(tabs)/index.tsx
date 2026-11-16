import { estilos } from '@/components/estilos';
import { populargames } from '@/components/jogos';
import { Link, router } from 'expo-router';
import * as React from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, useWindowDimensions, View } from 'react-native';

export default function HomeScreen() {

const { width } = useWindowDimensions();

return (
  <ScrollView style={estilos.body}>
    
    <Image style={estilos.bannerprincipal} source={require('../../assets/images/bannerprin.jpg')}/>
    <View style={estilos.textContainer}>

      <Text style={estilos.title} numberOfLines={1} adjustsFontSizeToFit>Nebulous</Text>
      <Text style={estilos.subtitle}>comente sobre seus jogos favoritos.</Text>

      <View>
      <Text style={estilos.listText}>Populares</Text>

      <FlatList
      key={width > 500 ? 'grid' : 'linha'}
      data={populargames}
      horizontal={width <= 500}
      numColumns={width > 500 ? 6 : 1}
      renderItem={({ item }) => (
      <Link href={`/detalhes/${item.id}`}>
        <Image source={{ uri: item.banner }} style={estilos.bannerCard} />
      </Link>
      )}
      keyExtractor={(item) => item.id}/>
      </View>
      
      <Text style={estilos.h2sub}>O que é o Nebulous?</Text>

      <Text style={estilos.textStyle}>Nebulous é uma plataforma para mostrar sua coleção de jogos, platinas, e reviews de games.</Text>

      <View style={[estilos.secaoLinha, { flexDirection: width > 500 ? 'row-reverse' : 'column' },]}
>
  <View style={estilos.colunaTexto}>
    <Text style={estilos.h2sub}>Faça suas reviews.</Text>
    <Text style={estilos.textStyle}>
      Publique avaliações sobre o que você jogou recentemente.
    </Text>
  </View>

  <Image
    style={[
      estilos.homeimages,
      {
        width: width > 500 ? 470 : width - 32,
        height: width > 500 ? 270 : 200,
      },
    ]}
    source={require('../../assets/images/bigboss.jpg')}
  />
      </View>
  <View style={[estilos.secaoLinha,{ flexDirection: width > 500 ? 'row' : 'column' },]}>
    <View style={estilos.colunaTexto}>
      <Text style={estilos.h2sub}>Exiba suas conquistas.</Text>
      <Text style={estilos.textStyle}>Exiba suas platinas para mostrar suas maiores conquistas.</Text>
    </View>
    <Image
    style={[
      estilos.homeimages,
      {
        width: width > 500 ? 470 : width - 32,
        height: width > 500 ? 270 : 200,
      },
    ]}
    source={require('../../assets/images/ps4info.jpg')}/>
  </View>

  <View style={[estilos.secaoLinha,{ flexDirection: width > 500 ? 'row-reverse' : 'column' },]}>
    <View style={estilos.colunaTexto}>
      <Text style={estilos.h2sub}>Registre momentos</Text>
      <Text style={estilos.textStyle}>Crie um perfil simples para compatilhar suas opiniões e jogos favoritos.</Text>
    </View>
  <Image
    style={[
      estilos.homeimages,
      {
        width: width > 500 ? 470 : width - 32,
        height: width > 500 ? 270 : 200,
      },
    ]}
    source={require('../../assets/images/leonmatadordegalo.jpg')}/>
  </View>
    </View>
    <Pressable
  style={estilos.button}
  onPress={() => router.push('/meuperfil')}
>
  <Text style={estilos.buttonText}>Meu Perfil</Text>
</Pressable>
  </ScrollView>  
  );
}
