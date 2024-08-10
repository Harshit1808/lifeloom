import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CgSearchLoading } from "react-icons/cg";
import { BiLeftArrowCircle } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";
import { useState } from 'react';

const style = {
   marginTop: "100px", 
   maxWidth:"100vw",
   marginLeft: "20px",
   marginRight: "20px",
};

export default function ModalButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClearAll = () => {
    // Handle clearing all fields
};

const [selectedOptions, setSelectedOptions] = useState([]);

const handleOptionClick = (option) => {
    // If option is already selected, deselect it
    if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
        // Otherwise, select it
        setSelectedOptions([...selectedOptions, option]);
    }
};


  return (
    <div>
      <button onClick={handleOpen}  style={{ backgroundColor: '#0EC3EB', borderRadius: '15px', padding: '0.5rem', width: '100%', maxWidth: '200px', textAlign: 'center', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border:"none" }}>
        <div>
          <CgSearchLoading style={{ fontSize: '30px' }} />
        </div>
        <div style={{ marginRight: '20px' }}>Destination</div>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{ maxWidth: "700px", maxHeight: "762px", display: 'flex', flexDirection: 'column', marginLeft: "auto", marginRight: "auto", boxShadow: "0 0 0 1px #856363", borderRadius: "5px", backgroundColor: "pink" }}>
                <div style={{ maxWidth: '100%', height: '70px', backgroundColor: '#FFFFFF' }}>
                    <div style={{ display: "flex", alignItems: "center", padding: "7px" }}>
                        <button style={{ marginTop:"7px",marginRight: "0vw", fontSize: "40px", color: "black", backgroundColor:"white", border:'none' }}><BiLeftArrowCircle /> </button>
                        <div style={{ flex: 1, display: "flex", padding: "2px", borderRadius: "6px", maxWidth: "90%", textAlign: "center", outline: "none", boxShadow: "0 0 0 2px #EEEBEB", fontSize: "25px", color: "black" }}>
                            <CgSearchLoading style={{ fontSize: '40px', padding: "2px", marginRight: "4vw", color: "black" }} />
                            <input type="text" placeholder="Search for destination" style={{ padding: "2px", borderRadius: "6px", maxWidth: "100%", textAlign: "center", outline: "none", fontSize: "25px", color: "black", backgroundColor:"white", border:"none" }} />
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '700px', maxHeight: '230px', backgroundColor: 'white', borderTop: "1px solid black" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "10px" }}>
                        <div style={{ marginRight: "10px" }}>
                            <div style={{ fontSize: "20px", marginBottom: "10px", color: "black" }}>Trip Type</div>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "auto", marginRight: "auto" }}>
                            {["Nature", "City Exploration", "Cultural", "Adventure", "Escape from city life"].map((index) => (
                                <input
                                    key={index}
                                    type="button"
                                    value={`${index}`}
                                    style={{
                                        fontSize: "20px",
                                        paddingTop: "5px",
                                        paddingBottom: "5px",
                                        paddingRight: "30px",
                                        paddingLeft: "30px",
                                        marginRight: "5px",
                                        marginBottom: "5px",
                                        marginLeft: "5px",
                                        width: "auto",
                                        border: "1px solid black",
                                        borderRadius: "5px",
                                        backgroundColor: selectedOptions.includes(index) ? "lightblue" : "white",
                                        color: "black" // set font color to black
                                    }}
                                    onClick={() => handleOptionClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '700px', backgroundColor: 'white', borderTop: "1px solid black", maxHeight:"auto" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "10px" }}>
                        <div style={{ marginRight: "10px" }}>
                            <div style={{ fontSize: "20px", marginBottom: "10px", color:"black" }}>Trip Duration</div>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "auto", marginRight: "auto" }}>
                            {["Upto 1 day", "2 to 3 days", "3 to 5 days"].map((index) => (
                                <input
                                    key={index}
                                    type="button"
                                    value={`${index}`}
                                    style={{
                                        fontSize: "20px",
                                        paddingTop: "5px",
                                        paddingBottom: "5px",
                                        paddingRight: "55px",
                                        paddingLeft: "55px",
                                        marginRight: "5px",
                                        marginBottom: "5px",
                                        marginLeft: "5px",
                                        width: "auto",
                                        border: "1px solid black",
                                        borderRadius: "5px",
                                        backgroundColor: selectedOptions.includes(index) ? "lightblue" : "white",
                                        color: "black" // set font color to black
                                    }}
                                    onClick={() => handleOptionClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '700px', maxHeight: 'auto', backgroundColor: 'white', borderTop: "1px solid black" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "10px", height:"auto" }}>
                        <div style={{ marginRight: "10px" }}>
                            <div style={{ fontSize: "20px", marginBottom: "10px", color:"black" }}>Starting Date</div>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "auto", marginRight: "auto" }}>
                            <TbCalendarTime style={{ fontSize: '40px', padding: "2px", marginRight: "10px", color: "black" }} />
                            <button style={{ backgroundColor: "#0EC3EB", padding: "10px", borderRadius: "5px", color: "black", border:"none" }}>Choose Date</button>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '700px', maxHeight: 'auto', backgroundColor: 'white', borderTop: "1px solid black" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "10px" }}>
                        <div style={{ marginRight: "10px" }}>
                            <div style={{ fontSize: "20px", marginBottom: "10px", color:"black" }}>Price Range</div>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "auto", marginRight: "auto" }}>
                            <div style={{ display: "flex", border: "1px solid black", borderRadius: "10px" }}>
                                <div style={{ backgroundColor: "#0EC3EB", padding: "10px", borderRadius: "10px", color: "white" }}>Min</div>
                                <input type="text" placeholder="INR 0" style={{ padding: "2px", maxWidth: "auto", textAlign: "center", outline: "none", fontSize: "auto", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", backgroundColor:"white", border:"none", color:"black" }} />
                            </div>
                            <div style={{ display: "flex", marginLeft: "40px", border: "1px solid black", borderRadius: "10px" }}>
                                <div style={{ backgroundColor: "#0EC3EB", padding: "10px", borderRadius: "10px", color: "white" }}>Max</div>
                                <input type="text" placeholder="INR 10,000" style={{ padding: "2px", maxWidth: "auto", textAlign: "center", outline: "none", fontSize: "auto", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", backgroundColor:"white", border:"none", color:"black" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '700px', height: 'auto', backgroundColor: 'white', borderTop: "1px solid black" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button style={{ marginLeft: "10px", padding: "5px", backgroundColor: "white", color: "black", borderRadius: "5px", fontSize: "20px", marginTop: "5px", marginBottom: "5px", textDecoration: "underline", border:"none" }}>Clear All</button>
                        <button style={{ marginRight: "10px", padding: "5px", backgroundColor: "white", color: "black", borderRadius: "5px", fontSize: "20px", marginTop: "5px", marginBottom: "5px", backgroundColor: "#0EC3EB", color: "white", border:'none' }}>Search for Trips</button>
                    </div>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
