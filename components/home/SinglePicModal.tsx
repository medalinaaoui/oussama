"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface PicsModalProps {
  Pic: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SinglePicModal = ({ Pic, open, setOpen }: PicsModalProps) => {
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
            <div className="relative z-10 h-[70vh] overflow-y-auto overflow-x-hidden px-6 flex justify-center">
              <div className="h-full ">
                <Image
                  key={Pic}
                  src={Pic}
                  width={400}
                  height={400}
                  alt={Pic}
                  className="w-full h-full object-contain aspect-square rounded-sm sm:rounded-xl sm:border-2 border-[1px] border-white"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SinglePicModal;
