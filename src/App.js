import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import QuotesPage from "./containers/QuotesPage/QuotesPage";
import QuotesCreate from "./containers/QuotesCreate/QuotesCreate";
import QuotesEdit from "./containers/QuotesEdit/QuotesEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<QuotesPage/>}/>
          <Route path='quotes' element={<QuotesPage/>}/>
          <Route path='quotes/:category' element={<QuotesPage/>}/>
          <Route path='quotes/create/' element={<QuotesCreate/>}/>
          <Route path='quotes/:id/edit' element={<QuotesEdit/>}/>
          <Route path="*" element={<div>404 not Found</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
