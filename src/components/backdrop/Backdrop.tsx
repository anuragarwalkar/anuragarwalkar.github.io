import React from "react";
import './Backdrop.scss';

export interface BackdropProps {
    hide: () => void;
    show: boolean;
}

const Backdrop: React.FunctionComponent<BackdropProps> = (props) => {
    const showBackdrop = ["backdrop", props.show ? "show" : null]
  return <div className={showBackdrop.join(' ')} onClick={props.hide}></div>;
};

export default Backdrop;
