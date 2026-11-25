import React from "react";


export default function Calculator() {
  const [display, setDisplay] = React.useState("0");
  const [firstNumber, setfirstNumber] = React.useState<number | null>(null);
  const [operator, setOperator] = React.useState<string | null>(null);
  const [sum, setSum] = React.useState<number | null>(null);
  function handleNumber(number: string): void {
    setDisplay((previous) => {
      if (previous === "0") {
        return number;
      }

      return previous + number;
    });
  }
function clear(){
  setDisplay("0");
  setfirstNumber(null);

}
  function ResetNumber(operator:string){
      setfirstNumber(Number(display));
      setOperator(operator);
      setDisplay("0")
  }
function Getsum(){
  
  if(operator=="+"){
 let sum = firstNumber! + Number(display);
 setSum(sum)
 setDisplay(String(sum))
  }
 else if(operator=="-"){
  let diff=firstNumber!-Number(display);
  setSum(diff);
  setDisplay(String(diff))
 }else if(operator=="*"){
  let multi = firstNumber! * Number(display);
  setSum(multi)
  setDisplay(String(multi));
 }else {
  let div = firstNumber! / Number(display);
  setSum(div)
  setDisplay(String(div));
 }
  
  return 0
}
  return (
    <div className="w-[385px]">
      <div className="bg-[rgb(128,129,138)] w-full h-[64px] flex items-center justify-end px-4 text-white text-5xl font-light">
        <div>
          <p>{display}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-5 w-full h-[502px]">
        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-2xl font-medium">
          <button onClick={() => clear()} className="w-full h-full">
            AC
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-2xl font-medium">
          +/-
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-2xl font-medium">
          %
        </div>

        <div className="bg-[rgb(244,142,50)] border border-gray-500 flex items-center justify-center text-4xl font-normal">
          <button onClick={() => ResetNumber("/")} className="w-full h-full">
            ÷
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("7")}>
            7
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("8")}>
            8
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("9")}>
            9
          </button>
        </div>

        <div className="bg-[rgb(244,142,50)] border border-gray-500 flex items-center justify-center text-4xl font-normal">
          <button onClick={() => ResetNumber("*")} className="w-full h-full">
            *
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("4")}>
            4
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("5")}>
            5
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("6")}>
            6
          </button>
        </div>

        <div className="bg-[rgb(244,142,50)] border border-gray-500 flex items-center justify-center text-4xl font-normal">
          <button onClick={() => ResetNumber("-")} className="w-full h-full">
            -
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("1")}>
            1
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("2")}>
            2
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("3")}>
            3
          </button>
        </div>

        <div className="bg-[rgb(244,142,50)] border border-gray-500 flex items-center justify-center text-4xl font-normal">
          <button onClick={() => ResetNumber("+")} className="w-full h-full">
            +
          </button>
        </div>

        <div className="col-span-2 bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          <button className="w-full h-full" onClick={() => handleNumber("0")}>
            0
          </button>
        </div>

        <div className="bg-[rgb(217,217,219)] border border-gray-500 flex items-center justify-center text-3xl font-normal">
          .
        </div>

        <div className="bg-[rgb(244,142,50)] border border-gray-500 flex items-center justify-center text-4xl font-normal">
          <button onClick={() => Getsum()}>=</button>
        </div>
      </div>
    </div>
  );
}
