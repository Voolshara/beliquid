import React, { useEffect, useState } from "react";

interface CryptoImgSrc {
  src: string;
}

function CryptoImgElement(props: CryptoImgSrc) {
  return <img src={props.src}></img>;
}

export function CryptoBlock() {
  const [now_money, change_block] = useState("BNB");

  return (
    <div
      className="crypto-block"
      onClick={() => {
        console.log("ququ");
      }}
    >
      <CryptoImgElement src="/img/bnb.png" />
      <div className="money-name">{now_money}</div>
      <a className="money-arrow">⌵</a>
    </div>
  );
}
