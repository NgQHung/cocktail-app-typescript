import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-200">
            <ul className="flex flex-wrap text-xs sm:px-8 sm:py-12 py-8 ">
                <li className="sm:w-1/4 pt-4 px-8">
                    <h2 className="text-sm mb-2 ">Download</h2>
                    <p className="break-words opacity-70 ">
                        Enjoy the complete experience: get Cocktail Flow on{" "}
                        <Link to="">Android </Link>,<Link to="">iOS </Link>,{" "}
                        <Link to="">Windows 8 </Link>
                        or <Link to="">Windows Phone </Link>!
                    </p>
                </li>
                <li className="sm:w-1/4 pt-4 px-8">
                    <h2 className="text-sm mb-2 ">Community</h2>
                    <p className="break-words opacity-70 ">
                        Join cocktail lovers from across the globe on <Link to="">Facebook </Link>{" "}
                        and
                        <Link to=""> Twitter</Link>.
                    </p>
                </li>
                <li className="sm:w-1/4 pt-4 px-8">
                    <h2 className="text-sm mb-2">About us</h2>
                    <p className="break-words opacity-70 ">
                        Made with ♥︎ in Budapest by Distinction. Connect with the team on{" "}
                        <Link to="">Facebook</Link>,<Link to=""> Twitter </Link> or
                        <Link to=""> LinkedIn</Link>, or check out our Privacy Policy.
                    </p>
                </li>
                <li className="sm:w-1/4 py-4 px-8 ">
                    <h2 className="text-sm mb-2">Contact</h2>
                    <p className="break-words opacity-70 ">
                        Say hi anytime at<Link to=""> team@cocktailflow.com</Link>, or give us
                        feedback here:
                        <Link to=""> http://cocktailflow.uservoice.com</Link>
                    </p>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
