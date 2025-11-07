import "./Dropdown.css";

export function Dropdown(){
    return (
        <div className="dropdown-main">
            <button id="dropdown-button">
                <a id="dropdown-title" href="">Products</a>
            </button>
            <div className="dropdown-content">
                <h4>Clothing</h4>
                <a className="dropdown-link" href="">Men's Clothing</a>
                <a className="dropdown-link" href="">Women's Clothing</a>
                <a className="dropdown-link" href="">Jewellery</a>
                <h4>Electronics</h4>
                <a className="dropdown-link" href="">Multimedia</a>
                <a className="dropdown-link" href="">Utility</a>
            </div>
        </div>
    );
}