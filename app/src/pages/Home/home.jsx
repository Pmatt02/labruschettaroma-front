import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Gallery from '../../components/Gallery/Gallery';
import Image from '../../components/Image/Image';

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
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

  const handleNavigate = () => {
    navigate('/contatti');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  return (
    <div className='page'>
      <div className='gallery'>
        <div className='title' style={{ transform: `translateX(-${scrollPosition * 0.3}px)` }}>
          <h1>LA BRUSCHETTA ROMA</h1>
          <button className='cta' onClick={handleNavigate}> Prenota ora</button>
        </div>
        <img className='imgs' src="/imgs/img1.jpg" alt="pizzaImg" />
      </div>
      
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>

      <div className='galleryHome'>
        <Gallery imageLinks={imageLinks} />
        <Image imageLink={'/imgs/img1.jpg'} />
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure impedit, voluptatum neque accusamus tempora expedita ipsa obcaecati aspernatur labore molestias repudiandae minima quaerat id ipsam, animi suscipit quae quo!
      </div>
    </div>
  );
}

export default Home;
