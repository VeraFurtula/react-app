import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  //const [alertVisible, setAlertVisility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisility(false)}>Vera je car!</Alert>
      )}
      <Button onClick={() => setAlertVisility(true)}>Veliko dugme</Button> */}
    </div>
  );
}

export default App;
