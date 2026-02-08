import { useEffect } from "react";

export default function TVChart() {
  useEffect(() => {
    new TradingView.widget({
      container_id: "tv",
      symbol: "BTCUSDT",
      interval: "15",
      theme: "dark",
      autosize: true
    });
  }, []);

  return <div id="tv" style={{ height: "400px" }}></div>;
}