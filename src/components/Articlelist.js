import React from 'react'
import Article from './Article.js'

function ArticleList({blogData}) {
    const mappedPosts = blogData.posts.map((postData) => (<Article key={postData.id} title={postData.title} date={postData.date} preview={postData.preview} />))
    console.log(blogData)
    return ( 
        <main> 
        {mappedPosts}
        </main>
    )

  }

export default ArticleList