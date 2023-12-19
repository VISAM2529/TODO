import React, { useRef, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { RiDeleteBin7Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { motion } from "framer-motion";
import ReactModal from "react-modal";
import {RxCross2} from "react-icons/rx"

function Home1() {
  let inputref = useRef(null);
  let inputref2 = useRef(null)
  let [data, setData] = useState([]);
  let [openEdit, setOpenEdit] = useState(false);
  let [oldTask,setOldTask]=useState(null)
  let add = () => {
    toast.success("Task Added");
    setData((arr) => [...arr, [inputref.current.value]]);
    inputref.current.value = null;
  };

  let del = (item) => {
    toast.error("Task removed!");
    setData(data.filter((a) => a !== item));
  };

  let complete = (item) => {
    toast.success("Task Completed");
    setData(data.filter((a) => a !== item));
  };




  let edit = (item) => {
    setOldTask(item)
    console.log(oldTask)
    setOpenEdit(true)
    
  };

  let handleChange=(item)=>{
    let newTask=inputref2.current.value
    console.log(item)
    // setData(data.map((a)=>{
    //   return(
    //   if(a===item){
    //     a=newTask
    //   }
    // }))
    setData((prevState) => {
      let newState = prevState.map((obj) => {
        if (obj === oldTask) {
          return [obj=newTask];
          
  
        }

        return obj;
      });
      return newState
    });
    
    setOpenEdit(false)
  }

  let closingModal=()=>{
    setOpenEdit(false)
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <ReactModal isOpen={openEdit} style={customStyles}>
        <div className="flex flex-col gap-10 px-5 py-5">
        <div className="flex items-center justify-end">
        <button onClick={closingModal} className="text-3xl  text-red-600 hover:scale-150 ease-in-out duration-500"><RxCross2/></button>
        </div>
         <input
         className="border-gray-500 border-x-2 border-y-2 px-2 py-2 rounded-lg"
         ref={inputref2}
         placeholder="Rename Task"
         />
         <button onClick={()=>handleChange(oldTask)} className="bg-green-500  text-white py-3 text-xl hover:rounded-3xl ease-in-out duration-300 hover:bg-green-500 font-extrabold">UPDATE</button>
        </div>
      </ReactModal>
      <div className="App  h-fit  flex items-center justify-center">
        <Toaster />
        <div className=" max-w-lg flex  flex-col items-center gap-0 mb-5">
          <div className="flex gap-5 px-10 py-10">
            <input
              ref={inputref}
              className=" border-x-4 border-y-4 border-gray-300 bg-gray-300 text-2xl w-80 py-2 px-5 rounded-full phone:w-64"
              placeholder="Task Name"
            />
            <button onClick={add} className="text-5xl">
              <FcPlus />
            </button>
          </div>
          <div className=" flex flex-col items-center gap-10 justify-center  ">
            {data.map((item) => {
              return (
                <div className="flex items-center justify-center gap-28 bg-white py-4 px-3 shadow-2xl rounded-lg">
                  <div>
                    <h1 className=" text-center  flex gap-10 items-center text-2xl phone:text-xl">
                      <FiEdit
                        onClick={() => edit(item)}
                        className="text-3xl cursor-pointer text-blue-500 phone:text-xl"
                      />{" "}
                      {item}
                    </h1>
                  </div>
                  <h1 className="flex gap-10 text-center text-3xl phone:text-xl">
                    <FcOk
                      onClick={() => complete(item)}
                      className="cursor-pointer"
                    />
                    <RiDeleteBin7Line
                      onClick={() => del(item)}
                      className="cursor-pointer text-red-500"
                    />
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home1;
