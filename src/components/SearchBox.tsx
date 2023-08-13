import * as React from 'react';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import '../sass/main.scss';

interface SearchBoxProps {
  onChange: (searchTerm: string) => void;
}

const SearchBoxComponent: React.FC<SearchBoxProps> = ({ onChange }) => (
  <SearchBox placeholder="Search" underlined={true} onChange={(_, newValue) => onChange(newValue || '')} />
);

export default SearchBoxComponent;
