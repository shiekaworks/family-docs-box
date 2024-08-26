import Select from 'react-select';

interface ModalProps {
  isMulti: boolean;
  value: any;
  onChange: (value: any, obj: any) => void;
  options: any;
}

export const MultipleSelect: React.FC<ModalProps> = ({
  isMulti,
  value,
  onChange,
  options,
}) => {
  const handleRemoveValue = (e: any) => {
    if (!onChange) return;
    const { name: buttonName } = e.currentTarget;
    const removedValue = value.find((val: any) => val.value === buttonName);
    if (!removedValue) return;
    onChange(
      value.filter((val: any) => val.value !== buttonName),
      { name, action: 'remove-value', removedValue }
    );
  };

  const customStyles = {
    control: (provided): any => ({
      ...provided,
      borderRadius: '1.5rem',
      borderColor: '#cbd5e0',
      height: '44px',
    }),
  };

  return (
    <div>
      <Select
        options={options}
        onChange={onChange}
        controlShouldRenderValue={!isMulti}
        isMulti={isMulti}
        placeholder="Select tag"
        styles={customStyles}
      />
      <div className="mt-2">
        <div className="flex flex-wrap items-center">
          {isMulti
            ? value.map((val: any) => (
                <div
                  key={val.value}
                  className="px-3 py-1 text-sm text-white bg-[#006EBD] rounded-full select-none mr-2 mb-2"
                >
                  {val.label}
                  <button
                    name={val.value}
                    onClick={handleRemoveValue}
                    className="ml-2 transition-colors ease-in-out cursor-pointer hover:text-red-600 focus:text-red-700 text-white"
                  >
                    ✕
                  </button>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};
