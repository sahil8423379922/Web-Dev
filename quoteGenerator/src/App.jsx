import React, { useState } from "react";

export default function App() {
  const [count, setcount] = useState(0);

  const quoteObj = [
    {
      quote:
        "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      quote:
        "For every minute you are angry, you lose sixty seconds of happiness.",
      author: "Ralph Waldo ",
    },
    {
      quote: "The purpose of our lives is to be happy",
      author: "Dalai Lama",
    },
    {
      quote:
        "Happiness is when what you think, what you say, and what you do are in harmony.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "The best way to cheer yourself is to try to cheer someone else up.",
      author: "Mark Twain",
    },
    {
      quote: "Happiness is not a goal; it is a by-product.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Most folks are as happy as they make up their minds to be.",
      author: "Abraham Lincoln",
    },
  ];

  const changeQuote = () => {
    if (count < 6) {
      setcount(count + 1);
    } else {
      setcount(0);
    }
  };

  return (
    <div>
      {<p>Value of count = {count}</p>}
      <div
        className="card"
        style={{
          marginLeft: "30%",
          marginRight: "30%",
          marginTop: "10%",
          height: "230px",
          textAlign: "center",
          paddingTop: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <span
          style={{
            fontSize: "25px",
            fontWeight: "normal",
            fontFamily: "arial",
          }}
        >
          {quoteObj[count].quote}
        </span>
        <span style={{ textAlign: "right", paddingRight: "10px" }}>
          {" "}
          - {quoteObj[count].author}
        </span>

        <button
          onClick={changeQuote}
          type="button"
          style={{ marginTop: "20px", marginRight: "50px", marginLeft: "50px" }}
          class="btn btn-danger"
        >
          Change Quote
        </button>
      </div>
    </div>
  );
}
