import React from 'react'
import Link from "next/link";

function Error() {
  return (
    <>
    <div className='error'>
        <p><span>404</span> Page not found <br/>
        <Link href="/tv-shows/avengers">
        <a> Click here for home page</a>
        </Link>
        </p>
    </div>
    <style jsx>{`
    .error {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .error p {
        font-size: 20px;
    }
    .error p span {
        color: red;
        font-size: 35px;
    }
    .error p a {
        text-decoration: underline;
        color: red;
        font-size: 25;
    }
    `}</style>
    </>
  )
}

export default Error