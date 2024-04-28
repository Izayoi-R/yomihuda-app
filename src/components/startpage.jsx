import { SelectArea } from "./selectArea";

export const Startpage = () => {
    const hudaList = ["むらさめの", "すみのえの", "めぐりあいて", "ふくからに", "さびしさに", "ほととぎす", "せをはやみ", "むらさめの", "すみのえの", "めぐりあいて", "ふくからに", "さびしさに", "ほととぎす", "せをはやみ"];
    return (
        <>
            <SelectArea hudaList={hudaList}></SelectArea>
        </>
    );
};