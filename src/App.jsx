import React, { useRef, use, Suspense } from "react";

function Comments({ comments }) {

  const commentsResult = use(comments);

  return Array.isArray(commentsResult) && commentsResult.map(comment => {
      return  <p key={comment}>{comment}</p>;
 
  })
}

export default function Index({comments}) {

  const inputRef = useRef(null)

  const onSubmit = () => {
    if(inputRef.current) {
      alert(`Write a comment:${inputRef.current?.value}`)
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <div>
        <div>Product</div>
        <p>Price</p>
        <input ref={inputRef} />
        <button onClick={onSubmit}>Add</button>
        <div>
          <div>
            <p>Comments</p>
            <Suspense fallback={<div>Loading</div>}>
              <Comments comments={comments} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
