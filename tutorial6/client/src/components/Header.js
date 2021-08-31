import headerImg from '../images/coffee-main.jpg';

function Header() {
    return (
        <header className="app-header" style={{
            backgroundImage: 'url(' + headerImg + ')',
           }}>
             <div className="header-title">
               <h1>Cold Brew</h1>
               <h4>Welcome to the coffee shop, where you can order the best coffee drinks ;)</h4>
             </div>
           </header>
    )
}

export default Header;
