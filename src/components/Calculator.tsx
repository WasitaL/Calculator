import { useState } from "react";
import { Button } from "./Button";

type CalculatorT = {
  result: number;
  method?: string;
  history?: string;
};

export const Calculator = () => {
  const defaultValue = {
    result: 0,
  };
  const [data, setData] = useState<CalculatorT>(defaultValue);
  const btnBoxs = [
    ["ac", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const number = new Array(10).fill("").map((_v, i) => `${i}`);
  const onClick = (value: string) => {
    const isNumber = number.includes(value);
  };

  return (
    <div className="wrapper">
      <div className="screen">
        <p className="result">{data.result}</p>
        {data.history && <p className="history">{data.history}</p>}
      </div>
      <div className="keyboard">
        <div className="column">
          {btnBoxs.map((row) => {
            return (
              <div className="row">
                <>
                  {row.map((item, i) => {
                    const isSolid = i === row.length - 1;
                    return (
                      <Button
                        key={item}
                        text={item}
                        isSolid={isSolid}
                        onClick={onClick}
                      />
                    );
                  })}
                </>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
