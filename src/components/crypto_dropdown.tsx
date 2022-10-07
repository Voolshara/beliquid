import React, { useEffect, useState } from "react";

export interface ChildProps {
  onClose: (name: CryptoToken | undefined) => void;
}

interface CryptoTag {
  id: number;
  src: string;
  status: boolean;
  is_active: boolean;
}

export interface CryptoToken {
  src: string;
  name: string;
}

function Tags(props: CryptoTag) {
  return (
    <div
      className="tag"
      onClick={() => {
        console.log(props.id);
      }}
    >
      <img src={"/img/small_tokens/" + props.src}></img>
    </div>
  );
}

export function CryptoDropdown(props: ChildProps) {
  const [searched_token, search_token] = useState("");
  //   const [choosed_token, choose_token] = useState("");

  const press_close = (token: CryptoToken) => {
    props.onClose(token);
  };

  const [tags, change_tag] = useState([
    { id: 0, src: "test.png", status: true, is_active: false },
    { id: 1, src: "m.png", status: true, is_active: false },
    { id: 2, src: "op.png", status: true, is_active: false },
    { id: 3, src: "eth.png", status: false, is_active: false },
    { id: 4, src: "bnb.png", status: true, is_active: false },
  ]);
  const [tokens, tokens_hook] = useState([
    { id: 0, src: "bnb.png", name: "BNB", value: 0 },
    { id: 1, src: "cake.png", name: "CAKE", value: 0 },
    { id: 2, src: "usdt.png", name: "USDT", value: 0 },
    { id: 3, src: "btcb.png", name: "BTCB", value: 0 },
    { id: 4, src: "weth.png", name: "WETH", value: 0 },
    { id: 5, src: "busd.png", name: "DUSD", value: 0 },
    { id: 6, src: "busd.png", name: "DUSD", value: 0 },
    { id: 7, src: "busd.png", name: "DUSD", value: 0 },
    { id: 8, src: "busd.png", name: "DUSD", value: 0 },
    { id: 9, src: "busd.png", name: "DUSD", value: 0 },
    { id: 10, src: "busd.png", name: "DUSD", value: 0 },
  ]);

  return (
    <div className="crypto-dropdown-container">
      <div className="crypto-dropdown">
        <div className="dropdown-content">
          <div className="dropdown-label">
            <p>Select token</p>
            <a
              className="close-btn"
              onClick={() => {
                press_close({ src: "krest.png", name: "" });
              }}
            >
              ×
            </a>
          </div>
          <input
            type="text"
            value={searched_token}
            placeholder="Token"
            onChange={(e) => search_token(e.target.value)}
          />

          <div className="select-network">
            <p>Select network</p>
            <div className="tags">
              <div className="tag">
                <p>Все</p>
              </div>
              {tags.map((tag) => (
                <Tags
                  id={tag.id}
                  src={tag.src}
                  status={tag.status}
                  is_active={tag.is_active}
                  key={tag.id}
                />
              ))}
              <div className="tag20">
                <p>20 more</p> <p className="arrow"> ➜ </p>
              </div>
            </div>

            <p className="select-label">Select token</p>
            <div className="select-tokens">
              {tokens.map((token) => (
                <div
                  className="token-container"
                  onClick={() => {
                    press_close(token);
                  }}
                  key={token.id}
                >
                  <div className="token">
                    <img src={"/img/" + token.src} />
                    <div className="name">
                      <p>{token.name}</p>
                    </div>
                  </div>
                  <div className="value">{token.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
