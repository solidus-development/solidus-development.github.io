import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import MountainTop from '../images/mountain-top.png'

function Intro() {
    return (
      <div className='intro'>
        <Image src={MountainTop} alt='mountain-top' fluid />
        <Container>
            <div className="intro-content">
                <h1>Daemon Development</h1>
                <h2>Servicing the entrepreneurial spirit</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus molestie massa, quis commodo felis aliquam sed. Nullam pretium nulla vitae nisl porta semper. Nulla a blandit massa. Donec accumsan.</p>
            </div>
        </Container>
      </div>
    );
  }
  
  export default Intro;
  