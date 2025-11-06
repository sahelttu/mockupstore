import "./NavBar.css";

export function NavBar(){
    return(
        <div id="navbar">
            <h3 id="navbar-title">BuyStuff</h3>
            <div id="navbar-links">
                <div className="links-group">
                    <a className="link-button" href="">Products</a>
                    <a className="link-button" href="">About</a>
                </div>
                <div className="links-group">
                    <a className="link-button" href="">Account</a>
                    <a className="link-button" href="">Something</a>
                </div>
            </div>
        </div>
    );
}