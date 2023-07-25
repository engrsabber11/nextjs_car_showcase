"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import CustomFilter from "@/components/partials/CustomFilter";
import SearchBar from "@/components/partials/SearchBar";
import { fetchCars } from "@/utils";
import CarCard from "@/components/partials/CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import { SearchProps } from "@/types";
import ShowMore from "@/components/partials/ShowMore";
import { useEffect, useState } from "react";

export default function Home() {
  // const allCars = await fetchCars({
  //   model: searchParams.model || "",
  //   manufacturer: searchParams.manufacturer || "bmw",
  //   fuel: searchParams.fuel || "",
  //   year: searchParams.manufacturer || "",
  //   limit: searchParams.limit || 10,
  // });
  const [loading, setLoading] = useState(false);
  const [allCars, setAllCars] = useState([]);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2020);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const allCars = await fetchCars({
        model: model || "",
        manufacturer: manufacturer || "bmw",
        fuel: fuel || "",
        year: year || 2022,
        limit: limit || 10,
      });
      setAllCars(allCars);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Car Catalouge</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setModel={setModel} setManufacturer={setManufacturer} />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" setFilter={setFuel} options={fuels} />
            <CustomFilter
              title="Year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((carData) => (
                <CarCard car={carData} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  height={50}
                  width={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={(limit || 10) > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opps!, no result</h2>
          </div>
        )}
      </div>
    </main>
  );
}
