import React from "react";
import ReactDom from "react-dom";

interface Props {
    onClose?: () => void;
    children?: React.ReactNode;
}

const BackDrop: React.FC<Props> = (props) => {
    return <div className="backdrop" onClick={props.onClose} />;
};

const OverLays: React.FC<Props> = (props) => {
    return (
        <div className="relative w-full h-screen z-50 sm:fixed sm:top-[50%] sm:translate-y-[-50%] sm:left-[50%] sm:translate-x-[-50%] sm:w-[500px] sm:h-[700px]   ">
            {props.children}
        </div>
    );
};

const portalElement = document.getElementById("overlays")!;

const Modal: React.FC<Props> = (props) => {
    return (
        <div>
            {ReactDom.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
            {ReactDom.createPortal(<OverLays>{props.children}</OverLays>, portalElement)}
        </div>
    );
};

export default Modal;
