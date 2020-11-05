import React from 'react';
import "../styles/NotFoundPage.scss";

const NotFoundPage = () => {
    return (
      <>
        <div>
    <h1 style={{fontSize: '4em'}}>404</h1>
<p>Oops! Something is wrong.</p>
<a class="NotFoundButton" href="/">Go back in initial page, is better.</a>
        </div>
</>
    )
}
export default NotFoundPage;