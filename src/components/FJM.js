// Packages Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from '@fortawesome/free-brands-svg-icons';

// I M P O R T   C O N T E X T


// I M P O R T   S T Y L I N G
import '../styles/App.scss';
import '../styles/fjm.scss';

// Files Import
import fjm from '../images/fjm-logo.png';
import itzFlorian from '../images/itzFlorian.jpeg';
import grossesbewirken from '../images/grossesbewirken.png';
import BreffJaun from '../images/BreffJaun.jpeg';

const FJM = () => {
  return (
    <div className="fjm-parent-container">
      <div className="general-info-container">
        <img
          src={fjm}
          width="45"
          height="45"
          className="d-inline-block align-top"
          alt="FJM logo"
        />
        <h6>"nerdsherd" was created and designed by "FJM" which consists of Florian, Jeff and Martin as the final project for the "Single Page Application Module".
        </h6>
      </div>
      <div className="profile-card-container">


      <div className='single-profile-card black-grad-135'>
        <img src={itzFlorian } alt="" />
        <h3>Florian Mewes</h3>
        <p>If you like what you see, check out my Github for more great projects!</p>
        <div className="link flexi">
            <a
              href="https://github.com/itzFlorian"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size='2x'
                className='link'
              />
            </a>
            <p>itzFlorian</p>
          </div>
      </div>


      <div className='single-profile-card black-grad-135'>
        <img src={BreffJaun} alt="" />
        <h3>Jeff Braun</h3>
        <p>Hello, my name is Jeff and i'm web developer student, class representative and tutor at the DCI in germany.</p>
        <div className="link flexi">
            <a
              href="https://github.com/BreffJaun"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size='2x'
                className='link'
              />
            </a>
            <p>BreffJaun</p>
          </div>
        </div>



      <div className='single-profile-card black-grad-135'>
        <img src={grossesbewirken} alt="" />
        <h3>Martin Gross</h3>
        <p>Hi, i´m a high skilled news media designer, experienced in print product development and print design. And now it´s time for the internet.</p>
        <div className="link flexi">
            <a
              href="https://github.com/grossesbewirken"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size='2x'
                className='link'
              />
            </a>
            <p>grossesbewirken</p>
          </div>
      </div>




      </div>
      <div className="general-info-container">
      <h6> This three guys are amazing DCI Web Developer Students.</h6>
      <h6>Have a look at our Profiles and at our other Projects on Github</h6>
      </div>
    </div>
  );
};

export default FJM;

