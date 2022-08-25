import React from 'react';
import {Button, Container, FormControl, Input, InputLabel, MenuItem, Select} from "@mui/material";

const QuoteForm = ({categories, category, author, text, handleChange, submitHandler, buttonText = "Создать"}) => {
  return (
    <Container>
      <form onSubmit={submitHandler}>
        <FormControl sx={{mb: '20px'}} fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Age"
            name='category'
            onChange={handleChange}
          >
            <MenuItem value={null}>Выберите категорию</MenuItem>
            {categories.map(category => {
              return <MenuItem key={category.id} value={category.id}>{category.title}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl sx={{mb: '40px'}} fullWidth>
          <InputLabel htmlFor="author-field">Author</InputLabel>
          <Input name='author' id="author-field" aria-describedby="my-helper-text" value={author} onChange={handleChange} />
        </FormControl>
        <FormControl sx={{mb: '40px'}} fullWidth>
          <InputLabel htmlFor="text-field">Quote Title</InputLabel>
          <Input name='text' id="text-field" value={text} onChange={handleChange} />
        </FormControl>
        <Button type='submit'>{buttonText}</Button>
      </form>
    </Container>
  )
}

export default QuoteForm;
