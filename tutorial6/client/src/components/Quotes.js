import './Quotes.css';
import img from '../images/coffee-main.jpg';
 
function Quotes({ text }) {
    return (
        <section className="quotes-section" style={{
            backgroundImage: 'url(' + img + ')',
        }}>            
            <h4>{text || 'Enjoy your life - drink tasty coffee'}</h4>
        </section>
    )
}

export default Quotes;
