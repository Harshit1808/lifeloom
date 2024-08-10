// import React, { useState } from 'react';

// const ImageGallery = ({ imagesPerPage, images }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastImage = currentPage * imagesPerPage;
//   const indexOfFirstImage = indexOfLastImage - imagesPerPage;
//   const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="image-gallery">
//       {currentImages.map((image, index) => (
//         <div key={index} className="image-container">
//           <img src={image.url} alt={image.alt} />
//         </div>
//       ))}
//       <div className="pagination">
//         {Array.from({ length: Math.ceil(images.length / imagesPerPage) }).map((_, index) => (
//           <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Example usage
// const images = [
//   { url: '../Pawna.jpeg', alt: 'Image 1' },
//   { url: '../Pawna.jpeg', alt: 'Image 2' },
//   { url: '../Pawna.jpeg', alt: 'Image 3' },
//   // Add more images as needed
// ];

// const App = () => {
//   return (
//     <div className="app">
//       <h1>Image Gallery</h1>
//       <ImageGallery imagesPerPage={3} images={images} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextSlide = () => {
    setCurrentPage(currentPage === images.length - 1 ? 0 : currentPage + 1);
  };

  const prevSlide = () => {
    setCurrentPage(currentPage === 0 ? images.length - 1 : currentPage - 1);
  };

  return (
    <div className="image-slider" style={{display:"flex"}}>
      <div
        className="image-container"
        style={{ height:"400px", width:"850px", backgroundImage: `url(${images[currentPage].url})` }}
      >
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <button style={{marginTop:"150px"}} className="prev" onClick={prevSlide}>&#10094;</button>
        <button style={{marginTop:"150px"}}  className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
      <div style={{marginLeft:"3px"}}>
      <div style={{ marginBottom:"3px",height:"135px", width:"280px", backgroundImage:`url('../hero.jpeg')` }}>
      </div>
      <div style={{ marginBottom:"3px",height:"125px", width:"280px", backgroundImage:`url('../Pawna.jpeg')` }}>
      </div>
      <div style={{ height:"135px", width:"280px", backgroundImage:`url('../hero.jpeg')`}}>
      </div>
      </div>
    </div>
  );
};

// Example usage
const images = [
  { url: '../Pawna.jpeg', alt: 'Image 1' },
  { url: '../hero.jpeg', alt: 'Image 2' },
  { url: '../Pawna.jpeg', alt: 'Image 3' },
  // Add more images as needed
];

const App = () => {
  return (
    <>
    <div className="app" style={{marginLeft:"5vw", marginRight:"5vw"}}>
      <h1>Image Slider</h1>
      <ImageSlider images={images} />
    </div>
    <h2 style={{marginLeft:"5vw"}}>Trek of exotic nature to Khandala</h2>
    </>
  );
};

export default App;



