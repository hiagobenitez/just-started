import React from 'react';
import * as S from './styles';

function HomeLayout() {
  return (
    <S.Container>
      <img
        className="ImageHome"
        src="./ImageHome.png"
        alt="Background Castanhas Ouro Verde"
      />

      <div className="content">
        <div className="LogoCastanhas">
          <img
            className="Logo"
            src="./LOGO.svg"
            alt="Image da Logo castanhas ouro verde"
          />
        </div>

        <h1>Saiba com qual missão viemos parar aqui.</h1>
        <p>
          Garantir um alimento saudável, acessível e de boa qualidade a todos os
          seus consumidores e garantir sempre a credibilidade crescente do seu
          produto, visando a participação e a rentabilidade no mercado global,
          respeitando o meio ambiente, a vida e o direito do consumidor na
          sociedade.
        </p>

        <img
          className="ImageHome"
          src="./Mapa.svg"
          alt="Image do mapa de exportação de castanhas para todo o Brasil"
        />

        <h1>Nosso Processo Produtivo</h1>
        <div className="LogoCastanhas">
          <img
            className="CastanhaProdutivo"
            src="./Castanha.png"
            alt="Image do mapa de exportação de castanhas para todo o Brasil"
          />
        </div>
        <p>
          Ao todo são 10 etapas que vão começando pelo beneficiamento da
          castanha, passando por etapas de processamento, secagem, quebra entre
          outras finalizando no embalo para envio. Veja todo o processo
          explicado no vídeo abaixo.
        </p>

        <img
          className="ImageHome"
          src="./video.svg"
          alt="Background Castanhas Ouro Verde"
        />

        <h2>confira algumas imagens</h2>

        <img
          className="ImageHome"
          src="./fotoModelo.jpg"
          alt="Background Castanhas Ouro Verde"
        />

        <h2>selos e certificados</h2>

        <img
          className="ImageHome"
          src="./Ministerio.png"
          alt="Background Castanhas Ouro Verde"
        />

        <h2>DIFERENCIAIS</h2>
        <div className="Cards">
          <div className="card">
            <img className="IconCard" src="IconCard.svg" alt="Icon dos Cards" />
            <h4 className="textCard">
              Veganos e <br />
              Vegetarianos
            </h4>
          </div>
          {/*  */}
          <div className="card">
            <img className="IconCard" src="IconCard.svg" alt="Icon dos Cards" />
            <h4 className="textCard">
              Fonte de <br /> Selênio
            </h4>
          </div>
          {/*  */}
          <div className="card">
            <img className="IconCard" src="IconCard.svg" alt="Icon dos Cards" />
            <h4 className="textCard">
              Antioxidante <br /> Natural
            </h4>
          </div>
          {/*  */}
          <div className="card">
            <img className="IconCard" src="IconCard.svg" alt="Icon dos Cards" />
            <h4 className="textCard">
              Não Contém <br /> Glúten
            </h4>
          </div>
          {/*  */}
          <div className="card">
            <img className="IconCard" src="IconCard.svg" alt="Icon dos Cards" />
            <h4 className="textCard">
              Rico em Gorduras
              <br /> Monoinsaturadas
            </h4>
          </div>
          {/*  */}
        </div>

        {/*  */}
      </div>
      {/*  */}

      <div className="Footer">
        <img
          className="ImageHome"
          src="./Footer.png"
          alt="Background Castanhas Ouro Verde"
        />
      </div>
    </S.Container>
  );
}
export default HomeLayout;
