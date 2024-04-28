import { Vote } from "./vote";

export const Startpage = () => {
    const hudaList = ["むらさめの","すみのえの"];
    return (
        <>
            <Vote list={hudaList}></Vote>
        </>
    );
};