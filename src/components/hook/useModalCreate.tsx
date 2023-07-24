import { useProjectStroe } from "@/lib/store";
import { Dialog } from "@headlessui/react";
import React, { Dispatch, SetStateAction, useState } from "react";

export default function UseCreateProject({
  isOpenCreate,
  setIsOpen,
  children,
  title,
}: {
  isOpenCreate: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div>
      <div className="modal">
        <Dialog open={isOpenCreate} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-fit mt-40 container mx-auto justify-center p-4">
              <Dialog.Panel as="div" className="p-2 rounded-xl bg-white ">
                <div className="px-8 py-3">
                  <Dialog.Title className="text-2xl font-bold">
                    {title}
                  </Dialog.Title>
                  <Dialog.Description>
                    {/* This will permanently deactivate your account */}
                  </Dialog.Description>

                  {children}
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
