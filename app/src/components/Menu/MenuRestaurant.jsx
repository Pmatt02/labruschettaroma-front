import React from 'react';
import styled from 'styled-components';

const items = [
  { title: 'Ristorante', img: "/imgs/img1.jpg"},
  { title: 'Pizze', img: "/imgs/img1.jpg"},
  { title: 'Pasta fatta in casa', img: "/imgs/img1.jpg"},
  { title: 'Dessert', img: "/imgs/img1.jpg"},
  { title: 'Vini', img: "/imgs/img1.jpg"},
  { title: 'Antipasti', img: "/imgs/img1.jpg"},
  { title: 'Carne', img: "/imgs/img1.jpg"},
  { title: 'Pesce', img: "/imgs/img1.jpg"},
  { title: 'Zuppe', img: "/imgs/img1.jpg"},
];

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
`;

const MenuItem = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &::after {
    content: "${props => props.title}";
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    font-size: 1.2em;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
`;

const MenuRestaurant = () => {
  const handleClick = (title) => {
    alert(`Sei entrato nella pagina di ${title}`);
    // che deve fare poi?
  };

  return (
    <MenuContainer>
      {items.map(item => (
        <MenuItem
          key={item.title}
          title={item.title}
          style={{ backgroundImage: `url(${item.img})` }}
          onClick={() => handleClick(item.title)}
        />
      ))}
    </MenuContainer>
  );
};

export default MenuRestaurant;
