import React from 'react';
import {Button, Card, Typography} from "@mui/material";

const Quote = ({text, author, editQuote, deleteQuote}) => {
  return (
    <Card sx={{margin: '40px'}} variant='outlined'>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {text}
      </Typography>
      <Typography variant="h5" component="div">
        - {author}
      </Typography>
      <Button onClick={deleteQuote}>Удалить</Button>
      <Button onClick={editQuote}>Редактировать</Button>
    </Card>
  )
}

export default Quote;
