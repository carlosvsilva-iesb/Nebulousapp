import { useLocalSearchParams, useRouter } from 'expo-router';
import { populargames, allgames } from '@/components/jogos';
import { Image, Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { estilos } from '@/components/estilos';

export default function DetalhesScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();

  const todosOsJogos = [...populargames, ...allgames];
  const jogo = todosOsJogos.find((g) => String(g.id) === String(id));

  if (!jogo) {
    return (
      <View style={estilos.body}>
        <Text style={estilos.sinopse}>Jogo não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={estilos.body}>
      <View
        style={[
          estilos.container,
          {
            marginLeft: width > 500 ? '20%' : 20,
            marginRight: width > 500 ? '20%' : 20,
            marginTop: width > 500 ? '6%' : 40,
          },
        ]}
      >
        <Pressable onPress={() => router.back()} style={estilos.botaoVoltar}>
          <Text style={estilos.textoVoltar}>← Voltar</Text>
        </Pressable>

        <View
          style={[
            estilos.conteudoPrincipal,
            { flexDirection: width > 500 ? 'row' : 'column' },
          ]}
        >
          <Image
            source={{ uri: jogo.banner }}
            style={[
              estilos.banner,
              {
                width: width > 500 ? 240 : 200,
                height: width > 500 ? 340 : 285,
                alignSelf: width > 500 ? 'flex-start' : 'center',
              },
            ]}
          />
          <View style={estilos.infoColuna}>
            <Text style={estilos.titulo}>{jogo.titulo}</Text>

            <View style={estilos.generoBloco}>
              <Text style={estilos.generoTexto}>{jogo.genero}</Text>
            </View>

            <Text style={estilos.subtitulo}>Sinopse</Text>
            <Text style={estilos.sinopse}>{jogo.sinopse}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
