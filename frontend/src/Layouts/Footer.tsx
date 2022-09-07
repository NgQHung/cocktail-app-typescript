import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-200">
            <ul className="flex flex-wrap text-xs sm:px-8 sm:py-12 py-8 ">
                <li className="sm:w-1/4 pt-4 px-8">
                    <h2 className="text-sm mb-2 ">Download</h2>
                    <p className="break-words opacity-70 ">
                        Enjoy the complete experience: get Cocktail Flow on <a>Android </a>,
                        <a>iOS </a>, <a>Windows 8 </a>
                        or <a>Windows Phone </a>!
                    </p>
                </li>
                <li className="sm:w-1/4 pt-4 px-8">
                    <h2 className="text-sm mb-2 ">Community</h2>
                    <p className="break-words opacity-70 ">
                        Join cocktail lovers from across the globe on <a>Facebook </a> and
                        <a> Twitter</a>.
                    </p>
                </li>
                <li className="sm:w-1/4 pt-4 px-8">
                    <h2 className="text-sm mb-2">About us</h2>
                    <p className="break-words opacity-70 ">
                        Made with ♥︎ in Budapest by Distinction. Connect with the team on{" "}
                        <a>Facebook</a>,<a> Twitter </a> or<a> LinkedIn</a>, or check out our
                        Privacy Policy.
                    </p>
                </li>
                <li className="sm:w-1/4 py-4 px-8 ">
                    <h2 className="text-sm mb-2">Contact</h2>
                    <p className="break-words opacity-70 ">
                        Say hi anytime at<a> team@cocktailflow.com</a>, or give us feedback here:
                        <a> http://cocktailflow.uservoice.com</a>
                    </p>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
