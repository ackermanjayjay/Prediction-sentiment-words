import { Center, Box, Text, Stack } from "@chakra-ui/react"
import InputController from "../Components/Input"
const Home = () => {
    return (
        <>
            <Center>
                <Box mt={5} boxShadow='inner' p='6' rounded='md' bg="tomato" >
                    <Text fontSize={"2xl"} color={"white"}>Sentiment Kata Dengan React Js</Text>
                </Box>
            </Center>

            <Center>
                <Box mt={5} mx={5}>
                    <Stack spacing={3}>
                        <InputController></InputController>
                    </Stack>
                </Box>
            </Center>
        </>
    )
}
export default Home