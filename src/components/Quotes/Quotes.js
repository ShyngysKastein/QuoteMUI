import React from 'react';
import Quote from "./Quote/Quote";
import {Box} from "@mui/material";

const Quotes = ({quotes, deleteQuote, editQuote}) => {
  return (
    <Box sx={{width: "60%"}}>
      {quotes.length > 0 ?
        <Box>
          {quotes.map(quote => {
            return (
              <Quote
                deleteQuote={() => deleteQuote(quote.id)}
                editQuote={() => editQuote(quote.id)}
                key={quote.id}
                author={quote.author}
                text={quote.text}
              />
            )
          })}
        </Box>
        :
        <Box>Цитаты отсутствуют</Box>
      }
    </Box>
  )
}

export default Quotes;
