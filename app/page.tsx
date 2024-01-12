"use client";

import axios from "axios";

export default function Home() {
  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      "https://tafs7ipxsf.execute-api.us-east-1.amazonaws.com/",
      {
        cache: "no-cache",
      }
    );

    const data = await response.json();

    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleOnSubmit}>
        <button>Button</button>
      </form>
    </main>
  );
}
