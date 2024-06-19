import React from "react";
import iconsSprite from '../../assets/image/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?:string
    height?:string
    viewBox?:string
}

export const Icon = (props:IconPropsType) => {
return(

<svg width={props.width ||"50" } height={props.height || "87"} viewBox={props.viewBox ||  "0 0 88 87"} fill="none" xmlns="http://www.w3.org/2000/svg">
<use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
</svg>

);

};

