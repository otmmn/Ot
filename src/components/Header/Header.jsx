import { Headers } from "../../Config/Headers";

export const Header = () => {
  return (
    <div>
      <h1>This is your trusted header</h1>
      <ul>
        {Headers.map((Header, key) => (
          <li key={key}>{Header}</li>
        ))}
      </ul>
    </div>
  );
};
