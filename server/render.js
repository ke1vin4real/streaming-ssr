import React from 'react';
import App from '../src/App';
import HTML from '../src/html';
import { renderToPipeableStream } from 'react-dom/server';

function getComments() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(['This is Great.', 'Worthy of recommendation!']);
    }, 3000)
  );
}

export default async function render(res) {
  const comments = getComments();

  const { pipe } = renderToPipeableStream(
    <HTML comments={comments}>
      <App comments={comments} />
    </HTML>,
    {
      onShellReady() {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        pipe(res);
      },
    }
  );
}
