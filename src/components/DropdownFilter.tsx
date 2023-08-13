// DropdownFilter.tsx
import * as React from 'react';
import { Dropdown, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/Dropdown';
import '../sass/main.scss';

interface DropdownFilterProps {
  years: number[];
  selectedYear: number | undefined;
  onChange: (selectedYear: number | undefined) => void;
}

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: {
    width: 200,
  },
};

const DropdownFilter: React.FC<DropdownFilterProps> = ({ years, selectedYear, onChange }) => {
  const dropdownOptions: IDropdownOption[] = [
    { key: 'all', text: 'All Years' },
    ...years.map(year => ({ key: year, text: year.toString() })),
  ];

  const onDropdownChange = (_event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
    if (option) {
      onChange(option.key === 'all' ? undefined : option.key as number);
    } else {
      onChange(undefined);
    }
  };

  return (
    <div className="dropdown-container">
      <Dropdown
        label="Filter by Year"
        selectedKey={selectedYear ?? 'all'}
        onChange={onDropdownChange}
        options={dropdownOptions}
        styles={dropdownStyles}
      />
    </div>
  );
};

export default DropdownFilter;
