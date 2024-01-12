"use client";

import axios from "axios";

const Button = () => {
  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data } = await axios.post(
      "https://2k4ggtdozx2vpouskda54cqfvm0mdekt.lambda-url.us-east-1.on.aws/",
      {
        url: "http://findwhatfonts.coooooom/",
      }
    );

    console.log(data);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <button>Button</button>
    </form>
  );
};

export default Button;
