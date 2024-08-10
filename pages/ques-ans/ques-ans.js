import { useState, useEffect, useRef } from 'react';



export default function FirstPost() {
  const [qaList, setQAList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch questions and answers when the component mounts
    fetchQA();
  }, []);

  const fetchQA = async () => {
    console.log("fetchQA");
    try {
        const res =  await fetch('/api/userqna', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          })
    const e=await res.json();
    console.log("e",e.users);
    //setQAList(e.qaPairs);
    setUsers(e.users);
          if (!res.ok) {
            throw new Error('There was an error submitting this message!');
          }
          console.log("Question and answer got successfully!")
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
 const f = () => {
  console.log("f");
  fetchQA();
 }
 if(!users || users.length==0){
  return (<div style={{textAlign:'center', marginTop:'300px'}}>Loading</div>)
 }
 else{
  return (
    <div style={{marginLeft:"30px"}}>
    <h1>All User Data</h1>
    {users.map((user, index) => (
      <div key={index}>
        <h3>User Name: {user.name} User Phone Number: {user.phoneNumber}</h3>
        {/* <h4>Interactions:</h4> */}
        {user.interactions.map((interaction, i) => (
          <div key={i}>
            <strong> {i +1 } . Question: {interaction.question}</strong>
            <p>Answer: {interaction.answer}</p>
            {/* <p>Timestamp: {new Date(interaction.timestamp).toLocaleString()}</p> */}
          </div>
        ))}
        <hr />
      </div>
    ))}
  </div>
  );
        }
  }