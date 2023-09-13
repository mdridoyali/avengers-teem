

const Card = ({selectedActors, totalCost, remaining}) => {

    return (
        <div key={selectedActors.id} className="text-center space-y-5 mt-4 text-xl">
              <h2>Total Actors: {selectedActors.length}</h2>
              <p>Remaining: {remaining}</p>
              <p>TotalCost: {totalCost}</p>
              {
                selectedActors.map((actor) => 
                <p key={actor.id} className="text-left pl-10">Name: {actor.name}</p>
                )
              }
              

        </div>
    );
};
export default Card;

