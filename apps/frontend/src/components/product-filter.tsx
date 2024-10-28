"use client";

import React, { useState } from "react";
import { filterOptions } from "./product-catalog";

interface ProductFilterProps {
  setFilter: React.Dispatch<React.SetStateAction<filterOptions>>;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ setFilter }) => {
  const [fields, setFields] = useState<filterOptions>({});
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedHeights, setSelectedHeights] = useState<number[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const onFilterClick = (type: "color" | "height" | "category", value: string | number) => {
    if (type === "color") {
      setSelectedColors((prev) => {
        const newColors = prev.includes(value as string)
          ? prev.filter((color) => color !== value)
          : [...prev, value as string];

        // Обновляем fields с актуальными значениями
        setFields((prevFields) => ({
          ...prevFields,
          color: newColors,
        }));
        return newColors;
      });
    } else if (type === "height") {
      setSelectedHeights((prev) => {
        const newHeights = prev.includes(value as number)
          ? prev.filter((height) => height !== value)
          : [...prev, value as number];

        // Обновляем fields с актуальными значениями
        setFields((prevFields) => ({
          ...prevFields,
          height: newHeights,
        }));
        return newHeights;
      });
    } else if (type === 'category') {
        setSelectedCategories((prev) => {
            const newCats = prev.includes(value as number)
              ? prev.filter((cat) => cat !== value)
              : [...prev, value as number];
            // Обновляем fields с актуальными значениями
            setFields((prevFields) => ({
              ...prevFields,
              categoryIds: newCats,
            }));
            return newCats;
          });
    }
  };

  return (
    <aside className="p-4 border rounded shadow-md">
      <p className="font-bold text-lg">Категория</p>
      <ul className="space-y-2">
        <li className="flex items-center">
          <input
            type="checkbox"
            id="category-1"
            value="1"
            className="mr-2"
            onChange={() => onFilterClick("category", 1)}
          />
          <label htmlFor="category-1" className="cursor-pointer">
            Жирафы
          </label>
        </li>
        <li className="flex items-center">
          <input
            type="checkbox"
            id="category-2"
            value="2"
            className="mr-2"
            onChange={() => onFilterClick("category", 2)}
          />
          <label htmlFor="category-2" className="cursor-pointer">
            Слоны
          </label>
        </li>
      </ul>
      <p className="font-bold text-lg">Цвет</p>
      <ul className="space-y-2">
        <li className="flex items-center">
          <input
            type="checkbox"
            id="color-yellow"
            value="жёлтый"
            className="mr-2"
            onChange={() => onFilterClick("color", "желтый")}
          />
          <label htmlFor="color-yellow" className="cursor-pointer">
            Жёлтый
          </label>
        </li>
        <li className="flex items-center">
          <input
            type="checkbox"
            id="color-pink"
            value="розовый"
            className="mr-2"
            onChange={() => onFilterClick("color", "розовый")}
          />
          <label htmlFor="color-pink" className="cursor-pointer">
            Розовый
          </label>
        </li>
        <li className="flex items-center">
          <input
            type="checkbox"
            id="color-blue"
            value="синий"
            className="mr-2"
            onChange={() => onFilterClick("color", "синий")}
          />
          <label htmlFor="color-blue" className="cursor-pointer">
            Синий
          </label>
        </li>
      </ul>
      <p className="font-bold text-lg mt-4">Высота</p>
      <ul className="space-y-2">
        <li className="flex items-center">
          <input
            type="checkbox"
            id="height-2"
            value={2}
            className="mr-2"
            onChange={() => onFilterClick("height", 2)}
          />
          <label htmlFor="height-2" className="cursor-pointer">
            2 метра
          </label>
        </li>
        <li className="flex items-center">
          <input
            type="checkbox"
            id="height-3"
            value={3}
            className="mr-2"
            onChange={() => onFilterClick("height", 3)}
          />
          <label htmlFor="height-3" className="cursor-pointer">
            3 метра
          </label>
        </li>
        <li className="flex items-center">
          <input
            type="checkbox"
            id="height-4"
            value={4}
            className="mr-2"
            onChange={() => onFilterClick("height", 4)}
          />
          <label htmlFor="height-4" className="cursor-pointer">
            4 метра
          </label>
        </li>
      </ul>
      <button
        type="button"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        onClick={() => {
          setFilter(fields);
        }}
      >
        Показать товары
      </button>
    </aside>
  );
};

export default ProductFilter;
