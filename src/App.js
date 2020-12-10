import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./component/Header";
import Map from "./component/Map";
import Loader from "./component/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      console.log(res.data.events);
      setEventData(res.data.events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
