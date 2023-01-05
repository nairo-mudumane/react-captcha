import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./App.css";

function App() {
  const [captcha, setCaptcha] = React.useState<string | null>(null);

  function onCaptchaChange(token: string | null) {
    if (token) setCaptcha(token);
  }

  return (
    <div className="App">
      <ReCAPTCHA
        onChange={onCaptchaChange}
        sitekey={import.meta.env.VITE_GOOGLE_API_KEY}
      />

      {captcha && <p>Token: {captcha.slice(0, 20) + "..."}</p>}
    </div>
  );
}

export default App;
