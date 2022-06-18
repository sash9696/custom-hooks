import "./App.css";
import useFetchData from "./components/customHooks/useFetchData";

function App() {
  const [usersData] = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [photosData] = useFetchData(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (
    <div className="app">
      <h1>Custom Hook</h1>

      {usersData ? <h4>{usersData[0]?.name}</h4> : null}
      {photosData ? <img height={200} src={photosData[0]?.url} /> : null}
    </div>
  );
}

export default App;
