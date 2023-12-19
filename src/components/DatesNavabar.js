import React, { useState } from "react";
import { Link } from "react-router-dom";
function DateNavbar() {
  let day;

  let current = new Date();
  let date = current.getDate()
  let yesterdate = current.getDate() - 1;
  let dayBeforeYesterdate = current.getDate() - 2;
  let tommorrowdate = current.getDate() + 1;
  let dayAftreTommorrowdate = current.getDate() + 2;
  let month = current.getMonth() + 1;



  if (month === 1) {
    day = "Jan";
  }
  if (month === 2) {
    day = "Feb";
  }
  if (month === 3) {
    day = "Mar";
  }
  if (month === 4) {
    day = "Apr";
  }
  if (month === 5) {
    day = "May";
  }
  if (month === 6) {
    day = "June";
  }
  if (month === 7) {
    day = "July";
  }
  if (month === 8) {
    day = "Aug";
  }
  if (month === 9) {
    day = "Sept";
  }
  if (month === 10) {
    day = "Oct";
  }
  if (month === 11) {
    day = "Nov";
  }
  if (month === 12) {
    day = "Dec";
  }

  if(date===31){
    tommorrowdate=1
    dayAftreTommorrowdate=2
  }

  let [click1, setClick1] = useState(false);
  let [click2, setClick2] = useState(false);
  let [click3, setClick3] = useState(true);
  let [click4, setClick4] = useState(false);
  let [click5, setClick5] = useState(false);

  let borderChange1 = (date,day) => {
    setClick1(!click1);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);

  };
  let borderChange2 = (date,day) => {
    setClick2(!click2);
    setClick1(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);

  };
  let borderChange3 = (date,day) => {
    setClick3(!click3);
    setClick1(false);
    setClick2(false);
    setClick4(false);
    setClick5(false);

  };
  let borderChange4 = (date,day) => {
    setClick4(!click4);
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick5(false);

  };
  let borderChange5 = (date,day) => {
    setClick5(!click5);
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(false);
  };



  return (
    <div>
    <div className=" flex  gap-16 phone:gap-10 text-3xl items-center justify-center py-16 font-extrabold">
      <Link
        to="/beforeYesterday"
        onClick={()=>borderChange1(dayBeforeYesterdate,day)}
        className={
          click1
            ? "phone:hidden scale-105 gap-2 flex flex-col items-center text-green-500 border-green-500 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400  ease-in-out duration-300 tablet:text-red-500"
            : "phone:hidden opacity-90 flex flex-col items-center text-gray-200 border-gray-200 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400  ease-in-out duration-300"
        }
      >
        <div className="flex flex-col items-center phone:hidden">{dayBeforeYesterdate}
        <span className="text-sm">{day}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
        <hr className={click1?"w-10 border-1 border-gray-200 cursor-pointer hover:border-red-500 duration-500":"hidden"} />
        <h1 className={click1?"text-xs visible ease-in-out duration-75":"hidden"}>BEF.YEST</h1>
        </div>
      </Link>
      <Link
        to="yesterday"
        onClick={()=>borderChange2(yesterdate,day)}
        className={
          click2
            ? "scale-105 gap-2 flex flex-col items-center text-green-500 border-green-500 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400  ease-in-out duration-300"
            : "opacity-90 flex flex-col items-center text-gray-200 border-gray-200 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400  ease-in-out duration-300"
        }
      >
        <div className="flex flex-col items-center">{yesterdate}
        <span className="text-sm">{day}</span></div>
        <div className="flex flex-col items-center gap-1">
        <hr className={click2?"w-10 border-1 border-gray-200 cursor-pointer hover:border-red-500 duration-500":"hidden"} />
        <h1 className={click2?"text-xs visible ease-in-out duration-75":"hidden"}>YEST</h1>
        </div>
      </Link>
      <Link
        to="/"
        onClick={()=>borderChange3(date,day)}
        className={
          click3
            ? "scale-105 gap-2 flex flex-col items-center text-green-500 border-green-500 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400  ease-in-out duration-150"
            : "opacity-90 flex flex-col items-center text-gray-200 border-gray-200 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400  ease-in-out duration-150"
        }
      >
        <div className="flex flex-col items-center">
        {date}
        <span className="text-sm ">{day}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
        <hr className={click3?"w-10 border-1 border-gray-200 cursor-pointer hover:border-red-500 duration-500":"hidden"} />
        <h1 className={click3?"text-xs visible ease-in-out duration-75":"hidden"}>TODAY</h1>
        </div>
      </Link>
      <Link
        to="/tommorrow"
        onClick={()=>borderChange4(tommorrowdate,day)}
        className={
          click4
            ? "scale-105 gap-3 flex flex-col items-center text-green-500 border-green-500 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400  ease-in-out duration-300"
            : "opacity-90 flex flex-col items-center text-gray-200 border-gray-200 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400  ease-in-out duration-300"
        }
      >
        <div className="flex flex-col items-center">
        {tommorrowdate}
        <span className="text-sm">{day}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
        <hr className={click4?"w-10 border-1 border-gray-200 cursor-pointer hover:border-red-500 duration-500":"hidden"} />
        <h1 className={click4?"text-xs visible ease-in-out duration-75":"hidden"}>TOMM</h1>
        </div>
      </Link>
      <Link
        to="/afterTommorrow"
        onClick={()=>borderChange5(dayAftreTommorrowdate,day)}
        className={
          click5
            ? "phone:hidden scale-105 flex flex-col gap-2 items-center text-green-500 border-green-500 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400 ease-in-out duration-300"
            : "phone:hidden opacity-90 flex flex-col items-center text-gray-200 border-gray-200 border-x-4 border-y-4 bg-white px-5 py-5 rounded-full cursor-pointer shadow-md shadow-gray-400  ease-in-out duration-300"
        }
      >
        <div className="flex flex-col items-center ">{dayAftreTommorrowdate}
        <span className="text-sm">{day}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
        <hr className={click5?"w-10 border-1 border-gray-200 cursor-pointer hover:border-red-500 duration-500":"hidden"} />
        <h1 className={click5?"text-xs visible ease-in-out duration-75":"hidden"}>AFT.TOMM</h1>
        </div>
      </Link>
    </div>
  
    </div>
  );
}

export default DateNavbar;
