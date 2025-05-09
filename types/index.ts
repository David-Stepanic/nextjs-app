import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles? : string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    //  specificirali smo da to bude eventhandler nad htmlbutton element
    btnType?: "button" | "submit";
}