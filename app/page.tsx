import { Quote } from "@/components/atoms/Quote/Quote";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const { quote } = await response.json();
  return { title: "The Wave Studio 🌊", description: quote };
}

const getRandomQuote = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random", {
    next: {
      revalidate: 5,
    },
  });
  const quote = await response.json();
  return quote;
};

export default async function Home() {
  const randomQuote = await getRandomQuote();
  const { quote } = randomQuote;
  return (
    <main>
      <div className="container">
        <Quote quote={quote} />
      </div>
    </main>
  );
}
