import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import {Backdrop, CircularProgress} from "@mui/material";
import {
  clearInputs,
  editQuote,
  fetchCategories,
  getQuoteById,
  inputHandler
} from "../../store/slices/quotesSlice";

const QuotesEdit = () => {
  const {isLoading, author, text, category, categories} = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(clearInputs());
    dispatch(fetchCategories());
    console.log(params.id);
    if(params.id) {
      dispatch(getQuoteById(params.id));
    }
  }, [dispatch, params.id])

  const changeHandler = (e) => {
    const {name, value} = e.target;
    dispatch(inputHandler({name, value}));
  }

  const editQuoteHandler = (e) => {
    e.preventDefault();
    const quote = {
      author,
      text,
      category
    }
    dispatch(editQuote({quote, quoteId: params.id}));
    navigate(`/quotes/${category}`);
  }

  return (
    <>
      {isLoading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <QuoteForm
          categories={categories}
          author={author}
          handleChange={changeHandler}
          submitHandler={editQuoteHandler}
          category={category}
          buttonText="Редактировать"
          text={text}
        />
      )
      }
    </>
  )
}

export default QuotesEdit;
