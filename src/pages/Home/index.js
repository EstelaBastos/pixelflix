import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../PageDefault';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription="Sam quer ser desenvolvedora de jogos, mas antes que sua carreira possa começar, um famoso streamer publica um vídeo dele jogando seu primeiro jogo e faz uma crítica ruim. Para piorar a situação, ela logo descobre que ele é seu novo vizinho! Uma história sobre jogos, memes e ansiedade social!"
        url={dadosIniciais.categorias[0].videos[0].url}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      <Carousel category={dadosIniciais.categorias[5]} />
    </PageDefault>
  );
}

export default Home;
