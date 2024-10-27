"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import nextConfig from "../../next.config";
import ProductFilter from "./product-filter";
import styles from "./product-catalog.module.css";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  slug: string;
  categoryId: number;
  color: string;
  height: number;
  category?: {
    name: string;
    id: number;
  };
}

export interface filterOptions {
  color?: string[];
  height?: number[];
  categoryIds?: number[];
  orderBy?: string;
  order?: "ASC" | "DESC";
}

function getWordInCase(count: number, singular: string, plural: string, pluralFew: string): string {
    const absCount = Math.abs(count) % 100;
    const lastDigit = absCount % 10;

    if (absCount === 1 && lastDigit === 1) {
        return `${count} ${singular}`;
    } else if (absCount >= 2 && absCount <= 4 && (lastDigit >= 2 && lastDigit <= 4)) {
        return `${count} ${pluralFew}`;
    } else {
        return `${count} ${plural}`;
    }
}

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<filterOptions>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(nextConfig.apiUrl, {
          params: {
            color: filter.color || undefined,
            height: filter.height || undefined,
            categoryIds: filter.categoryIds || undefined,
          },
        });
        setProducts(response.data);
      } catch (err) {
        setError("Ошибка при загрузке товаров");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filter]);

  return (
    <main className={styles.main}>
      <ProductFilter setFilter={setFilter} />
      {products && products.length ? (
        <ul className={styles.list}>
          {products.map((product) => (
            <li key={product.id} className={styles.listItem}>
                <img src="/product.jpg"></img>
              <h2 className={styles.productTitle}>{product.name} {getWordInCase(product.height, "метр", "метров", "метра")}</h2>
              <ul className={styles.productPropsList}>
                {product.category && product.category.name ? (
                  <li className={styles.productPropsItem}>
                    <span>Категория: </span>
                    <span>{product.category.name}</span>
                  </li>
                ) : null}
                {product.color ? (
                  <li className={styles.productPropsItem}>
                    <span>Цвет: </span>
                    <span>{product.color}</span>
                  </li>
                ) : null}
                {product.height ? (
                  <li className={styles.productPropsItem}>
                    <span>Высота: </span>
                    <span>{getWordInCase(product.height, "метр", "метров", "метра")}</span>
                  </li>
                ) : null}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <div>Продукты не найдены</div>
      )}
    </main>
  );
};

export default ProductCatalog;
