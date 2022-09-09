import React from "react";
// import ReactDom from "react-dom";
import ReactDom from "react-dom";

interface Props {
    onClose?: () => void;
    children?: React.ReactNode;
}
// interface PropsModal {
//     onClose: () => void;
//     children: React.ReactNode;
// }

const BackDrop: React.FC<Props> = (props) => {
    return <div className="backdrop" onClick={props.onClose} />;
};

const OverLays: React.FC<Props> = (props) => {
    return <div className="modal">{props.children}</div>;
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
