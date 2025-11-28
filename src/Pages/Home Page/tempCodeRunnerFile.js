
import '../../CSS Files/HomePage.css';

//im importing all the components
import MainHeading from 'src/Components/Headings/MainHeading.js'; 
import BlueButton from 'src/Components/Buttons/BlueButton.js'; 
import GrayButton from 'src/Components/Buttons/GrayButton.js';
import NormalParagraph from 'src/Components/Paragraphs/NormalParagraph.js';

export default function  Homepage(){
	return (
        <div className="hero-section">
            <div className="angled-background"></div>
            <div className="hero-content">
                
                
                <h1 className="heading-sub">ZERO-TOUCH AUTHENTICATION</h1>
                
                
                <MainHeading className="!text-7xl !font-extrabold !mb-4">
                    Reinvented.
                </MainHeading>
                
                
                <NormalParagraph className="!text-xl !mt-0 !mb-10">
                    Your identity secured through NIR vein biometrics and advanced cryptographic defense.
                </NormalParagraph>
                
                <div className="cta-buttons">
                    
                    <BlueButton text="Launch App" />
                    <GrayButton text="Learn More" />
                </div>
            </div>
        </div>
    );
};