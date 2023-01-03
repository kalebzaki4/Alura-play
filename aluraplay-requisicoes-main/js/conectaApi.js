async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    buscaVideo
}