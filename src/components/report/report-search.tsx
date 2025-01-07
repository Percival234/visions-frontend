'use client';

import { type ChangeEvent, useState } from 'react';

import { Search } from '@/ui/search';

import { useReportsQueryParams } from '@/hooks/params-hooks/useReportsQueryParams';

export const ReportSearch = () => {
  const { getParam, setParam } = useReportsQueryParams();
  const [searchValue, setSearchValue] = useState(getParam('search') || '');

  const onSearch = () => setParam('search', searchValue || null);

  const onClear = () => {
    setSearchValue('');
    setParam('search', null);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  return (
    <Search
      button={false}
      value={searchValue}
      onChange={onChange}
      onSearch={onSearch}
      onClear={onClear}
    />
  );
};
