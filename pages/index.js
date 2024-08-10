import Navbar from '../src/components/navbar'
import Hero from '../src/components/hero'
import Trips from '../src/components/trips'
import AllTrip from '../src/allTrip'
import Modal from '../src/components/modal'
// import Modalbutton from '../src/components/modalbutton'
import Login from '../src/components/login'
import SignUp from '../src/components/signup'
import Loginsignup from '../src/components/loginsignup'
import Itinerary from '../src/components/itinerary'

export default function Home() {
    return (
        <div style={{backgroundColor:"#F8F8F8", opacity:"96%"}}>
        <div style={{position:"fixed", width:"100%"}}>
        <Navbar />
        </div>
        <div style={{paddingTop:"58px"}}>
        <Hero />
        </div>
        <AllTrip />
        {/* <Itinerary /> */}
        </div>
    )
}