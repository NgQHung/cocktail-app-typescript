import React from "react";

const Footer = () => {
    return (
        <div className="flex w-full bg-gray-200">
            <ul className="flex flex-wrap text-xs sm:px-8 sm:py-12 ">
                <li className="sm:w-1/4 py-8 px-4">
                    <h2 className="text-sm mb-2 ">Download</h2>
                    <p className="break-words">
                        Enjoy the complete experience: get Cocktail Flow on Android, iOS, Windows 8
                        or Windows Phone!
                    </p>
                </li>
                <li className="sm:w-1/4 py-8 px-4">
                    <h2 className="text-sm mb-2 ">Community</h2>
                    <p className="break-words">
                        Join cocktail lovers from across the globe on Facebook and Twitter.
                    </p>
                </li>
                <li className="sm:w-1/4 py-8 px-4">
                    <h2 className="text-sm mb-2">About us</h2>
                    <p className="break-words">
                        Made with ♥︎ in Budapest by Distinction. Connect with the team on Facebook,
                        Twitter or LinkedIn, or check out our Privacy Policy.
                    </p>
                </li>
                <li className="sm:w-1/4 py-8 px-4 ">
                    <h2 className="text-sm mb-2">Contact</h2>
                    <p className="break-words">
                        Say hi anytime at team@cocktailflow.com, or give us feedback here:
                        http://cocktailflow.uservoice.com
                    </p>
                </li>
                {/* <h2></h2> */}
            </ul>
        </div>
    );
};

export default Footer;
