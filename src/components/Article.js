import React from 'react'

const Article = (articles) => {
    let base_url = 'https://www.reddit.com'

    return (
        <article>
        <a href={ base_url + articles.article.permalink } target="_blank">
            <h3>{ articles.article.title } {articles.article.total_awards_received}</h3>
            <p></p>
        </a>
        </article>
    )
    }

export default Article