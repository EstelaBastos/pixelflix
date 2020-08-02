import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../PageDefault';
import categoriesRepository from '../../repositories/categories.js';

function Home() {
  const [initialData, setInitialData] = useState([]);
  useEffect(() => {
    categoriesRepository.getAllCategoriesWithVideos().then((categories) => {
      setInitialData([...categories]);
    }).catch((error) => console.log(error.message));
  }, []);
  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {
        initialData.map((category, index) => {
          if (index === 0) {
            return (
              <React.Fragment key={category.id}>
                <BannerMain
                  videoTitle={initialData[index].videos[0].name}
                  videoDescription="Sam quer ser desenvolvedora de jogos, mas antes que sua carreira possa começar, um famoso streamer publica um vídeo dele jogando seu primeiro jogo e faz uma crítica ruim. Para piorar a situação, ela logo descobre que ele é seu novo vizinho! Uma história sobre jogos, memes e ansiedade social!"
                  url={initialData[index].videos[0].url}
                />
                <Carousel ignoreFirstVideo category={category} />
              </React.Fragment>
            );
          }
          return (<Carousel category={category} key={category.id} />);
        })
      }
    </PageDefault>
  );
}

export default Home;
