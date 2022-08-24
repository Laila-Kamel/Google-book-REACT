import './App.css';
import PageWrapper from './containers/PageWrapper';
import Header from './containers/Header';
import SearchBar from './components/SearchBar/SearchBar';
import BooksList from './components/BooksList/BooksList';
import SearchProvider from './Context/SearchProvider';

function App() {
  return (
    <PageWrapper>
      <Header/>
      <SearchProvider>
      <SearchBar/>
      <BooksList/>
      </SearchProvider>
    </PageWrapper>
  );
}

export default App;
