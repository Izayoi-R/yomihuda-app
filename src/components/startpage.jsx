import { createContext, useState } from "react";
import { SelectArea } from "./selectArea";

export const isSelectedContext = createContext();

export const Startpage = () => {
    const hudaList = ["むらさめの", "すみのえの", "めぐりあいて", "ふくからに", "さびしさに", "ほととぎす", "せをはやみ", "むらさめの", "すみのえの", "めぐりあいて", "ふくからに", "さびしさに", "ほととぎす", "せをはやみ"];
    const [isSelected,setIsSelected] = useState([...Array(hudaList.length)].map(()=>false));

    return (
        <isSelectedContext.Provider value={{isSelected,setIsSelected,hudaList}}>
            <SelectArea ></SelectArea>
        </isSelectedContext.Provider>
    );
};