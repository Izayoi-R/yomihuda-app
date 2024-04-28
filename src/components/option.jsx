import { Box, Text } from "@chakra-ui/react";

export const Option = (props) => {
    return (
        <Box borderBottom='2px solid green' p='8px'>
            <Box display='inline-block' width='20px' maxWidth='20px'><Text>{props.id}</Text></Box>
            <Box display='inline-block'><Text>{props.huda}</Text></Box>
        </Box>
    );
};