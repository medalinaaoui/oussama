"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
// import { useEffect, useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";

interface PicsModalProps {
  projectName: string;
  Pics: string[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const PicsModal = ({ projectName, Pics, open, setOpen }: PicsModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-black py-6 pb-8 px-1 rounded-lg w-full lg:max-w-3xl shadow-xl cursor-default relative overflow-hidden"
          >
            <CiFaceSmile className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10 h-[70vh] overflow-y-auto overflow-x-hidden px-6">
              <div
                onClick={() => setOpen(false)}
                className="bg-white/20 w-12 h-12 -mb-6 -mr-3 rounded-full text-3xl text-primary grid place-items-center ml-auto cursor-pointer hover:scale-105 transition-all ease-in duration-200 z-20"
              >
                <IoClose />
              </div>
              <h4 className="text-2xl font-extrabold leading-none tracking-tight uppercase md:text-3xl lg:text-4xl fill-stroke-a text-center">
                <span className="text-primary font-helveticaMedium">{projectName}</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 sm:gap-3 mt-6">
                {Pics?.map((Pic) => {
                  return (
                    <Image
                      key={Pic}
                      src={Pic}
                      width={400}
                      height={400}
                      alt={projectName}
                      className="w-full rounded-sm sm:rounded-xl sm:border-2 border-[1px] border-white cursor-pointer"
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PicsModal;
