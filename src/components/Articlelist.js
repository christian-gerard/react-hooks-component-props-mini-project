import React from 'react'
import Article from './Article.js'

function ArticleList({posts}) {
    const mappedPosts = posts.map((postData) => (<Article key={postData.id} title={postData.title} date={postData.date} preview={postData.preview} />))

    return ( 
        <main> 
        {mappedPosts}
        </main>
    )
  }

export default ArticleList