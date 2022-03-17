import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../lib/helper";

function Card(props) {
  const { result } = props;

  try {
    return (
      <>
        <div className="card">
          {result?.show?.image?.medium &&
          result?.show?.image?.medium != undefined ? (
            <Image
              src={result?.show?.image?.medium}
              height={200}
              width={150}
              alt={result?.show?.name}
            />
          ) : null}
          <div className="info">
            <Link href={`/tv-shows/details/${result?.show?.id}`}>
            <a><h1>{result?.show?.name}</h1></a>
            </Link>
            <p><span>Language: </span> {result?.show?.language}</p>
            {
                result?.show?.genres[0] && result?.show?.genres[0] != undefined ? 
                <p><span>Genre:</span> {result?.show?.genres[0]}</p>
                :
                null
            }
            { result?.show?.runtime && result?.show?.runtime != undefined ?
                <p><span>Runtime: </span> {result?.show?.runtime}</p>
                :
                null
            }
            {
                result?.show?.premiered && result?.show?.premiered != undefined ?
                <p><span>Released: </span> {formatDate(result?.show?.premiered)}</p>
                :
                null
            }
            {
                result?.show?.rating?.average && result?.show?.rating?.average != undefined ?
                <p><span>Rating: </span> {result?.show?.rating?.average}</p>
                :
                null
            }
            
            {
                result?.show?.network?.country?.name && result?.show?.network?.country?.name != undefined ?
                <p><span>Country: </span> {result?.show?.network?.country?.name}</p>
                :
                null
            }
          </div>
        </div>
        <style jsx>{`
          .card {
            width: 500px;
            height: 250px;
            border: 5px solid black;
            display: flex;
            align-items: center;
            padding: 15px;
            margin: 3px;
          }
          .card p span{
              font-weight: 700;
          }
          .info {
            margin-left: 20px;
          }
          .info a h1{
              font-size: 25px;
          }
          h1,
          p,a {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </>
    );
  } catch (e) {
    return null;
  }
}

export default Card;
