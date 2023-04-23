import { Quote } from "@/components/atoms/Quote/Quote";

const getRandomQuote = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
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

// export const metadata = {
//   title: "The Wave Studio 🌊",
//   description:
//     "Siamo una Digital Agency di Catania di 25+ persone fortemente motivate a crescere. Crediamo nella qualità dei nostri lavori e nell'impatto che portano.",
// };
