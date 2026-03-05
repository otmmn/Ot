import { Quotes } from "../../Config/Quotes";
import { Timer } from "../../Config/Timer";

export const Panel = () => {
  const timeQuotesIndex = (index) => {
    return Math.floor(Math.random() * index);
  };

  const { hours, minutes, seconds } = Timer;
  const { timeQuotes } = Quotes;

  return (
    <div>
      <div className="flex flex-col items-center justify-center height text-7xl py-10 border-b-5">
        {hours}:{minutes}:{seconds}
        <p className="text-xl my-7">
          {timeQuotes[timeQuotesIndex(timeQuotes.length)]}
        </p>
      </div>
    </div>
  );
};
