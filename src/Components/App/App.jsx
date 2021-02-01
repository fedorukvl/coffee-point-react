import React, { useState, Fragment } from "react";

import { Navigation, PromoSlider } from "../index.js";

export const Promotions = React.createContext(null);

function App() {
  const [navigationList] = useState([
    { id: 1, title: "наши точки" },
    { id: 2, title: "френд-пасс" },
    { id: 3, isLogo: true, title: "coffee-point" },
    { id: 4, title: "журнал" },
    { id: 5, title: "наши точки" },
  ]);
  const [promotionList] = useState([
    {
      id: 1,
      name: "our-coffe-shops",
      title: "Наши кофейни",
      description:
        "Мы постоянно совершенствуемся и стараемся быть ближе к тебе",
    },
    {
      id: 2,
      name: "magazine",
      title: "Не только кофе",
      description:
        "С этого месяца у нас стартовал ежемесячный журнал о том, что близко тебе и нам по духу",
    },
    {
      id: 3,
      name: "friend-pass",
      title: "Будь частью нашей культуры",
      description:
        "Не забудь оформить нашу карту, чтобы получать бонусы при заказах",
    },
    {
      id: 4,
      name: "events",
      title: "Будь в курсе последних событий",
      description: "Следи за нашими мероприятиями и принимай в них участие",
    },
  ]);
  return (
    <div className="App">
      <Fragment>
        <Promotions.Provider value={promotionList}>
          <Navigation navigationList={navigationList} />
          <PromoSlider />
        </Promotions.Provider>
      </Fragment>
    </div>
  );
}

export default App;
