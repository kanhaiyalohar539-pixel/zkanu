import Header from "../components/Header";
import LivePriceBox from "../components/LivePriceBox";
import AITrendMeter from "../components/AITrendMeter";

export default function Home() {
  return (
    <div className="app">
      <Header title="ZKANU x KL Terminal" />

      <div className="container">
        <LivePriceBox />
        <AITrendMeter />
      </div>

      <div className="nav-buttons">
        <a href="/chart">📈 Chart</a>
        <a href="/whales">🐳 Whales</a>
        <a href="/ict">🟡 ICT/MMC</a>
        <a href="/operator">🕵 Operator</a>
        <a href="/settings">⚙ Settings</a>
      </div>
    </div>
  );
}