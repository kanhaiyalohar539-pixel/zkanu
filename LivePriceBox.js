import { useState, useEffect } from "react";

export default function LivePriceBox() {
  const [btc, setBTC] = useState("Loading...");
  const [eth, setETH] = useState("Loading...");
  const [gold, setGold] = useState("Loading...");

  useEffect(() => {
    async function load() {
      const b = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
      const be = await b.json();
      setBTC(be.price);

      const e = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT");
      const ee = await e.json();
      setETH(ee.price);

      setGold("Requires API key");
    }
    load();
    const i = setInterval(load, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <div>BTC: {btc}</div>
      <div>ETH: {eth}</div>
      <div>GOLD: {gold}</div>
    </div>
  );
}