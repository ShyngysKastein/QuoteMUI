import React, {useEffect} from 'react';
import Quotes from "../../components/Quotes/Quotes";
import SideNavigation from "../../components/Navigation/SideNavigation/SideNavigation";
import {Backdrop, Box, CircularProgress, Container} from "@mui/material";
import {deleteQuote, fetchCategories, fetchQuoteByCategory, fetchQuotes} from "../../store/slices/quotesSlice";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";

const QuotesPage = () => {
  const {categories, quotes, isLoading} = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  useEffect(() => {
    if(params.category) {
      dispatch(fetchQuoteByCategory(params.category));
    } else {
      dispatch(fetchQuotes());
    }
  }, [dispatch, params.category])

  const deleteQuoteHandler = (id) => {
    dispatch(deleteQuote(id));
  }

  const editQuoteHandler = (id) => {
    navigate(`/quotes/${id}/edit`);
  }

  return (
    <Container>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <SideNavigation categories={categories}/>
        {isLoading ? <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop> : <Quotes deleteQuote={deleteQuoteHandler} editQuote={editQuoteHandler} quotes={quotes}/>}
      </Box>
    </Container>
  )
}


export default QuotesPage;
