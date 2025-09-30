import React from "react";
import "./Meals.css";
import { useCart, formatPrice } from "./CartContext";

type Meal = { id: string; name: string; description: string; price: number };

const MEALS: Meal[] = [
  { id: "m1", name: "Green Bowl", description: "Healthy...and green...", price: 18.99 },
  { id: "m2", name: "Honey", description: "The sweetest taste ever", price: 20.0 },
  { id: "m3", name: "Sweeties", description: "The sweetest taste ever", price: 26.0 },
  { id: "m4", name: "WINSTER", description: "ryjn", price: 222.0 },
];

const Meals: React.FC = () => {
  const { addItem } = useCart();

  return (
    <section className="meals">
      <div className="meals__card">
        {MEALS.map((meal) => (
          <article key={meal.id} className="meal">
            <div className="meal__left">
              <h3 className="meal__title">{meal.name}</h3>
              <p className="meal__desc">{meal.description}</p>
              <div className="meal__price">{formatPrice(meal.price)}</div>
            </div>
            <form
              className="meal__right"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const qty = Math.max(1, Number(fd.get("qty") ?? 1));
                addItem({ id: meal.id, name: meal.name, price: meal.price }, qty);
                e.currentTarget.reset();
              }}
            >
              <label htmlFor={`amt-${meal.id}`} className="meal__amountLbl">
                Amount
              </label>
              <input
                id={`amt-${meal.id}`}
                name="qty"
                className="meal__amountInput"
                type="number"
                min={1}
                defaultValue={1}
              />
              <button className="btn btn--add" type="submit">
                + Add
              </button>
            </form>
          </article>
        ))}
        <div className="meals__footer">
          <button className="btn btn--cta" type="button">
            Add More Delicious Meal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Meals;
