"use client";
import { Listbox, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Fragment } from "react";
import Image from "next/image";
import { CustomFilterProps } from "@/types";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();
  // const handleUpdateParams = (e: { title: string; value: string }) => {
  //   const newPathName = updateSearchParams(
  //     title.toLowerCase(),
  //     e.value.toLowerCase()
  //   );
  //   router.push(newPathName);
  // };
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
          // handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="up down icon"
              height={20}
              width={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((item) => (
                <Listbox.Option
                  key={item.title}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
