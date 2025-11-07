import "./LinkButton.css";

export function LinkButton(props){
    return(
        <button id="linkbutton-main">
            <a id="linkbutton-title" href={props.href}>{props.title}</a>
        </button>
    )
}