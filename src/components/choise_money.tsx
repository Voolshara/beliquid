import React, { useState } from "react";
import { CryptoBlock } from "./crypto_selector";
import { CryptoDropdown, CryptoToken } from "./crypto_dropdown";

export function ChoiceMoney() {
  const [mone_in, setMoney] = useState("");
  const [is_open_menu, chang_menu_status] = useState(true);

  const [is_open_dropdown, setDropdown] = useState<CryptoToken | undefined>();

  const close_menu = (name: CryptoToken | undefined) => {
    setDropdown(name);
    chang_menu_status(false);
  };

  const open_menu = () => {
    chang_menu_status(true);
  };

  return (
    <div>
      <h3 className="h3-money">By crypto</h3>
      <form className="money-form">
        <div className="money-input">
          <input
            type="number"
            value={mone_in}
            placeholder="0.0"
            onChange={(e) => setMoney(e.target.value)}
          />
          <CryptoBlock onOpen={open_menu} />
          {is_open_menu ? <CryptoDropdown onClose={close_menu} /> : <div></div>}
        </div>

        {/* <button type="submit">Кнопка отправить</button> */}
      </form>
    </div>
  );
}
