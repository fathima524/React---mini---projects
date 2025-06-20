import React from "react";
import Header from './Header';
import Body from './Body';
import mount from './assets/mount-fuji.jpg';
import canyon from './assets/grand canyon.jpg'
import machu from './assets/machu pichu.jpg'
import matterhorn from './assets/matterhorn.jpg'
import mahal from './assets/taj mahal.jpg'
const places = [
  {
    id: 1,
    img: mount, // Already imported
    alt: "Mount Fuji",
    h1: "Mount Fuji",
    date: "12/10/2025",
    p: "Japan’s Mt. Fuji is an active volcano and the country’s tallest peak. A sacred mountain and popular hiking destination, it’s famed for its near-perfect cone shape and artistic inspiration."
  },
  {
    id: 2,
    img :canyon,
    alt: "Grand Canyon",
    h1: "Grand Canyon",
    date: "03/04/2024",
    p: "Carved by the Colorado River in Arizona, USA, the Grand Canyon is a massive geological wonder known for its colorful rock layers and breathtaking views across steep cliffs and deep valleys."
  },
  {
    id: 3,
    img: machu,
    alt: "Machu Picchu",
    h1: "Machu Picchu",
    date: "20/05/2023",
    p: "Located in Peru, Machu Picchu is an ancient Incan city set high in the Andes Mountains. It's known for its dry-stone construction, mysterious history, and panoramic mountain backdrop."
  },

  {
    id: 5,
    img: mahal,
    alt: "Taj Mahal",
    h1: "Taj Mahal",
    date: "15/08/2025",
    p: "An ivory-white marble mausoleum in Agra, India, the Taj Mahal is a symbol of love built by Emperor Shah Jahan. It's an architectural masterpiece and a UNESCO World Heritage site."
  },
  {
    id: 6,
    img: matterhorn,
    alt: "Matterhorn",
    h1: "Matterhorn",
    date: "30/09/2024",
    p: "The Matterhorn is a dramatic, pyramid-shaped peak in the Alps, straddling the border of Switzerland and Italy. It's a favorite among climbers and featured on Toblerone chocolate packaging."
  }
];


function App() {
  return (
    <>
      <Header />
      <div className="Body">
        {places.map(place => (
          <Body 
            key={place.id}
            img={place.img}
            alt={place.alt}
            h1={place.h1}
            date={place.date}
            p={place.p}
          />
        ))}
      </div>
    </>
  );
}

export default App;
