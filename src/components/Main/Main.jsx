import { Quotes } from "../../Config/Quotes";
import { Timer } from "../../Config/Timer";

export const Main = () => {
  const timeQuotesIndex = (index) => {
    return Math.floor(Math.random() * index);
  };

  const timeQuotes = Quotes.timeQuotes;

  return (
    <div>
      <div className="flex flex-col items-center justify-center height text-7xl py-10 border-b-5">
        {Timer.hours}:{Timer.minutes}:{Timer.seconds}
        <p className="text-xl my-7">
          {timeQuotes[timeQuotesIndex(timeQuotes.length)]}
        </p>
      </div>
    </div>
  );
};
