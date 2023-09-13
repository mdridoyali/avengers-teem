import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectActor = (actor) => {
    const isExit = selectedActors.find((item) => item.id === actor.id);
    let cost = actor.salary;
    if (isExit) {
      return alert("Already Booked");
    } else {
      selectedActors.forEach((item) => {
        cost = cost + item.salary;
         
      });
 setTotalCost(cost) ;
      const totalRemaining = 20000 - cost;
   
      setRemaining(totalRemaining);
      setSelectedActors([...selectedActors, actor]);
    }
  };

  return (
    <div className="flex gap-5  body px-4 pt-8 pb-5">
      {/* Card Container */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:w-3/5 lg:w-3/4">
        {allActors.map((actor) => (
          <div
            key={actor.id}
            className=" card text-center text-white border  h-[340px] space-y-5 p-4"
          >
            <img className="mx-auto rounded-full w-24" src={actor.image} />
            <h2 className="font-bold ">{actor.name}</h2>
            <p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </small>
            </p>
            <div className="flex justify-around">
              <p>Salary: ${actor.salary}</p>
              <p>Role: {actor.role}</p>
            </div>
            <button
              onClick={() => handleSelectActor(actor)}
              className="bg-purple-600 px-5 py-1 rounded-lg font-bold "
            >
              Select
            </button>
          </div>
        ))}
      </div>

      {/* Card / Aside bar */}
      <div className=" text-white border md:w-2/5 lg:w-1/4">
        <Card
          selectedActors={selectedActors}
          totalCost={totalCost}
          remaining={remaining}
        ></Card>
      </div>
    </div>
  );
};

export default Home;
