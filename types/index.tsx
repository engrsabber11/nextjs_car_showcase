import { MouseEventHandler } from "react";

export interface SearchManufacturerProps {
  manufacturer: String;
  setManufacturer: (manufacturer: string) => void;
}

export interface CustomButtonInterface {
  title: string;
  containerStyle?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface SearchProps {
  model: string;
  manufacturer: string;
  fuel: string;
  year: number;
  limit: number;
}

interface CustomFilterOption {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: CustomFilterOption[];
  setFilter: any;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
