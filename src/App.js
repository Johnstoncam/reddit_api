import React, { useState, useEffect } from 'react'
import Article from './components/Article'

function App() {
    const [articles, setArticles] = useState([])
    const [subreddit, setSubreddit] = useState('wallstreetbets')
    const [limit, setLimit] = useState('25')
    
    useEffect(() => {
      fetch("https://www.reddit.com/r/" + subreddit +".json?limit=" + limit).then(
        res => {
          if (res.status !== 200) {
            console.warn("Something's up with the api");
            return;
          }
          res.json().then(data => {
            if (data != null)
              setArticles(data.data.children);
          });
        }
      )
    }, [subreddit, limit]);

    return (
      <div className="App">
        <header>
          <input class="subreddit_input" onChange={event => setSubreddit(event.target.value)} value={subreddit} />
          <br/>
          {/* <input class="limit_input" onChange={event => setLimit(event.target.value)} value={limit} /> */}
          <select class="limit_input" onChange={event => setLimit(event.target.value)} value={limit}>
            <option value={23} onClick={event => setLimit(event.target.value)}>25</option>
            <option value={48} onClick={event => setLimit(event.target.value)}>50</option>
            <option value={73} onClick={event => setLimit(event.target.value)}>75</option>
            <option value={98} onClick={event => setLimit(event.target.value)}>100</option>
          {/* what's going on here? which listener actually feeds the value to the setState? Do the values here need to be strings or numbers? */}
          </select>
        </header>
        <div className="articles">
          {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}
        </div>
      </div>
    );
  }

export default App;