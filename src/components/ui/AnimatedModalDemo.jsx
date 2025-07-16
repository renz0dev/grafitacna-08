"use client";
import React from "react";
import { Modal, ModalTrigger } from "../ui/animated-modal";

export function AnimatedModalDemo() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black mt-auto w-full dark:bg-[#00B5D8] dark:text-black text-white flex justify-center group/modal-btn relative overflow-hidden">
          <span className="group-hover/modal-btn:-translate-y-full group-hover/modal-btn:opacity-0 text-center transition-all duration-[300ms]">
            Detalles
          </span>
          <div className="translate-y-full group-hover/modal-btn:translate-y-0 flex items-center justify-center absolute inset-0 transition-transform duration-[300ms] text-white z-200">
            📃
          </div>
        </ModalTrigger>
      </Modal>
    </div>
  );
}