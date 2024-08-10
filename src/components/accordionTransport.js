import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div style={{marginLeft:"5vw", marginRight:"5vw", maxWidth:"1140px"}}>
        <Accordion defaultExpanded >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{background:"#0EC3EB", height:"30px"}} />}
          sx={{background:"#0EC3EB", border:"1px solid white"}}
          
         
        >
        <div style={{ height: '30px', background:"#0EC3EB", display: 'flex', alignItems: 'center', color:"white", width:"100%", padding:"3px" }}>Our Transportation</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <ul>
        <li>Travel from Mumbai to Pawna late via breathtaking views of lonavla’s mountains.</li>
        <li>Have BBQ dinner at campside and tents.</li>
        <li>Party hard on Dj</li>
      </ul>
          </div>
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{background:"#0EC3EB", height:"30px"}} />}
        sx={{background:"#0EC3EB", border:"1px solid white"}}
          
         
        >
        <div style={{ height: '30px', background:"#0EC3EB", display: 'flex', alignItems: 'center', color:"white", width:"100%", padding:"3px" }}>Public Transportation</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <ul>
        <li>Travel from Mumbai to Pawna late via breathtaking views of lonavla’s mountains.</li>
        <li>Have BBQ dinner at campside and tents.</li>
        <li>Party hard on Dj</li>
      </ul>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{background:"#0EC3EB", height:"30px"}} />}
          sx={{background:"#0EC3EB", border:"1px solid white"}}
        >
        <div style={{ height: '30px', background:"#0EC3EB", display: 'flex', alignItems: 'center', color:"white", width:"100%", padding:"3px" }}>Personal Vehicle</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <ul>
        <li>Travel from Mumbai to Pawna late via breathtaking views of lonavla’s mountains.</li>
        <li>Have BBQ dinner at campside and tents.</li>
        <li>Party hard on Dj</li>
      </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
