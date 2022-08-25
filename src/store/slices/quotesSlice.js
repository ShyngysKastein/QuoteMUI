import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from '../../axios-quotes';

const initialState = {
  categories: [],
  quotes: [],
  isLoading: false,
  error: null,
  author: '',
  text: '',
  category: ''
}

export const fetchQuotes = createAsyncThunk(
  'quotes/fetch/quotes',
  async () => {
    const res = await axios.get("quotes.json");
    return res.data;
  }
)

export const fetchCategories = createAsyncThunk(
  'quotes/fetch/categories',
  async () => {
    const res = await axios.get('categories.json');
    return res.data;
  }
)

export const fetchQuoteByCategory = createAsyncThunk(
  'quotes/fetch/quotes/by',
  async (category) => {
    const res = await axios.get(`quotes.json?orderBy="category"&equalTo="${category}"`);
    return res.data;
  }
)

export const deleteQuote = createAsyncThunk(
  'quotes/delete/',
  async (id) => {
    await axios.delete(`quotes/${id}.json`);
    return id;
  }
)

export const createQuote = createAsyncThunk(
  'quotes/create',
  async (quote) => {
    const res = await axios.post('quotes.json', quote);
    return res.data;
  }
)

export const getQuoteById = createAsyncThunk(
  'quotes/create/id',
  async (id) => {
    const res = await axios.get(`quotes/${id}.json`);
    console.log(res.data);
    return res.data;
  }
)
export const editQuote = createAsyncThunk(
  'quotes/edit',
  async (payload) => {

    const res = await axios.put(`quotes/${payload.quoteId}.json`, payload.quote);
    return res.data;
  }
)
const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    inputHandler: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    clearInputs: (state) => {
      state.author = '';
      state.text = '';
      state.category = ''
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.quotes = Object.keys(action.payload).map(id => {
          return {id, ...action.payload[id]};
        });
        state.isLoading = false;
      })
      .addCase(fetchCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = Object.keys(action.payload).map(id => {
          return {title: action.payload[id], id};
        });
        state.isLoading = false;
      })
      .addCase(fetchQuoteByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchQuoteByCategory.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(fetchQuoteByCategory.fulfilled, (state, action) => {
        state.quotes = Object.keys(action.payload).map(id => {
          return {id, ...action.payload[id]};
        });
        state.isLoading = false;
      })
      .addCase(deleteQuote.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteQuote.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(deleteQuote.fulfilled, (state, action) => {
        const index = state.quotes.findIndex(quote => quote.id === action.payload);
        state.quotes.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(createQuote.pending, state => {
        state.isLoading = true;
      })
      .addCase(createQuote.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(createQuote.fulfilled, (state) => {
        state.isLoading = false;
        state.author = '';
        state.text = '';
        state.category = ''
      })
      .addCase(getQuoteById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getQuoteById.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      })
      .addCase(getQuoteById.fulfilled, (state, action) => {
        state.author = action.payload.author;
        state.text = action.payload.text;
        state.category = action.payload.category;
        state.isLoading = false;
      })
      .addCase(editQuote.pending, state => {
        state.isLoading = true;
      })
      .addCase(editQuote.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      })
      .addCase(editQuote.fulfilled, (state) => {
        state.isLoading = false;
        state.author = '';
        state.text = '';
        state.category = ''
      })
  }
})

export const {inputHandler, clearInputs} = quotesSlice.actions;
export default quotesSlice.reducer;
