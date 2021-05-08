import React,{useState,useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const [inputSearch, setInputSearch] = useState("");
  const {setSearchTerm } = useGlobalContext();

  useEffect(() => {
    setSearchTerm(inputSearch);
  },[inputSearch])
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <section className="search section">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="searchInput">
              Search your favourite cocktail here
            </label>
            <input type="text" id="searchInput" placeholder="For eg. Paloma" value={inputSearch} onChange={(e) => setInputSearch(e.target.value) }/>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SearchForm
