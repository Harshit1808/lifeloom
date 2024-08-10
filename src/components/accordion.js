// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
// import {useState} from 'react';

// export default function AccordionUsage({eachDayDetails}) {
//   console.log("eachDayDetails11",eachDayDetails);
//   const [eachDay, setEachDay] = React.useState(eachDayDetails);
//   const arr = [1,2,3,4,5,6,7,8,9,10];
//   return (
//     <div style={{marginLeft:"5vw", marginRight:"5vw", width:"89%"}}>
        
//         <Accordion defaultExpanded >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon style={{background:"#0EC3EB", height:"30px"}} />}
//           sx={{background:"#0EC3EB", border:"1px solid white"}}
          
         
//         >
//         <div style={{ height: '30px', background:"#0EC3EB", display: 'flex', alignItems: 'center', color:"white", width:"100%", padding:"3px" }}>Day 1</div>
//         </AccordionSummary>
//         <AccordionDetails>
//           <div>
//           <ul>
//         <li>Travel from Mumbai to Pawna late via breathtaking views of lonavla’s mountains.</li>
//         <li>Have BBQ dinner at campside and tents.</li>
//         <li>Party hard on Dj</li>
//       </ul>
//           </div>
//         </AccordionDetails>
//         {/* <AccordionActions>
//           <Button>Cancel</Button>
//           <Button>Agree</Button>
//         </AccordionActions> */}
//       </Accordion>
//       {/* <Accordion>
//       <AccordionSummary
//           expandIcon={<ExpandMoreIcon style={{background:"#0EC3EB", height:"30px"}} />}
//         sx={{background:"#0EC3EB", border:"1px solid white"}}
          
         
//         >
//         <div style={{ height: '30px', background:"#0EC3EB", display: 'flex', alignItems: 'center', color:"white", width:"100%", padding:"3px" }}>Day 2</div>
//         </AccordionSummary>
//         <AccordionDetails>
//           <div>
//           <ul>
//         <li>Travel from Mumbai to Pawna late via breathtaking views of lonavla’s mountains.</li>
//         <li>Have BBQ dinner at campside and tents.</li>
//         <li>Party hard on Dj</li>
//       </ul>
//           </div>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//       <AccordionSummary
//           expandIcon={<ExpandMoreIcon style={{background:"#0EC3EB", height:"30px"}} />}
//           sx={{background:"#0EC3EB", border:"1px solid white"}}
          
         
//         >
//         <div style={{ height: '30px', background:"#0EC3EB", display: 'flex', alignItems: 'center', color:"white", width:"100%", padding:"3px" }}>Day 3</div>
//         </AccordionSummary>
//         <AccordionDetails>
//           <div>
//           <ul>
//         <li>Travel from Mumbai to Pawna late via breathtaking views of lonavla’s mountains.</li>
//         <li>Have BBQ dinner at campside and tents.</li>
//         <li>Party hard on Dj</li>
//       </ul>
//           </div>
//         </AccordionDetails>
//       </Accordion> */}
//     </div>
//   );
// }

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function AccordionUsage({ eachDayDetails }) {
//   console.log("eachDayDetails11", eachDayDetails);
//   const [eachDay, setEachDay] = React.useState(eachDayDetails);

//   return (
//     <div style={{ marginLeft: "5vw", marginRight: "5vw", width: "89%" }}>
//       {eachDay.map((dayDetail) => (
//         <Accordion key={dayDetail.id} defaultExpanded>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon style={{ background: "#0EC3EB", height: "30px" }} />}
//             sx={{ background: "#0EC3EB", border: "1px solid white" }}
//           >
//             <div style={{ height: '30px', background: "#0EC3EB", display: 'flex', alignItems: 'center', color: "white", width: "100%", padding: "3px" }}>
//               Day {dayDetail.day}
//             </div>
//           </AccordionSummary>
//           <AccordionDetails>
//             <div>
//               <ul>
//               {dayDetail.agentOverview.split('\n').map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// }

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage({ eachDayDetails }) {
  console.log("eachDayDetails11", eachDayDetails);
  const [eachDay, setEachDay] = React.useState(eachDayDetails);

  return (
    <div style={{ marginLeft: "5vw", marginRight: "5vw", width: "89%" }}>
      {eachDay.map((dayDetail) => (
        <Accordion key={dayDetail.id} defaultExpanded={dayDetail.day === 1}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ background: "#0EC3EB", height: "30px" }} />}
            sx={{ background: "#0EC3EB", border: "1px solid white" }}
          >
            <div style={{ height: '30px', background: "#0EC3EB", display: 'flex', alignItems: 'center', color: "white", width: "100%", padding: "3px" }}>
              Day {dayDetail.day}
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <ul>
                {dayDetail.agentOverview.split('\n').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}


