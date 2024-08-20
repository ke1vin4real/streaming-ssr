import React, { use, Suspense } from 'react';

function CommentsScript({ comments: commentsPromise }) {
  
  const comments = use(commentsPromise);

  return <script dangerouslySetInnerHTML={{
    __html: `window.__setComments_data(${JSON.stringify(comments)})`
  }}></script>
}

export default ({children,comments}) => {
  return <html>
    <head>
      <link ref="stylesheet" href="/index.css"></link>
    </head>
    <body>
      <div id='root'>{children}</div>
      <script src="/index.js">
      </script>
      <Suspense>
        <CommentsScript comments={comments}></CommentsScript>
      </Suspense>
    </body>
  </html>
}
