import { Input, Button, Text } from "@chakra-ui/react";
import { StemmerId } from "@nlpjs/lang-id";
import { useState } from "react";
// import {SentimentAnalyzer} from "@nlpjs/sentiment"
const InputController = () => {

    // const core = new Core ()
    // const sentiment = new SentimentId()
    const stemmer = new StemmerId()
    const [Result, setResult] = useState();
    const [Inputter, setInputter] = useState()

    // Prediksi
    const Predict = () => {
        const get = Inputter.split(" ")
        setResult(stemmer.stem(get))
        const stemword = stemmer.stem(get)
        setResult(stemword)
    }
    return (
        <>
            <Input 
                size="lg" 
                value={Inputter}
                onChange={e => setInputter(e.target.value)}
            />
            <Button
                colorScheme="teal"
                size="sm"
                onClick={Predict}
            >
                Prediksi
            </Button>
            <Text>{Result}</Text>

        </>
    );
};
export default InputController;
