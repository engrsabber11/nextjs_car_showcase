"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-m1-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="Search icon"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({
  setModel,
  setManufacturer,
}: {
  setModel: any;
  setManufacturer: any;
}) => {
  const [searchModel, setSearchModel] = useState("");
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchModel == "" && searchManufacturer == "") {
      return alert("please fill manufacter or model");
    }
    setModel(searchModel.toLowerCase());
    setManufacturer(searchManufacturer.toLowerCase());
    // updateSearchParams(searchManufacturer.toLowerCase(), model.toLowerCase());
  };

  // const updateSearchParams = (manufacter: string, model: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   if (manufacter) {
  //     searchParams.set("manufacturer", manufacter);
  //   } else {
  //     searchParams.delete("manufacter");
  //   }

  //   if (model) {
  //     searchParams.set("model", model);
  //   } else {
  //     searchParams.delete("model");
  //   }
  //   const newPathName = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;
  //   router.push(newPathName);
  // };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Car model icon"
          width={25}
          height={25}
          className="absolute w-[25px] h-[20] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Model Name"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
