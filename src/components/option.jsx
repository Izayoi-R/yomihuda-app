import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { isSelectedContext } from "./startpage";

export const Option = (props) => {
    const { isSelected, setIsSelected, hudaList } = useContext(isSelectedContext);
    return (
        <Box justifyItems='center' height='30px' maxHeight='30px' borderBottom='2px solid green' onClick={() => {
            setIsSelected(isSelected.map((value, id) => id === props.id ? !value : value));
        }} bgColor={isSelected[props.id] ? "lightblue" : "" }>
            <Text px='4px' fontSize='12px' fontWeight='700'>{hudaList[props.id]}</Text>
        </Box >
    );
};