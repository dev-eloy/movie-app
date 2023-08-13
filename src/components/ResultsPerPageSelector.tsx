import * as React from 'react';
import { Dropdown, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/Dropdown';
import '../sass/main.scss';

interface ResultsPerPageSelectorProps {
  selectedValue: number;
  onChange: (selectedValue: number) => void;
}

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: {
    width: 200,
  },
};

const ResultsPerPageSelector: React.FC<ResultsPerPageSelectorProps> = ({ selectedValue, onChange }) => {
  const dropdownOptions: IDropdownOption[] = [
    { key: 5, text: '5 Results' },
    { key: 10, text: '10 Results' },
    { key: 20, text: '20 Results' },
    { key: -1, text: 'All Results' },
  ];

  const onDropdownChange = (_event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
    if (option) {
      onChange(option.key as number);
    }
  };

  return (
    <div className="results-per-page-selector-container">
      <Dropdown
        label="Results per Page"
        selectedKey={selectedValue}
        onChange={onDropdownChange}
        options={dropdownOptions}
        styles={dropdownStyles}
      />
    </div>
  );
};

export default ResultsPerPageSelector;
