async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    console.log(conexao)
}

listaVideos()