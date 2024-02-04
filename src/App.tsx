// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import { FaCalendarAlt } from "react-icons/fa";
import Like from "./components/Like";
import Image from "./components/Image/Image";

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

      <FaCalendarAlt color="red" size="40" />

      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisility(false)}>Vera je car!</Alert>
      )} */}
      {/* <Button onClick={() => setAlertVisility(true)}>Veliko dugme</Button> */}
      <Like onClick={() => console.log("clicked")} />
      <Image path="/src/assets/react.svg" imeKlase="img-responsive" />
    </div>
  );
}

export default App;
