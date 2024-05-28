import { FC } from "react";
import "./Navbar.css";

/**
 * NavbarProps is a type that represents the props that the Navbar component can receive.
 * It has two properties: name and link.
 */
type NavbarProps = {
    name: string;
    link: string;
}

/**
 * The Navbar component is a functional component that receives props of type NavbarProps.
 * It logs the props to the console and renders a navbar with the name from the props.
 * @param props - The props that the Navbar component receives.
 * @returns The JSX that represents the navbar.
 */
export const Navbar = (props: any) => {


    // Return the JSX that represents the navbar
    return (
        <nav style={{ display: 'flex', textAlign: 'match-parent' }}>
            {/* Render a heading with the text "Name: " and set the color to white */}
            <h4 style={{ color: "white" }}>Name: </h4>
            {/* Render a paragraph with the name from the props and set the color to white */}
            <h4 style={{ color: "white" }}>{props.name}</h4>
        </nav>
    );
}

