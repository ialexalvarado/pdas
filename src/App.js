import { FC } from 'react';
import 'bulma/css/bulma.css'
import ProfileCard from "./PorifleCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png"


export const App = ({ name }) => {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal digital assistants</p>
        </div>
        
      </section>
      

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage} 
              description='Alexa is Amazons cloud-based voice service available on more than 100 million devices from Amazon and third-party device manufacturers. With Alexa, you can build natural voice experiences that offer customers a more intuitive way to interact with the technology they use every day'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard title='Cortana' handle='@cortana32' image={CortanaImage} 
              description="Cortana is Microsoft's personal productivity assistant that helps you save time and focus attention on what matters most. To get started, select the Cortana icon on the taskbar. If you're not sure what to say, try asking, What can you do?"
              />
            </div>
            <div className='column is-3'>
              <ProfileCard title='Siri' handle='@siri01' image={SiriImage}
              description="Siri is Apple's virtual assistant for iOS, macOS, tvOS and watchOS devices that uses voice recognition and is powered by artificial intelligence (AI)."
               />
            </div>
          </div>

        </section>
      </div>



    </div>
  );
};


