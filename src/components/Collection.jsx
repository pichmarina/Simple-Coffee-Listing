import React, { useEffect, useState } from "react";
import sign from "../assets/vector.svg";
import filledStar from "../assets/Star_fill.svg";
import emptyStar from "../assets/Star.svg";

const Collection = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [allCoffee, setAllCoffee] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffeeData(data);
        setAllCoffee(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAvailble() {
    setIsAvailable(true);
    const availableCoffees = coffeeData.filter((coffee) => coffee.available);
    setCoffeeData(availableCoffees);
  }

  function handleAll() {
    setIsAvailable(false);
    setCoffeeData(allCoffee);
  }

  return (
    <div className="bg-[#111315] w-[90%] lg:w-[80%] lg:h-[950px] md:h-[1400px] sm:h-[2300px] absolute top-[200px] lg:top-[250px] md:top-[300px] sm:top-[400px] rounded-xl flex flex-col items-center justify-start overflow-hidden">
      <div className="relative h-auto w-[90%] lg:w-[520px]  md:w-[480px] sm:w-[400px] flex flex-col items-center justify-start text-[#FEF7EE]">
        <h1 className="text-[30px] font-bold z-10 mt-[70px]  relative">
          Our Collection
        </h1>

        <p className="md:w-[480px] md:h-[80px] z-10 text-center text-[#6F757C] font-medium sm:mb-3 sm:w-[400px] sm:h-[100px]">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="w-[120px] h-[40px] rounded-xl text-[14px]"
            style={{ backgroundColor: isAvailable ? "#111315" : "#6F757C" }}
            onClick={handleAll}
          >
            All Products
          </button>
          <button
            className="w-[120px] h-[40px] rounded-xl text-[14px]"
            onClick={handleAvailble}
            style={{ backgroundColor: isAvailable ? "#6F757C" : "#111315" }}
          >
            Available Now
          </button>
        </div>

        <img
          src={sign}
          className="absolute top-5 left-56 w-[255px]  max-h-full object-contain"
        />
      </div>
      <div className="lg:mt-[10px] md:mt-[20px] sm:mt-[50px] grid justify-items-center xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {coffeeData && coffeeData.length > 0 ? (
          coffeeData.map((coffee) => (
            <div
              key={coffee.id}
              className="w-[280px] h-[250px] text-[#FEF7EE] relative mb-[50px]"
            >
              {coffee.popular && (
                <div className="bg-[#F6C768] w-[70px] h-[20px] absolute top-3 left-4 rounded-xl text-[#111315] flex items-center justify-center text-[12px] font-bold">
                  Popular
                </div>
              )}
              <img
                src={coffee.image}
                className="rounded-xl w-full"
                alt={coffee.name}
              />
              <div className="mt-3 h-[30px] flex items-center justify-between">
                <p className="h-full text-[18px] font-semibold">
                  {coffee.name}
                </p>
                <p className="w-[60px] h-[25px] bg-[#BEE3CC] text-[#111315] font-bold rounded-md flex items-center justify-center text-[14px]">
                  {coffee.price}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2">
                {coffee.rating != null ? (
                  <div className="flex items-center justify-center gap-1">
                    <img src={filledStar} alt="filled" />
                    <p className="font-semibold">{coffee.rating}</p>
                    <p className="text-[#6F757C] text-[14px] font-semibold">
                      ({coffee.votes} votes)
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-1">
                    <img src={emptyStar} alt="empty" />
                    <p className="text-[#6F757C] font-semibold text-[14px]">
                      No ratings
                    </p>
                  </div>
                )}
                {!coffee.available && (
                  <p className="text-[#ED735D]">Sold Out</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-[#FEF7EE]">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
