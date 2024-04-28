import { Option } from "./option";
import { Box } from "@chakra-ui/react";

export const SelectArea = (props) => {
    return (<>
        <Box mt='10px' ml='10%' width='80%' height='300px' maxHeight='300px' backgroundColor='lightgreen' overflow='auto' border='2px solid green'>
            {
                props.hudaList.map((value,i) => {
                    return <Option id={i+1} huda={value}></Option>;
                })
            }
        </Box>
    </>);
};