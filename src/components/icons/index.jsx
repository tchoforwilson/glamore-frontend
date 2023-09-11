import React from "react";
import {
    AiFillDashboard,
    AiOutlineUnorderedList,
    AiOutlineProfile,
    AiFillSetting,
} from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { default as nn } from "./iconComponent.module.css";
import { default as cnn } from "classnames";

// Abbreciations
// vpIcon= vendor pannel icon 

// TODO: Remember to personalize your icon
// TODO: Create your own class then import the icons from the class you created

/**
 * @breif Render an icon
 */

// 

// a class vendor that will contain all the icons concerning the vendor in any page.
// the constructor in this class is actually useless "has been set just to eliminate warning errors"
class Vendor {
    constructor(newIcon) {
        this.icon = newIcon;
    }
    /**
     * @breif Render an icon
     * @param {String} label text to which the icon will be attached to
     * @param {int} index takes the id of the label for track changes
     * @param {int} status takes the values that causes the icon to change style
     * @returns {JSX}
     */

    getPannelIcon(label, index, status) {
        // const [ActiveIcon, setActiveIcon] = useState(status)
        // array of object (label and icon)
        var pannelIcon = [
            { dashboard: <AiFillDashboard size={25} className={index === status ? cnn(nn.vpIcon, nn.active) : nn.vpIcon} /> },
            { listings: <AiOutlineUnorderedList size={25} className={index === status ? cnn(nn.vpIcon, nn.active) : nn.vpIcon} /> },
            { orders: <AiOutlineProfile size={25} className={index === status ? cnn(nn.vpIcon, nn.active) : nn.vpIcon} /> },
            { finances: <BsGraphUpArrow size={25} className={index === status ? cnn(nn.vpIcon, nn.active) : nn.vpIcon} /> },
            { marketing: <HiSpeakerphone size={25} className={index === status ? cnn(nn.vpIcon, nn.active) : nn.vpIcon} /> },
            { settings: <AiFillSetting size={25} className={index === status ? cnn(nn.vpIcon, nn.active) : nn.vpIcon} /> },
        ];

        // Find the object with the matching label/key
        const labelValue = pannelIcon.find((obj) => Object.keys(obj)[0] === label);

        // Check if the label pass is found and return the value if available
        if (labelValue) {
            return labelValue[label];
        }
        return null
    }
}

export { Vendor };
