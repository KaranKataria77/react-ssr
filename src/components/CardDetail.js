import React from "react";
import Image from "next/image";
import { formatDate } from "../../lib/helper";

function CardDetail({ data }) {
  try {
    return (
      <>
        <div className="detail">
          <div className="img">
            {data?.image?.medium && data?.image?.medium != undefined ? (
              <Image
                src={data?.image?.medium}
                height={400}
                width={350}
                alt={data?.name}
              />
            ) : null}
          </div>
          <div>
            <h1>{data?.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: data?.summary }}></p>
            {data?.language && data.language != undefined ? (
              <p>
                <span>Language: </span> {data?.language}
              </p>
            ) : null}
            {data?.genres && data?.genres[0] && data?.genres[0] != undefined ? (
              <p>
                <span>Genre:</span>{" "}
                {data?.genres && data?.genres[0] != undefined
                  ? data?.genres[0]
                  : ""}
              </p>
            ) : null}
            {data?.runtime && data?.runtime != undefined ? (
              <p>
                <span>Runtime: </span> {data?.runtime}
              </p>
            ) : null}
            {data?.premiered && data?.premiered != undefined ? (
              <p>
                <span>Released: </span> {formatDate(data?.premiered)}
              </p>
            ) : null}
            {data?.rating?.average && data?.rating?.average != undefined ? (
              <p>
                <span>Rating: </span> {data?.rating?.average}
              </p>
            ) : null}
            {data?.network?.country?.name &&
            data?.network?.country?.name != undefined ? (
              <p>
                <span>Country: </span> {data?.network?.country?.name}
              </p>
            ) : null}
          </div>
        </div>
        <style jsx>{`
          .img {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .detail p {
            font-size: 22px;
          }
          .detail p span {
            font-weight: 700;
          }
          .detail {
            width: 60%;
            border: 5px solid black;
            padding: 20px;
            margin: auto;
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </>
    );
  } catch (e) {
    return null;
  }
}

export default CardDetail;
