import React from "react";
import { fetchAllUser } from "../../lib/helper";
import Card from "../../src/components/Card";

function Avengers(props) {
  const { data } = props;
  const arr = [1, 2, 3, 4, 5, 5];

  try {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((obj, index) => {
          return <Card result={obj} key={index} />;
        })}
      </div>
    );
  } catch (e) {
    return null;
  }
}

export async function getServerSideProps() {
  const data = await fetchAllUser();
  return { props: { data } };
}

export default Avengers;
