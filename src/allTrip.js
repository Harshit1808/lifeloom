// import React from 'react'
// import Trip from '../src/components/trips'
// import Link from 'next/link'

// export default function AllTrip() {
//     return (
//         <>
//         <div style={{marginTop:"20px", marginBottom:"0px", marginLeft:"10px", marginRight:"25px"}}>
//                 <div className="text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: "60px", marginRight: "60px" }}>
//                     <div>
//                         <h1 className="text-base text-black font-bold tracking-wide uppercase" style={{ fontSize: '20px' }}>MUMBAI</h1>
//                     </div>
//                     <div>
//                         <Link href={"/locationtrip"}
//                             className="px-4 py-2 rounded border text-blue-700 bg-white transition duration-200"
//                             style={{ fontSize: '20px', color: '#EC3EB', border: 'none' }}
//                         >
//                             View All
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         <div style={{ display: "flex", marginLeft: "15px", flexWrap: "wrap" }}> {/* Apply inline styles */}
//         <Trip style={{ width: "100%", marginBottom: "15px" }} /> {/* Apply inline styles */}
//         <Trip style={{ width: "calc(50% - 15px)", marginRight: "15px" }} /> {/* Apply inline styles */}
//         <Trip style={{ width: "calc(50% - 15px)", marginRight: "15px" }} /> {/* Apply inline styles */}
//         <Trip style={{ width: "calc(50% - 15px)", marginBottom: "15px" }} /> {/* Apply inline styles */}
//         <Trip style={{ width: "calc(50% - 15px)", marginRight: "15px" }} /> {/* Apply inline styles */}
//         <Trip style={{ width: "calc(50% - 15px)", marginRight: "15px" }} /> {/* Apply inline styles */}
//     </div>
//     </>
//     )
// }

// pages/allTrip.js
// import React from 'react';
// import Trip from '../src/components/trips';
// import Link from 'next/link';

// const tripsData = [
//     { id: 1, city: "Mumbai", title: "Trip to Gateway of India", duration: "2 days & 1 night", price: "$200", description: "A beautiful trip to the historical Gateway of India.", image: "/images/gateway.jpg" },
//     { id: 2, city: "Mumbai", title: "Marine Drive Experience", duration: "1 day & 1 night", price: "$150", description: "Enjoy the scenic beauty of Marine Drive.", image: "/images/marinedrive.jpg" },
//     { id: 3, city: "Mumbai", title: "Elephanta Caves Tour", duration: "3 days & 2 nights", price: "$500", description: "Explore the ancient Elephanta Caves.", image: "/images/elephanta.jpg" },
//     { id: 4, city: "Mumbai", title: "Juhu Beach Fun", duration: "2 days & 1 night", price: "$100", description: "Relax and have fun at Juhu Beach.", image: "/images/juhu.jpg" },
//     { id: 5, city: "Mumbai", title: "Haji Ali Dargah Visit", duration: "1 day & 1 night", price: "$50", description: "Visit the famous Haji Ali Dargah.", image: "/images/hajiali.jpg" },
//     { id: 6, city: "Mumbai", title: "Chhatrapati Shivaji Terminus", duration: "2 days & 1 night", price: "$250", description: "See the architectural marvel of CST.", image: "/images/cst.jpg" },
//     { id: 7, city: "Delhi", title: "Red Fort Tour", duration: "1 day & 1 night", price: "$100", description: "Visit the historical Red Fort.", image: "/images/redfort.jpg" },
//     { id: 8, city: "Delhi", title: "Qutub Minar Visit", duration: "1 day", price: "$50", description: "Explore the ancient Qutub Minar.", image: "/images/qutubminar.jpg" },
//     { id: 9, city: "Delhi", title: "India Gate Tour", duration: "1 day", price: "$20", description: "A trip to the iconic India Gate.", image: "/images/indiagate.jpg" },
//     { id: 10, city: "Delhi", title: "Lotus Temple Visit", duration: "1 day", price: "$30", description: "A peaceful visit to the Lotus Temple.", image: "/images/lotustemple.jpg" },
//     { id: 11, city: "Delhi", title: "Akshardham Temple Tour", duration: "1 day", price: "$40", description: "Explore the beautiful Akshardham Temple.", image: "/images/akshardham.jpg" }
// ];

// export default function AllTrip() {
//     return (
//         <>
//             {tripsData.map((trip) => (   <div>
//                 <div style={{ marginTop: "20px", marginBottom: "0px", marginLeft: "10px", marginRight: "25px" }}>
//                     <div className="text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: "60px", marginRight: "60px" }}>
//                         <div>
//                             <h1 className="text-base text-black font-bold tracking-wide uppercase" style={{ fontSize: '20px' }}>{trip.city}</h1>
//                         </div>
//                         <div>
//                             <Link href={"/locationtrip"}
//                                 className="px-4 py-2 rounded border text-blue-700 bg-white transition duration-200"
//                                 style={{ fontSize: '20px', color: '#EC3EB', border: 'none' }}
//                             >
//                                 View All
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{ display: "flex", marginLeft: "15px", flexWrap: "wrap" }}>
//                     {tripsData.map((trip) => (
//                         <Trip
//                             key={trip.id}
//                             title={trip.title}
//                             duration={trip.duration}
//                             price={trip.price}
//                             description={trip.description}
//                             image={trip.image}
//                             style={{ width: "calc(50% - 15px)", margin: "10px" }}
//                         />
//                     ))}
//                 </div>
//             </div>))}
//         </>
//     );
// }

import React, { use } from 'react';
import Trip from '../src/components/trips';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';

const tripsData = [
    { id: 1, city: "Mumbai", title: "Trip to Gateway of India", duration: "2 days & 1 night", price: "$200", description: "A beautiful trip to the historical Gateway of India.", image: "/images/gateway.jpg" },
    { id: 2, city: "Mumbai", title: "Marine Drive Experience", duration: "1 day & 1 night", price: "$150", description: "Enjoy the scenic beauty of Marine Drive.", image: "/images/marinedrive.jpg" },
    { id: 3, city: "Mumbai", title: "Elephanta Caves Tour", duration: "3 days & 2 nights", price: "$500", description: "Explore the ancient Elephanta Caves.", image: "/images/elephanta.jpg" },
    { id: 4, city: "Mumbai", title: "Juhu Beach Fun", duration: "2 days & 1 night", price: "$100", description: "Relax and have fun at Juhu Beach.", image: "/images/juhu.jpg" },
    { id: 5, city: "Mumbai", title: "Haji Ali Dargah Visit", duration: "1 day & 1 night", price: "$50", description: "Visit the famous Haji Ali Dargah.", image: "/images/hajiali.jpg" },
    { id: 6, city: "Mumbai", title: "Chhatrapati Shivaji Terminus", duration: "2 days & 1 night", price: "$250", description: "See the architectural marvel of CST.", image: "/images/cst.jpg" },
    { id: 7, city: "Delhi", title: "Red Fort Tour", duration: "1 day & 1 night", price: "$100", description: "Visit the historical Red Fort.", image: "/images/redfort.jpg" },
    { id: 8, city: "Delhi", title: "Qutub Minar Visit", duration: "1 day", price: "$50", description: "Explore the ancient Qutub Minar.", image: "/images/qutubminar.jpg" },
    { id: 9, city: "Delhi", title: "India Gate Tour", duration: "1 day", price: "$20", description: "A trip to the iconic India Gate.", image: "/images/indiagate.jpg" },
    { id: 10, city: "Delhi", title: "Lotus Temple Visit", duration: "1 day", price: "$30", description: "A peaceful visit to the Lotus Temple.", image: "/images/lotustemple.jpg" },
    { id: 11, city: "Delhi", title: "Akshardham Temple Tour", duration: "1 day", price: "$40", description: "Explore the beautiful Akshardham Temple.", image: "/images/akshardham.jpg" }
];

export default function AllTrip() {

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


    // const groupedTrips = tripsData.reduce((acc, trip) => {
    //     if (!acc[trip.city]) {
    //         acc[trip.city] = [];
    //     }
    //     acc[trip.city].push(trip);
    //     return acc;
    // }, {});
    const groupedTrips = trips.reduce((acc, trip) => {
        if (!acc[trip.location.city]) {
            acc[trip.location.city] = [];
        }
        acc[trip.location.city].push(trip);
        return acc;
    }, {});

    return (
        <>
            {Object.keys(groupedTrips).map(city => (
                <div key={city}>
                    <div style={{ marginTop: "20px", marginBottom: "0px", marginLeft: "10px", marginRight: "25px" }}>
                        <div className="text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: "60px", marginRight: "60px" }}>
                            <div>
                                <h1 className="text-base text-black font-bold tracking-wide uppercase" style={{ fontSize: '20px' }}>{city}</h1>
                            </div>
                            <div>
                                <Link 
                                    href={{ pathname: "/locationtrip", query: { city } }}
                                    className="px-4 py-2 rounded border text-blue-700 bg-white transition duration-200"
                                    style={{ fontSize: '20px', color: '#EC3EB', border: 'none' }}
                                >
                                    View All
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginLeft: "15px", flexWrap: "wrap" }}>
                        {groupedTrips[city].map((trip) => (
                            <Trip
                                key={trip.id}
                                tripId={trip.id}
                                title={trip.name}
                                duration={trip.location.days + " days & " + (trip.location.days-1) + " night"}
                                price={trip.tripleSeatPricing}
                                description={trip.description}
                                image={trip.image}
                                style={{ width: "calc(50% - 15px)", margin: "10px" }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

