import { useContext } from "react";
import { Option } from "./option";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { isSelectedContext } from "./startpage";

export const SelectArea = () => {
    const { isSelected } = useContext(isSelectedContext);
    let cnt = 0;
    for (let i = 0; i < isSelected.length; i++) if (isSelected[i]) cnt++;
    return (
        <>
            <VStack spacing='0px' align='stretch' mt='10px' ml='10%' width='80%' height='300px' maxHeight='300px' backgroundColor='lightgreen' overflow='auto' border='2px solid green'>
                {
                    isSelected.map((value, id) => <Option id={id}></Option>)
                }
            </VStack>
            <Box ml='10%'><Text>選択中の札：{cnt}枚</Text></Box>
        </>
    );
};