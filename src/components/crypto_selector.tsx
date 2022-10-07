import React, { useEffect, useState } from "react";

export interface ChildPropsOpen {
  onOpen: () => void;
}

interface CryptoImgSrc {
  src: string;
}

function CryptoImgElement(props: CryptoImgSrc) {
  return <img src={props.src}></img>;
}

export function CryptoBlock(props: ChildPropsOpen) {
  const [now_money, change_block] = useState("BNB");

  const press_token = () => {
    props.onOpen();
  };

  return (
    <div
      className="crypto-block"
      onClick={() => {
        press_token();
      }}
    >
      <CryptoImgElement src="/img/bnb.png" />
      <div className="money-name">{now_money}</div>
      <a className="money-arrow">⌵</a>
    </div>
  );
}
