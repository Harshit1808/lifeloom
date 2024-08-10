import React from 'react';
import styled from 'styled-components';
import { BiLeftArrowCircle } from "react-icons/bi";
import { CgSearchLoading } from "react-icons/cg";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from 'react';
import { useEffect } from 'react';

const TripSearchContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 0 auto;
  max-width: 400px;
`;

const Fieldset = styled.fieldset`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 3px;
`;

const Legend = styled.legend`
  font-weight: bold;
  padding: 0 5px;
`;

const RadioButtonContainer = styled.div`
  margin-bottom: 5px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const SearchButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 4px;
`;

const ClearButton = styled(SearchButton)`
  background-color: #008CBA;
`;

function Modal() {
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
        <>
            <div style={{ maxWidth: "700px", maxHeight: "762px", display: 'flex', flexDirection: 'column', marginLeft: "auto", marginRight: "auto", boxShadow: "0 0 0 1px #856363", borderRadius: "5px", backgroundColor: "pink" }}>
                <div style={{ maxWidth: '700px', height: '70px', backgroundColor: '#FFFFFF' }}>
                    <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
                        <button style={{ marginRight: "50px", fontSize: "40px", color: "black" }}><BiLeftArrowCircle /> </button>
                        <div style={{ flex: 1, display: "flex", padding: "2px", borderRadius: "6px", maxWidth: "540px", textAlign: "center", outline: "none", boxShadow: "0 0 0 2px #EEEBEB", fontSize: "25px", color: "black" }}>
                            <CgSearchLoading style={{ fontSize: '40px', padding: "2px", marginRight: "80px", color: "black" }} />
                            <input type="text" placeholder="Search for destination" style={{ padding: "2px", borderRadius: "6px", maxWidth: "400px", textAlign: "center", outline: "none", fontSize: "25px", color: "black" }} />
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
                <div style={{ maxWidth: '700px', maxHeight: '150px', backgroundColor: 'white', borderTop: "1px solid black" }}>
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
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "10px" }}>
                        <div style={{ marginRight: "10px" }}>
                            <div style={{ fontSize: "20px", marginBottom: "10px", color:"black" }}>Starting Date</div>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "auto", marginRight: "auto" }}>
                            <TbCalendarTime style={{ fontSize: '40px', padding: "2px", marginRight: "10px", color: "black" }} />
                            <button style={{ backgroundColor: "#0EC3EB", padding: "10px", borderRadius: "5px", color: "black" }}>Choose Date</button>
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
                                <input type="text" placeholder="INR 0" style={{ padding: "2px", maxWidth: "auto", textAlign: "center", outline: "none", fontSize: "auto", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} />
                            </div>
                            <div style={{ display: "flex", marginLeft: "40px", border: "1px solid black", borderRadius: "10px" }}>
                                <div style={{ backgroundColor: "#0EC3EB", padding: "10px", borderRadius: "10px", color: "white" }}>Max</div>
                                <input type="text" placeholder="INR 10,000" style={{ padding: "2px", maxWidth: "auto", textAlign: "center", outline: "none", fontSize: "auto", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '700px', height: 'auto', backgroundColor: 'white', borderTop: "1px solid black" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button style={{ marginLeft: "10px", padding: "5px", backgroundColor: "white", color: "black", borderRadius: "5px", fontSize: "20px", marginTop: "5px", marginBottom: "5px", textDecoration: "underline" }}>Clear All</button>
                        <button style={{ marginRight: "10px", padding: "5px", backgroundColor: "white", color: "black", borderRadius: "5px", fontSize: "20px", marginTop: "5px", marginBottom: "5px", backgroundColor: "#0EC3EB", color: "white" }}>Search for Trips</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Modal;