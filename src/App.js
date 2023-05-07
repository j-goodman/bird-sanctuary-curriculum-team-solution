import { useState, useEffect } from "react";
import birds from "./data/birds.js";
import bonusItems from "./data/bonusItems.js";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

const App = () => {
  const [birdList, setBirdList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonuses, setBonuses] = useState([]);
  const addBird = (bird) => {
    const updateDonations = [bird, ...birdList];
    setBirdList(updateDonations);
  };
  const deleteBird = (index) => {
    const updatedBirdList = [...birdList];
    updatedBirdList.splice(index, 1);
    setBirdList(updatedBirdList);
  };
  useEffect(() => {
    let total = sumTotal(birdList);
    setCartTotal(total);
    setBonuses(getBonuses(total));
  }, [birdList]);
  const completePurchase = () => {
    alert("You have adopted birds. Thank you!");
    setBirdList([]);
  };
  const getBonuses = (total) => {
    let numOfBonuses = 0;
    let bonusList = [];
    if (total >= 100 && total < 300) {
      numOfBonuses = 1;
    } else if (total >= 300 && total < 500) {
      numOfBonuses = 2;
    } else if (total >= 500 && total < 1000) {
      numOfBonuses = 3;
    } else if (total >= 1000) {
      numOfBonuses = 4;
    }

    for (let i = 0; i < numOfBonuses; i++) {
      bonusList.push(bonusItems[i]);
    }
    return bonusList;
  };
  const sumTotal = (cart) => {
    let sum = 0;
    for (let item of cart) {
      sum += item.amount;
    }

    if (cart.length >= 3) {
      sum = sum * 0.9;
      setDiscount(10);
    } else {
      setDiscount(0);
    }
    getBonuses(sum);
    return sum;
  };
  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart
            birds={birdList}
            cartTotal={cartTotal}
            bonuses={bonuses}
            discount={discount}
            deleteBird={deleteBird}
          />
          <Checkout completePurchase={completePurchase} />
        </aside>
        <Cards birds={birds} addBird={addBird} />
      </main>
    </div>
  );
};

export default App;
