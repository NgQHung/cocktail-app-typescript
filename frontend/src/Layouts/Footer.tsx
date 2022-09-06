import React from "react";

const Footer = () => {
    return (
        <div className="flex w-full bg-gray-200">
            <ul className="flex justify-center text-xs pl-48 pr-48 pt-12 pb-12">
                <li className="w-1/4 mr-8">
                    <h2 className="text-sm mb-2 ">Download</h2>
                    <p>
                        Enjoy the complete experience: get Cocktail Flow on Android, iOS, Windows 8
                        or Windows Phone!
                    </p>
                </li>
                <li className="w-1/4 mr-8">
                    <h2 className="text-sm mb-2">Community</h2>
                    <p>Join cocktail lovers from across the globe on Facebook and Twitter.</p>
                </li>
                <li className="w-1/4 mr-8">
                    <h2 className="text-sm mb-2">About us</h2>
                    <p>
                        Made with ♥︎ in Budapest by Distinction. Connect with the team on Facebook,
                        Twitter or LinkedIn, or check out our Privacy Policy.
                    </p>
                </li>
                <li className="w-1/4 ">
                    <h2 className="text-sm mb-2">Contact</h2>
                    <p>
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
