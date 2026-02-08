import { useState, useEffect } from "react";

export default function AITrendMeter() {
  const [signal, setSignal] = useState("Loading...");

  useEffect(() => {
    setSignal("ZKANU AI: Market is Neutral");
  }, []);

  return (
    <div style={{
      padding: "20px",
      border: "1px solid gold",
      marginTop: "20px"
    }}>
      {signal}
    </div>
  );
}