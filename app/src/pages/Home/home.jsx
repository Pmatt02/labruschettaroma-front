import React from 'react';
import './home.css';
import Gallery from '../../components/Gallery/Gallery';
import Image from '../../components/Image/Image';

function Home() {
  const imageLinks = [
    'https://via.placeholder.com/600/92c952',
    'https://via.placeholder.com/600/771796',
    'https://via.placeholder.com/600/24f355',
    'https://via.placeholder.com/600/d32776',
    'https://via.placeholder.com/600/f66b97',
    'https://via.placeholder.com/600/56a8c2',
    'https://via.placeholder.com/600/b0f7cc',
    'https://via.placeholder.com/600/54176f',
  ];

  return (
    <div className='page'>

      <div className='title'>
        <h1 className='txt'>
          LA BRUSCHETTA
          <br />
          ROMA
        </h1>

        <h4 className='txt'>
          Dal 1928
          <br />
          LA TRADIZIONE DI PIATTI SEMPLICI E FRESCHI
          <br />
          TRAMANDATI DI PADRE IN FIGLIO
        </h4>
        
        <p className='txt'>
          Dal lunedì alla domenica
        </p>
        
        <a className="ctaPrenota" href="/contatti">Prenota ora</a>
      </div>
      <div className='gallery'>
        <img className='imgs' src="/imgs/img1.jpg" alt="pizzaImg" />
      </div>

      <div className='galleryHome'>
        <Gallery imageLinks={imageLinks}/>
        <Image imageLink={'/imgs/img1.jpg'} />
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
    </div>
  );
}

export default Home;
