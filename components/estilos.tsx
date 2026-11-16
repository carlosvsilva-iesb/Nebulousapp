import { StyleSheet } from "react-native"

export const estilos = StyleSheet.create({
//estilos do index   
    bannerprincipal: {
        width: '100%',
        height: 220,
        maxHeight: 300,
    },
    body: {
        backgroundColor: '#1a1c20',
        flex: 1,
        width: '100%',
    },
    homeimages: {
        width: 470,
        height: 270,
        borderRadius: 8,
        borderColor: '#FFFFFF'
        },
    secaoLinha: {
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 30,
        marginVertical: 20,
        width: '100%',
        alignSelf: 'center',
        },
    colunaTexto: {
        flex: 1,
    },
    textContainer: {
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '10%',
    },
    textStyle: {
        color: '#a0a0a0',
        fontSize: 24,
        fontFamily: 'sans-serif',
    },
    title: {
        color: '#394ae0',
        fontSize: 80,
        fontWeight: 'bold',
        marginTop: -30,
    },
    subtitle: {
        color: '#394ae0',
        fontSize: 24,
        marginTop: -10,
        paddingBottom: 30,
    },
    h2sub: {
        color: '#394ae0',
        fontSize: 28,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        paddingTop: 20,
    },
    listText: {
        color: '#394ae0',
        fontSize: 24,
        paddingBottom: 10,
    },
//estilos para campo de formulário e botões
    containerForm: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1c20'
    },
    formCampo: {
        backgroundColor: '#23313E',
        borderColor: '#56616E',
        color: '#ffffff',
        borderWidth: 2,
        borderRadius: 8,
        width: '80%',
        maxWidth: 400,
        height: 50,
        padding: 5,
        margin: 5,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#394ae0',
        width: '80%',
        maxWidth: 400,
        height: 50,
        margin: 5,
        padding: 5,
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
    },
    campoAtivo: {
        backgroundColor: '#548fc5',
        borderColor: '#56616E',
    },
//estilos dos cards (tela inicial)
    bannerCard: {
        width: 170,
        maxWidth: 170,
        height: 240,
        marginRight: 10,
        borderRadius: 8,
        resizeMode: 'cover',
    },
//estilos do perfil
    container: {
        padding: 24,
        gap: 18,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    titulo: {
        color: '#394ae0',
        fontSize: 28,
        fontWeight: 'bold' 
    },
    aviso: {
        color: '#ccc', 
        fontSize: 16, 
        textAlign: 'center',
        marginTop: 40 
    },
    input: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#25272b',
        color: '#fff',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
    },
    linhaBotoes: {
        flexDirection: 'row',
        gap: 12 
    },
    areaCamera: {
        width: '100%',
        maxWidth: 320,
        gap: 10,
        alignItems: 'center'
    },
    camera: {
        width: 240,
        height: 240,
        borderRadius: 12,
        overflow: 'hidden'
    },
    preview: {
        width: 130,
        height: 130,
        borderRadius: 65
    },
    botaoCriar: {
        backgroundColor: '#394ae0',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 65
    },
    nome: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    secao: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: '#25272b',
        padding: 16,
        borderRadius: 10,
        gap: 6,
    },
    secaoTitulo:{
        color: '#394ae0',
        fontSize: 18,
        fontWeight: 'bold'
    },
    item: {
        color: '#ddd',
        fontSize: 15
    },
    botaoResetar: {
        marginTop: 8,
        padding: 10
    },
    textoResetar: {
        color: '#a0a0a0',
        fontSize: 14
    },
//cards do perfil
    caixaLista: {
        backgroundColor: '#212129',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        gap: 8,
    },
    itemJogo: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    inputcard: {
        backgroundColor: '#25272b',
        color: '#fff',
        padding: 10,
        borderRadius: 6,
    },
    linhaCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 10,
    },
    card: {
        width: 100,
        backgroundColor: '#1e1f1f',
        borderRadius: 8,
        padding: 6,
    },
    capa: {
        width: '100%',
        height: 130,
        borderRadius: 6,
    },
    tituloCard: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 4,
    },
    listaReviews: {
        gap: 10,
        marginTop: 10,
    },
    cardReview: {
        flexDirection: 'row',
        backgroundColor: '#1e1f1f',
        borderRadius: 8,
        padding: 8,
        gap: 10,
        alignItems: 'center',
    },
    capaReview: {
        width: 60,
        height: 85,
        borderRadius: 8,
    },
    textoReviewBox: {
        flex: 1,
    },
    textoComentario: {
        color: '#ccc',
        fontSize: 13,
        marginTop: 4,
    },
//estilos dos detalhes (id)
    bodyid: {
        backgroundColor: '#1a1c20',
        flex: 1,
        width: '100%',
    },
    containerid: {
        marginBottom: 40,
    },
    botaoVoltar: {
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    textoVoltar: {
        color: '#394ae0',
        fontSize: 16,
        fontWeight: 'bold',
    },
    conteudoPrincipal: {
        gap: 28,
        alignItems: 'flex-start',
    },
    banner: {
        borderRadius: 10,
        resizeMode: 'cover',
    },
    infoColuna: {
        flex: 1,
    },
    tituloid: {
        color: '#394ae0',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    generoBloco: {
        backgroundColor: '#2c2e33',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    generoTexto: {
        color: '#d0d0d0',
        fontSize: 14,
    },
    subtitulo: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    sinopse: {
        color: '#a0a0a0',
        fontSize: 17,
        lineHeight: 26,
    },
})
