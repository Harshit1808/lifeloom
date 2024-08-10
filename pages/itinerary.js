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
import Navbar from '../src/components/navbar';
import Accordion from '../src/components/accordion';
import AccordionTransport from '../src/components/accordionTransport';
import Checkbox from '../src/components/checkbox';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import CommuteIcon from '@mui/icons-material/Commute';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import BungalowIcon from '@mui/icons-material/Bungalow';
import Input from '../src/components/input';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

const ImageSlider = ({ images }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const nextSlide = () => {
        setCurrentPage(currentPage === images.length - 1 ? 0 : currentPage + 1);
    };

    const prevSlide = () => {
        setCurrentPage(currentPage === 0 ? images.length - 1 : currentPage - 1);
    };

    return (
        <div className="image-slider" style={{ display: "flex" }}>
            <div
                className="image-container"
                style={{ height: "400px", width: "850px", backgroundImage: `url(${images[currentPage].url})` }}
            >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button style={{ marginTop: "200px" }} className="prev" onClick={prevSlide}>&#10094;</button>
                    <button style={{ marginTop: "200px" }} className="next" onClick={nextSlide}>&#10095;</button>
                </div>
            </div>
            <div style={{ marginLeft: "3px" }}>
                <div style={{ marginBottom: "3px", height: "135px", width: "280px", backgroundImage: `url('../hero.jpeg')` }}>
                </div>
                <div style={{ marginBottom: "3px", height: "125px", width: "280px", backgroundImage: `url('../Pawna.jpeg')` }}>
                </div>
                <div style={{ height: "135px", width: "280px", backgroundImage: `url('../hero.jpeg')` }}>
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

const data = [
    { gender: 'Male', age: 30 },
    { gender: 'Female', age: 25 },
    { gender: 'Male', age: 35 },
    { gender: 'Female', age: 28 },
    { gender: 'Female', age: 28 },
];

// const dataIncExc = [
//     { inclusions: 'Feature 1', exclusions: 'Exception 1' },
//     { inclusions: 'Feature 2', exclusions: 'Exception 2' },
//     { inclusions: 'Feature 3', exclusions: 'Exception 3' },
//     { inclusions: 'Feature 4', exclusions: 'Exception 4' },
// ];

const App = () => {

    const router = useRouter();
    const { tripId } = router.query;
    console.log("id", tripId);

    const [trips, setTrips] = useState([]);

    useEffect(() => {
       getTrips();
    }, []);

    const getTrips = async () => {
        try {
            //const response = await axios.get('http://localhost:6060/website/all-website-trips');
            const response = await axios.get('http://13.127.108.60:6060/website/all-website-trips');
            console.log(response.data);
            setTrips(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // Filter trips based on the id parameter
    const filteredTrips = trips.filter(trip => trip.id === tripId);

    const selectedTrip = filteredTrips[0];
    console.log("selectedTrip",selectedTrip);



    const [value, setValue] = useState(0);
    const [doubleValue, setDoubleValue] = useState(0);
    const [tripleValue, setTripleValue] = useState(0);

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const decrement = () => {
        setValue(prevValue => prevValue - 1);
    };

    const doubleIncrement = () => {
        setDoubleValue(prevValue => prevValue + 1);
    }

    const doubleDecrement = () => {
        setDoubleValue(prevValue => prevValue - 1);
    }

    const tripleIncrement = () => {
        setTripleValue(prevValue => prevValue + 1);
    }

    const tripleDecrement = () => {
        setTripleValue(prevValue => prevValue - 1);
    }

    const [travelers, setTravelers] = useState([{ name: '', sex: '', age: '' }]);



    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newTravelers = [...travelers];
        newTravelers[index][name] = value;
        setTravelers(newTravelers);
    };

    const addTraveler = () => {
        setTravelers([...travelers, { name: '', sex: '', age: '' }]);
    };

    const removeTraveler = (indexToRemove) => {
        setTravelers(travelers.filter((_, index) => index !== indexToRemove));
    };
    console.log("trvel.. 33", travelers);
    const maxFormsPerRow = 2;
    const rows = [];
    for (let i = 0; i < travelers.length; i += maxFormsPerRow) {
        rows.push(travelers.slice(i, i + maxFormsPerRow));
    }

    const [showInclusions, setShowInclusions] = useState(true);

    const dataIncExc = [
        { inclusions: selectedTrip?.inclusions, exclusions: selectedTrip?.exclusions },
        // Add more data as needed
    ];

    const points = showInclusions ? dataIncExc[0].inclusions : dataIncExc[0].exclusions;
    return (
        <>
        {selectedTrip? ( <div>
            <div>
                <div style={{ position: 'fixed', width: "100%", marginTop: "0px" }}>
                    <Navbar />
                </div>
                <div className="app" style={{ marginLeft: "5vw", marginRight: "5vw", paddingTop: "60px", width:"89%" }}>
                    <h1>  </h1>
                    <ImageSlider images={images} />
                </div>
                <h2 style={{ marginLeft: "5vw" }}>{selectedTrip.name}</h2>
                <div style={{ marginLeft: "5vw", marginRight: "5vw", background: "#0EC3EB", color: "white", borderRadius: "5px", padding: "3px", width:"89%" }}>Note: {selectedTrip.uspNote} </div>
                <div style={{ display: "flex" }}>
                    {selectedTrip.addFacilities.includes("Stay") ?<div style={{ textAlign: "center" }}>
                        <LocalHotelIcon style={{ marginLeft: "5vw", marginTop: "5px", color: "black" }} />
                        <div style={{ marginLeft: "5vw" }}>Accomodation</div>
                    </div> : null}
                    {selectedTrip.addFacilities.includes("Transport") ? <div style={{ textAlign: "center" }}>
                        <CommuteIcon style={{ marginLeft: "3vw", marginTop: "5px", color: "black" }} />
                        <div style={{ marginLeft: "3vw" }}>Transportation</div>
                    </div>: null}
                    {selectedTrip.addFacilities.includes("Food") ?<div style={{ textAlign: "center" }}>
                        <RiceBowlIcon style={{ marginLeft: "3vw", marginTop: "5px", color: "black" }} />
                        <div style={{ marginLeft: "3vw" }}>Meals</div>
                    </div> : null}
                    {selectedTrip.addFacilities.includes("Sightseeing") ?<div style={{ textAlign: "center" }}>
                        <BungalowIcon style={{ marginLeft: "3vw", marginTop: "5px", color: "black" }} />
                        <div style={{ marginLeft: "3vw" }}>Sightseeing</div>
                    </div>: null}
                </div>
                <div style={{ marginTop: "7px", marginLeft: "5vw", marginRight: "5vw", background: "#0EC3EB", color: "white", borderRadius: "5px", padding: "3px", width: "89%" }}>Overview:{selectedTrip.description}</div>
                <h3 style={{ marginLeft: "5vw" }}>ITINERARY</h3>
                <Accordion
                eachDayDetails={selectedTrip.itineraries}
                />
            </div>
            <h3 style={{ marginLeft: "5vw" }}>Know your Tripmates</h3>
            {/* <table style={{ borderCollapse: 'collapse', width: '79%', marginLeft: "5vw", marginRight: "5vw" }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2', padding: '8px' }}>Gender</th>
                        <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2', padding: '8px' }}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px', textAlign: "center" }}>{item.gender}</td>
                            <td style={{ border: '1px solid black', padding: '8px', textAlign: "center" }}>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <table style={{ borderCollapse: 'collapse', width: '89%', marginLeft: "5vw", marginRight: "5vw", border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid black', backgroundColor: '#f2f2f2', padding: '8px' }}>Gender</th>
                        <th style={{ borderRight: '1px solid black', borderBottom: '1px solid black', backgroundColor: '#f2f2f2', padding: '8px' }}>Age</th>
                        <th style={{ borderBottom: '1px solid black', backgroundColor: '#f2f2f2', padding: '8px' }}>Gender</th>
                        <th style={{ borderBottom: '1px solid black', backgroundColor: '#f2f2f2', padding: '8px' }}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.reduce((rows, key, index) => (index % 2 === 0 ? rows.push(data.slice(index, index + 2)) : null, rows), []).map((pair, index) => (
                        <tr key={index}>
                            {pair.map((item, index) => (
                                <React.Fragment key={index}>
                                    <td style={{ borderBottom: '1px solid black', padding: '8px', textAlign: "center" }}>{item.gender}</td>
                                    <td style={{ borderBottom: '1px solid black', borderRight: index === 0 ? '1px solid black' : 'none', padding: '8px', textAlign: "center" }}>{item.age}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '89%', marginTop: "20px", marginLeft: "5vw", marginRight: "5vw" }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '11px' }}>
                            <button
                                onClick={() => setShowInclusions(true)}
                                style={{
                                    border: 'none',
                                    background: 'white',
                                    textDecoration: showInclusions ? 'underline' : 'none',
                                    color: showInclusions ? '#0EC3EB' : 'black'
                                }}
                            >
                                Inclusion
                            </button>
                        </th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>
                            <button
                                onClick={() => setShowInclusions(false)}
                                style={{
                                    border: 'none',
                                    background: 'white',
                                    textDecoration: !showInclusions ? 'underline' : 'none',
                                    color: !showInclusions ? '#0EC3EB' : 'black'
                                }}
                            >
                                Exclusion
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2" style={{ padding: '8px', verticalAlign: 'top' }}>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <h3 style={{ marginLeft: "5vw" }}>Choose your mode of transportation</h3>
            <AccordionTransport /> */}
            <div style={{ marginLeft: "5vw", marginRight: "5vw" }}>
                <div style={{ textAlign: "center", background: "#0EC3EB", width: "200px", marginLeft: "30vw", marginRight: "30vw", marginTop: "10px", marginBottom: "10px", padding: "5px", color: "white", borderRadius: "5px" }}>Traveler Details</div>
                <div style={{ background: "#0EC3EB", padding: "5px", color: "white", borderRadius: '5px' }}>Email Id: <input style={{ background: "#0EC3EB", border: "none", color: "white" }} /></div>
                <div style={{ background: "#0EC3EB", padding: "5px", color: "white", borderRadius: '5px', marginTop: "10px" }} >Phone: <input style={{ background: "#0EC3EB", border: "none", color: "white" }} /></div>
            </div>
            <div style={{width:"89%"}}>
                {/* <button style={{ marginBottom: '10px' }} onClick={addTraveler}>+</button> */}
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', marginLeft: '5vw', marginBottom: '20px', marginTop: "15px" }}>
                        {row.map((traveler, index) => (
                            <div key={index} style={{ marginRight: '15vw' }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <div style={{ background: "#0EC3EB", color: "white", padding: "5px", borderRadius: "5px", paddingRight: "50px", paddingLeft: "50px" }}>Traveler {rowIndex * maxFormsPerRow + index + 1} </div>
                                    <div><button style={{ marginBottom: '10px' }} onClick={addTraveler}>+ Add Traveler</button></div>
                                </div>
                                <div style={{ display: "flex", marginBottom: "10px" }} > <div style={{ background: "#0EC3EB", width: "55px", padding: "5px", borderRadius: "5px", color: "white" }}>Name</div>
                                    <div style={{ padding: "3px" }}>-</div>
                                    <div style={{ background: "#0EC3EB", padding: "3px", borderRadius: "5px" }}><input
                                        type="text"
                                        name="name"
                                        value={traveler.name}
                                        onChange={(e) => handleChange(rowIndex * maxFormsPerRow + index, e)}
                                        style={{ marginBottom: '5px', background: "#0EC3EB", border: "none", borderRadius: "5px", color: "white", fontSize: "15px", width: "400px" }}
                                    /></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", marginBottom: "10px" }}> <div style={{ background: "#0EC3EB", width: "40px", padding: "5px", borderRadius: "5px", color: "white" }}>Sex</div>
                                        <div style={{ padding: "3px" }}>-</div>
                                        <select
                                            name="sex"
                                            value={traveler.sex}
                                            onChange={(e) => handleChange(rowIndex * maxFormsPerRow + index, e)}
                                            style={{ marginRight: '5px', background: "#0EC3EB", color: "white", border: "none", borderRadius: "5px", padding: "3px" }}
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div style={{ display: "flex", marginBottom: "10px" }} > <div style={{ background: "#0EC3EB", width: "40px", padding: "5px", borderRadius: "5px", color: "white" }}>Age</div>
                                        <div style={{ padding: "3px" }}>-</div>
                                        <input
                                            // type="number"
                                            type="string"
                                            name="age"
                                            value={traveler.age}
                                            onChange={(e) => handleChange(rowIndex * maxFormsPerRow + index, e)}
                                            style={{ marginRight: '5px', background: "#0EC3EB", color: "white", border: "none", borderRadius: "5px", padding: "3px", width: "30px", paddingLeft: "8px" }}
                                        />
                                    </div>
                                </div>
                                <button onClick={() => removeTraveler(rowIndex * maxFormsPerRow + index)} style={{ marginTop: '5px' }}>- Remove</button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <h3 style={{ marginLeft: "5vw" }}>Accomodation</h3>
            {selectedTrip? (<div>
            <div style={{ marginLeft: "5vw", marginRight: "5vw", borderTop: "1px solid black", borderBottom: "1px solid black" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginTop: "5px" }}>Single Seater</div>
                    <div style={{ display: "flex", marginTop: "5px" }}>
                        <div>INR {selectedTrip.ourSingleSeatPricing}</div>
                        <div>
                            <div>
                                <button style={{ border: "none", background: "white" }} onClick={decrement}>-</button>
                                <input
                                    type="string"
                                    value={value}
                                    onChange={e => setValue(parseInt(e.target.value) || 0)}
                                    style={{ width: "27px", padding: "4px", backgroundColor: "#0EC3EB", color: "white", border: "none" }}
                                />
                                <button style={{ border: "none", background: "white" }} onClick={increment}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: "5px" }}>You will get your room/camp separately.</div>
            </div>
            <div style={{ marginLeft: "5vw", marginRight: "5vw", borderBottom: "1px solid black" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginTop: "5px" }}>Double Seater</div>
                    <div style={{ display: "flex", marginTop: "5px" }}>
                        <div>INR {selectedTrip.ourDoubleSeatPricing}</div>
                        <div>
                            <div>
                                <button style={{ border: "none", background: "white" }} onClick={doubleDecrement}>-</button>
                                <input
                                    type="string"
                                    value={doubleValue}
                                    onChange={e => setDoubleValue(parseInt(e.target.value) || 0)}
                                    style={{ width: "27px", padding: "4px", backgroundColor: "#0EC3EB", color: "white", border: "none" }}
                                />
                                <button style={{ border: "none", background: "white" }} onClick={doubleIncrement}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: "5px" }}>You will be allotted with a double sharing room with an another traveler, if you don’t have anyone with whom you can share your room/tent.</div>
            </div>
            <div style={{ marginLeft: "5vw", marginRight: "5vw", borderBottom: "1px solid black", marginBottom: "50px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginTop: "5px" }}>Triple Seater</div>
                    <div style={{ display: "flex", marginTop: "5px" }}>
                        <div>INR {selectedTrip.ourAmount}</div>
                        <div>
                            <div>
                                <button style={{ border: "none", background: "white" }} onClick={tripleDecrement}>-</button>
                                <input
                                    type="string"
                                    value={tripleValue}
                                    onChange={e => setTripleValue(parseInt(e.target.value) || 0)}
                                    style={{ width: "27px", padding: "4px", backgroundColor: "#0EC3EB", color: "white", border: "none" }}
                                />
                                <button style={{ border: "none", background: "white" }} onClick={tripleIncrement}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: "5px" }}>You will be allotted with a Triple sharing room with an another traveler, if you don’t have anyone with whom you can share your room/tent.</div>
            </div>
            </div> ) : null}
            <div style={{ position: 'fixed', bottom: 0, width: '100%', background: 'white', color: 'black', padding: '10px' }}>
                <div style={{ float: 'left', marginLeft: "4vw" }}>Contact Us</div>
                <div style={{ float: 'right', marginRight: "4vw" }}>Book now- INR {selectedTrip?.ourAmount} Only per person</div>
            </div>
            {/* <div style={{ marginLeft:"5vw", marginRight:"5vw", position: 'fixed', width: "1130px", bottom: 0, marginTop:"500px"}}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div>Contact us</div>
                    <div>INR 1999</div>
                </div>
            </div> */}

        </div>) : <div>Loading...</div>}
        </>
    );
};

export default App;



