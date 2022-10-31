import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Heading, Box, Center, Text, Button, HStack, Link } from "@chakra-ui/react";

const colors = [
  "#e52165",
  "#a2d5c6",
  "#e2d810",
  "#f5f0e1",
  "#ecc19c",
  "#c4a35a",
];

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState([]);
  const [color, setColor] = useState("#ab53c2");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://type.fit/api/quotes");
      setAllQuotes(data);
      let random = Math.floor(Math.random() * data.length);
      setCurrentQuote(data[random]);
    };
    fetchData();
  }, []);

  const newQuote = () => {
    let random = Math.floor(Math.random() * allQuotes.length);
    setCurrentQuote(allQuotes[random]);
    let randomColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColor]);
  };

  return (
    <div className="App">
      
    {document.body.style = `background: ${color};`}
      <Center mt={60}>
        <Box
        id="quote-box"
          className="main-box"
          boxShadow={"xl"}
          rounded={"md"}
          overflow={"hidden"}
          bg={color}
        >
          <Text id = "text" fontSize="xl" mt={3}>
            {currentQuote.text}
          </Text>
          <Heading id="author" mt={3}>{currentQuote.author}</Heading>
          <HStack p={5} direction={"row"} mt={5} spacing={375}>
            <Button  colorScheme={"twitter"}><a id="tweet-quote" href="https://twitter.com/intent/tweet">Twitter</a></Button>
            <Button id="new-quote" colorScheme={"whatsapp"} onClick={newQuote}>
              
              New Quote
            </Button>
          </HStack>
        </Box>
      </Center>
    </div>
  );
}

export default App;
