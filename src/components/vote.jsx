import { Option } from "./option";

export const Vote = (props) => {
    return (
        <>
            {
                props.list.map((huda) => {
                    return <Option name={huda}></Option>;
                })
            }
        </>
    );
}