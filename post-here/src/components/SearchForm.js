import React, {useState, useEffect} from 'react';
import axios from 'axios';
 
export default function SearchForm() {
    const [list, setList] = useState([]);

    useEffect(()=> {
        const getList = ()=>{
            axios 
            .get('')          //add the url
            .then(res=>{
                setList(res.data.map(val => val.title))    //alter the res.data and the val.title to match the actual response

            })
            .catch(err => {
                console.log('Search Error', err);
            })
        }

        getList();
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = list.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <section>
          
          <form>
            <label htmlFor="name">Search: </label>
            <input
              id="name"
              type="text"
              name="textfield"
              placeholder="Find post to edit"
              onChange={handleChange}
              value={searchTerm}
            />
          </form>
          <div className="character-list">
            <ul>
              {searchResults.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      );

}