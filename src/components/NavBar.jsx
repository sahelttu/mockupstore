import "./NavBar.css";
import { Dropdown } from "./Dropdown";
import { LinkButton } from "./LinkButton";

export function NavBar(){
    return(
        <div id="navbar">
            <h3 id="navbar-title">BuyStuff</h3>
            <div id="navbar-links">
                <div className="links-group">
                    <Dropdown />
                    <LinkButton href="" title="About" />
                </div>
                <div className="links-group">
                    <LinkButton href="" title="Account" />
                    <LinkButton href="" title="Something" />
                </div>
            </div>
        </div>
    );
}