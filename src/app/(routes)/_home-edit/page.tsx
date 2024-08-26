"use client";
import { useState } from "react";
import { poppins } from "@/app/_assets/fonts";
import { Button } from "@/app/_components/Button";
import { Modal } from "@/app/_components/Modal";
import { Select, SelectItem } from "@nextui-org/select";
import { MultipleSelect } from "../../_components/MuiltiSelect";

export default function EditModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(["Scott"]);

  const [selected, setSelected] = useState([
    { value: "tag1", label: "Tag 1" },
    { value: "tag2", label: "Tag 2" },
    { value: "tag3", label: "Tag 3" },
  ]);

  const handleSelectChange = (values: any) => {
    setSelected(values);
  };

  const handleSelectionChange = (keys: string) => {
    setSelectedItemsPerPage([keys]);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <div className="mx-auto lg:p-20 p-10 bg-white rounded-3xl shadow-2xl z-10 xs:m-[20px] xs:w-full xs:max-h-[700px] overflow-y-auto">
          <h2
            className={`mb-8 text-[#222] text-[25px] lg:text-4xl font-bold text-center ${poppins.className}`}
          >
            Edit
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="pl-4">Filename</label>
              <input
                type="text"
                placeholder="1234567890"
                className="mt-1 w-full px-4 py-3 border-[1px] border-[#E2E2E2] border-solid rounded-full text-md focus:outline-none focus:border-[#006EBD] focus:border-2"
                value="Filename.png"
              />
            </div>
            <div>
              <label className="pl-4">Uploaded By</label>
              <Select
                aria-label="Uploadedby"
                className="max-w-xs bg-white"
                selectedKeys={selectedItemsPerPage}
                onChange={(keys) => handleSelectionChange(keys.target.value)}
                isDisabled
              >
                <SelectItem key="Scott">Scott</SelectItem>
                <SelectItem key="Michael">Michael</SelectItem>
                <SelectItem key="Taylor">Taylor</SelectItem>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <label className="pl-4">Tags</label>
            <div className="w-full relative mt-1">
              <MultipleSelect
                value={selected}
                options={[
                  { value: "tag1", label: "Tag 1" },
                  { value: "tag2", label: "Tag 2" },
                  { value: "tag3", label: "Tag 3" },
                ]}
                isMulti
                onChange={handleSelectChange}
              />
            </div>
          </div>

          <div>
            <label className="pl-4">Notes</label>
            <textarea
              placeholder="Notes"
              className="w-full border border-gray-300 rounded-3xl h-32 p-4 focus:outline-none focus:border-[#006EBD] focus:border-2 mb-8 mt-1"
              value="Sample Notes"
            ></textarea>
          </div>

          <div className="flex justify-center gap-[40px]">
            <Button
              type="submit"
              className="w-[175px] !text-black rounded-full px-6 py-2 bg-white font-semibold border-[#006EBD] border-2 "
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              CANCEL
            </Button>
            <Button
              type="submit"
              className="w-[175px] px-12"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              SAVE
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
