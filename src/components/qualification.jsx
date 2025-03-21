import React from "react";

export default function Qualification() {
  return (
    <div
      name="qualification"
      className="w-full py-20"
    >
      <div className="max-w-screen-lg mx-auto justify-center w-full text-white">
        <div>
          <p className="text-3xl font-bold flex justify-center">
            Qualification
          </p>
        </div>

        <div className="flex justify-center w-full">
          <ol className="border-l border-neutral-100 dark:border-neutral-100">
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-gray-400">2021 - 2023 (Completed)</p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">
                  Higher Diploma in IT
                </h4>
                <p className="mb-3 text-gray-400">SLIIT CITY UNI</p>
              </div>
            </li>
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-gray-400">2024 (Completed)</p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">
                  B.Sc. (Hons) Computer Science and Software Engineering –
                  University of Bedfordshire
                </h4>
                <p className="mb-3 text-gray-400">SLIIT CITY UNI</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
