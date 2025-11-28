import '../../CSS Files/HomePage.css';

//i/m importing all the components
import MainHeading from '../../Components/Headings/MainHeading';
import BlueButton from '../../Components/Buttons/BlueButton';
import GrayButton from '../../Components/Buttons/GrayButton';
import NormalParagraph from '../../Components/Paragraphs/NormalParagraph';

export default function Homepage(){
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
}