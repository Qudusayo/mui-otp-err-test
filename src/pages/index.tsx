import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

const Home = () => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleComplete = (finalValue: string) => {
    console.log("COMPLETE", finalValue);
  };

  return (
    <div>
      <h2>OTP</h2>
      <MuiOtpInput
        value={value}
        onChange={handleChange}
        onComplete={handleComplete}
        length={8}
      />
    </div>
  );
};

export default Home;
