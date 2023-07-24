import React from "react";

interface IInput {
  children?: React.ReactNode;
  titleLabel?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputName: string;
  placeHolder?: string;
}

export default function useInput({
  onChange,
  titleLabel,
  children,
  className,
  inputName,
  placeHolder,
}: IInput) {
  const classLabelName = className ? className : "block my-6 ";
  return (
    <div>
      <label className={classLabelName}>
        {titleLabel ? (
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
            {titleLabel}
          </span>
        ) : (
          ""
        )}
        <input
          name={inputName}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
          onChange={(e) => onChange(e)}
          placeholder={placeHolder}
        />
      </label>
    </div>
  );
}
