import { Card, CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["Tanjiro"]);

  /*  const [isLoading, setisLoading] = useState(false);
  const list: string[] = ["Tanjiro"];
  const handleClick = () => setisLoading(!isLoading);

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "No hay elementos"
  );

  return (
    <>
      <Card>
        <CardBody title={"hola mundo"} text={"El texto"} />
        {contenido}
      </Card>
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola mundo
      </Button>
    </>
  ); */

  const addMinion = () => setData([...data, "Minion"]);
  const deleteMinion = () => setData(data.slice(0, -1));
  return (
    <>
      <Card>
        <List data={data}></List>
      </Card>
      <Button onClick={addMinion}>Add</Button>
      <Button onClick={deleteMinion}>Add</Button>
    </>
  );
}

export default App;
