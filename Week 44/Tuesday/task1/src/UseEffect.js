import React from "react";

const ClockComponent = () => {
  const [date, setDate] = React.useState(new Date());

  setTimeout(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div>
      <h1>
        Time is:{" "}
        {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
      </h1>
    </div>
  );
};

export default ClockComponent;