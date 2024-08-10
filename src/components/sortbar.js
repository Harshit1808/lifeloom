import React from 'react';
import { LiaSortAmountDownSolid } from "react-icons/lia";

export default function SortBar() {
    return (
        <>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:"5px" }}>
                <div style={{ marginRight: '2vw' }}>
                    <button style={{ marginLeft: '4vw', backgroundColor: "#0EC3EB", padding: "3px", borderRadius: "5px", color: "black", border:"none" }}>Start Date</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '5vw' }}>
                        <button style={{ backgroundColor: "#0EC3EB", padding: "3px", borderRadius: "5px", color: "black", border:'none' }}>Price</button>
                        <LiaSortAmountDownSolid style={{ marginLeft: '5px', fontSize: "30px", color:"black" }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '5vw' }}>
                        <button style={{ backgroundColor: "#0EC3EB", padding: "3px", borderRadius: "5px", color: "black", border:'none' }}>Distance</button>
                        <LiaSortAmountDownSolid style={{ marginLeft: '5px', fontSize: "30px", color:"black" }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '4vw' }}>
                        <button style={{ backgroundColor: "#0EC3EB", padding: "3px", borderRadius: "5px", color: "black", border:'none' }}>Night</button>
                        <LiaSortAmountDownSolid style={{ marginLeft: '5px', fontSize: "30px", color:"black" }} />
                    </div>
                </div>
            </div>
        </>
    )
}