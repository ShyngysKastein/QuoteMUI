import React, {useEffect} from 'react';
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {clearInputs, createQuote, fetchCategories, inputHandler} from "../../store/slices/quotesSlice";
import {useNavigate} from 'react-router-dom';

const QuotesCreate = () => {
  const {categories, author, category, text} = useSelector(state => state, shallowEqual);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearInputs())
    dispatch(fetchCategories());
  }, [dispatch])

  const changeHandler = (e) => {
    const {name, value} = e.target;
    dispatch(inputHandler({name, value}));
  }
  const createQuoteHandler = (e) => {
    e.preventDefault();
    const quote = {
      author,
      text,
      category
    }
    dispatch(createQuote(quote));
    navigate('/quotes');

  }
  return (
    <QuoteForm
      categories={categories}
      author={author}
      handleChange={changeHandler}
      submitHandler={createQuoteHandler}
      category={category}
      text={text}
    />
  )
}

export default QuotesCreate;
