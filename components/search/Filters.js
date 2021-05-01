import React, { useState } from 'react';
import clsx from 'clsx';
import { Checkbox, Button } from 'components/ui-components';
import { FaChevronRight } from 'react-icons/fa';
import Collapse from '@kunukn/react-collapse';

const FiltersMap = ({ filters = [], radio, onSearch, title }) => {
  return (
    <>
      {filters?.map((filter) => {
        return (
          <Checkbox
            key={filter.option}
            id={filter.option}
            label={filter.option}
            disabled={filter.isDisabled}
            className="mb-1"
            radio={radio}
            onChange={
              (a) => {
                onSearch({
                  title: title,
                  option: filter.option,
                  value: a.target.value
                })
              }
            }
          />
        );
      })}
    </>
  );
};

const FilterSet = ({ filters = [], title, radio, hasInput, onSearch }) => {
  const [open, setOpen] = useState(false);
  const firstFilters = filters.slice(0, 4);
  const lastFilters = filters.slice(4);

  return (
    <div className="py-4 border-b border-grey2">
      <h4 className="uppercase text-[15px] tracking-wider text-grey5 mb-2">
        {title}
      </h4>
      <div>
        {hasInput && (
          <input
            type="text"
            placeholder="Enter departure airport"
            aria-label="departure airport"
            className="w-full h-8 mt-2 mb-3 border-grey2"
          />
        )}
        <FiltersMap filters={firstFilters} radio={radio} onSearch={onSearch} title={title} />
        {lastFilters.length > 0 && (
          <>
            <Collapse
              isOpen={open}
              className="duration-500 ease-in-out transition-height">
              <FiltersMap filters={lastFilters} />
            </Collapse>

            <Button
              small
              secondary
              className="mt-2"
              onClick={(e) => {
                e.preventDefault();
                setOpen(!open);
              }}
              css={{
                '&:hover': {
                  svg: { color: 'white' },
                },
              }}>
              {open ? 'show less' : 'show all'}{' '}
              <FaChevronRight
                className={clsx(
                  'transition duration-500',
                  'ml-1',
                  'text-lightBlue  text-[11px]',
                  { 'transform rotate-90': open },
                )}
              />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

/*
{
  filters:  [
    {item: ...}
  ],
  radio: ...
  title ...
} 
*/

/* 
array con 
{
  title
  options: {
    option, isDisabled, isSelected
  }
  forType
  radio
}

*/
export const Filters = ({ filterSets = [], onSearch }) => {
  return (
    <form>
      {filterSets?.map((filterSet) => {
        return (
          <FilterSet
            onSearch={onSearch}
            key={filterSet.title}
            hasInput={filterSet.hasInput}
            filters={filterSet.filters}
            title={filterSet.title}
            radio={filterSet.radio && filterSet.title}
          />
        );
      })}
    </form>
  );
};
