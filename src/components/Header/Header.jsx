import { Headers } from "../../Config/Headers";

export const Header = () => {
  return (
    <div>
      <ul className="flex items-center justify-center bg-black">
        {Headers.map((Header, key) => (
          <li key={key} className="text-white p-2 px-7">
            {Header}
          </li>
        ))}
      </ul>
    </div>
  );
};
