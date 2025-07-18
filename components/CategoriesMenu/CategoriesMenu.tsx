// components/CategoriesMenu/CategoriesMenu.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Category, getCategories } from "@/lib/api";
import css from "./CategoriesMenu.module.css";

const CategoriesMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggle = () => setIsOpenMenu(isOpenMenu);

  // Додаємо стан
  const [categories, setCategories] = useState<Category[]>([]);

  // Додаємо ефект для запиту
  useEffect(() => {
    // Змінюємо стан
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuBtn}>
        Notes
      </button>
      {isOpenMenu && (
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <Link href={`/notes/filter/all`} onClick={toggle}>
              All notes
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id} className={css.menuItem}>
              <Link href={`/notes/filter/${category.id}`} onClick={toggle}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesMenu;
