import { CampoNome } from '@/components/DadosCadastrais';
import { estilos } from '@/components/estilos';
import { allgames, populargames } from '@/components/jogos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Link } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Button, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

const chave_perfil = 'perfil_nebulous';

const todosOsJogos = [...populargames, ...allgames];

export default function MeuPerfilScreen() {
    //usestates para os dados do perfil
    const [perfil, setPerfil] = useState<any>(null);
    const [nome, setNome] = useState('');
    const [fotoUri, setFotoUri] = useState('');
    const [abrirCamera, setAbrirCamera] = useState(false);

    //usestate para os jogos
    const [secaoAberta, setSecaoAberta] = useState('');
    const [jogoReview, setJogoReview] = useState<any>(null);
    const [comentario, setComentario] = useState('');

    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView>(null);

    //carregar perfil já salvo
    useEffect(() => {
    async function carregar() {
        try {
        const texto = await AsyncStorage.getItem(chave_perfil);
        if (texto) {
          setPerfil(JSON.parse(texto));
        }
      } catch (erro) {
        console.error('Erro ao carregar perfil:', erro);
      }
    }
    carregar();},[]);

    async function iniciarCamera() {
    if (!permission?.granted) {
        const resposta = await requestPermission();
        if (!resposta.granted) return;
    }
    setAbrirCamera(true);
    }

    async function tirarFoto() {
    const foto = await cameraRef.current?.takePictureAsync();
    if (foto?.uri) {
        setFotoUri(foto.uri);
        setAbrirCamera(false);
    }
    }

    async function escolherDaGaleria() {
    const resultado = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 0.8,
        aspect: [1, 1],
    });
    if (!resultado.canceled && resultado.assets[0]?.uri) {
        setFotoUri(resultado.assets[0].uri);
        setAbrirCamera(false);
    }
    }

  //criar novo perfil
    async function criarPerfil() {
    if (!nome.trim()) return;

    const novoPerfil = {
        nome: nome.trim(),
        fotoUri: fotoUri,
        jogosFavoritos: [],
        jogosPlatinados: [],
        reviews: [],
    };

    try {
        await AsyncStorage.setItem(chave_perfil, JSON.stringify(novoPerfil));
        setPerfil(novoPerfil);
    } catch (erro) {
        console.error('Erro ao salvar perfil:', erro);
    }
  }

  //resetar o perfil com removeitem()
    async function resetarPerfil() {
        try {
            await AsyncStorage.removeItem(chave_perfil);
            setPerfil(null);
            setNome('');
            setFotoUri('');
            setSecaoAberta('');
            setJogoReview(null);
            setComentario('');
    } catch (erro) {
        console.error('Erro ao remover perfil:', erro);
    }
  }

  //adicionar jogos favoritos
    async function adicionarJogo(jogo: any) {
        if (secaoAberta === 'reviews') {
            setJogoReview(jogo);
            setComentario('');
            return;
        }

        const perfilAtualizado = { ...perfil };

        if (secaoAberta === 'favoritos') {
        perfilAtualizado.jogosFavoritos = [...perfil.jogosFavoritos, jogo];
        }

        if (secaoAberta === 'platinas') {
        perfilAtualizado.jogosPlatinados = [...perfil.jogosPlatinados, jogo];
        }

        try {
        await AsyncStorage.setItem(chave_perfil, JSON.stringify(perfilAtualizado));
        setPerfil(perfilAtualizado);
        setSecaoAberta('');
        } catch (erro) {
        console.error('Erro ao adicionar jogo:', erro);
        }
    }

  //salvar reviews
  async function salvarReview() {
    if (!jogoReview || !comentario.trim()) return;

    const novaReview = {
      jogo: jogoReview,
      comentario: comentario.trim(),
    };

    const perfilAtualizado = {
      ...perfil,
      reviews: [...perfil.reviews, novaReview],
    };

    try {
      await AsyncStorage.setItem(chave_perfil, JSON.stringify(perfilAtualizado));
      setPerfil(perfilAtualizado);
      setSecaoAberta('');
      setJogoReview(null);
      setComentario('');
    } catch (erro) {
      console.error('Erro ao salvar review:', erro);
    }
  }

  //tela de cadastro
  if (!perfil) {
    return (
      <ScrollView style={estilos.body} contentContainerStyle={estilos.container}>
        <Text style={estilos.titulo}>Crie seu perfil</Text>

        <View style={estilos.linhaBotoes}>
          <Button title="Tirar foto" onPress={iniciarCamera} />
          <Button title="Galeria" onPress={escolherDaGaleria} />
        </View>

        {abrirCamera && permission?.granted && (
          <View style={estilos.areaCamera}>
            <CameraView ref={cameraRef} style={estilos.camera} />
            <Button title="Capturar foto" onPress={tirarFoto} />
          </View>
        )}

        {fotoUri !== '' && <Image source={{ uri: fotoUri }} style={estilos.preview} />}

        <CampoNome value={nome} onChangeText={setNome} />

        <Pressable style={estilos.button} onPress={criarPerfil}>
          <Text style={estilos.buttonText}>Criar</Text>
        </Pressable>
      </ScrollView>
    );
  }

  //tela de perfil
  return (
    <ScrollView style={estilos.body} contentContainerStyle={estilos.container}>
      {perfil.fotoUri !== '' && (<Image source={{ uri: perfil.fotoUri }} style={estilos.avatar} />)}
      <Text style={estilos.nome}>{perfil.nome}</Text>
      <View style={estilos.secao}>
        <Text style={estilos.secaoTitulo}>Jogos Favoritos</Text>
        <Button title="Adicionar" onPress={() => setSecaoAberta('favoritos')} />

        {secaoAberta === 'favoritos' && (
          <View style={estilos.caixaLista}>
            {todosOsJogos.map((jogo, index) => (
              <Pressable
                key={index}
                style={estilos.itemJogo}
                onPress={() => adicionarJogo(jogo)}
              >
                <Text style={estilos.item}>{jogo.titulo}</Text>
              </Pressable>
            ))}
            <Button title="Cancelar" onPress={() => setSecaoAberta('')} />
          </View>
        )}

        <View style={estilos.linhaCards}>
            {perfil.jogosFavoritos.map((jogo: any, index: number) => (
            <Link key={index} href={`/detalhes/${jogo.id}`} asChild>
            <Pressable style={estilos.card}>
                <Image source={{ uri: jogo.banner }} style={estilos.capa} />
                <Text style={estilos.tituloCard}>{jogo.titulo}</Text>
            </Pressable>
            </Link>
        ))}
        </View>
      </View>
      <View style={estilos.secao}>
        <Text style={estilos.secaoTitulo}>Platinas</Text>
        <Button title="Adicionar" onPress={() => setSecaoAberta('platinas')} />
        {secaoAberta === 'platinas' && (
          <View style={estilos.caixaLista}>
            {todosOsJogos.map((jogo, index) => (
              <Pressable
                key={index}
                style={estilos.itemJogo}
                onPress={() => adicionarJogo(jogo)}
              >
                <Text style={estilos.item}>{jogo.titulo}</Text>
              </Pressable>
            ))}
            <Button title="Cancelar" onPress={() => setSecaoAberta('')} />
          </View>
        )}

        <View style={estilos.linhaCards}>
          {perfil.jogosPlatinados.map((jogo: any, index: number) => (
                <Link key={index} href={`/detalhes/${jogo.id}`} asChild>
      <Pressable style={estilos.card}>
        <Image source={{ uri: jogo.banner }} style={estilos.capa} />
        <Text style={estilos.tituloCard}>{jogo.titulo}</Text>
      </Pressable>
    </Link>

          ))}
        </View>
      </View>

    <View style={estilos.secao}>
        <Text style={estilos.secaoTitulo}>Reviews</Text>
        <Button
          title="Adicionar review"
          onPress={() => {
            setSecaoAberta('reviews');
            setJogoReview(null);
          }}
        />

        {secaoAberta === 'reviews' && !jogoReview && (
          <View style={estilos.caixaLista}>
            {todosOsJogos.map((jogo, index) => (
              <Pressable
                key={index}
                style={estilos.itemJogo}
                onPress={() => adicionarJogo(jogo)}>
                <Text style={estilos.item}>{jogo.titulo}</Text>
              </Pressable>
            ))}
            <Button title="Cancelar" onPress={() => setSecaoAberta('')} />
          </View>
        )}

        {secaoAberta === 'reviews' && jogoReview && (
          <View style={estilos.caixaLista}>
            <Text style={estilos.secaoTitulo}>Review: {jogoReview.titulo}</Text>
            <TextInput
              style={estilos.input}
              placeholder="Escreva seu comentário..."
              placeholderTextColor="#888"
              value={comentario}
              onChangeText={setComentario}
            />
            <Button title="Salvar Review" onPress={salvarReview} />
            <Button title="Cancelar" onPress={() => setSecaoAberta('')} />
          </View>
        )}

        <View style={estilos.listaReviews}>
          {perfil.reviews.map((item: any, index: number) => (
            <View key={index} style={estilos.cardReview}>
              <Image source={{ uri: item.jogo.banner }} style={estilos.capaReview} />
              <View style={estilos.textoReviewBox}>
                <Text style={estilos.tituloCard}>{item.jogo.titulo}</Text>
                <Text style={estilos.textoComentario}>{item.comentario}</Text>
              </View>
            </View>
          ))}
        </View>
        
    </View>

      <Pressable style={estilos.botaoResetar} onPress={resetarPerfil}>
        <Text style={estilos.textoResetar}>Refazer perfil</Text>
      </Pressable>
    </ScrollView>
  );
}
