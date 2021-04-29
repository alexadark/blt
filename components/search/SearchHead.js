import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { Button, Number } from 'components/ui-components';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

export const SearchHead = ({
  className,
  handleSubmitGlobalSearch,
  results,
  query,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div
      className={`py-5 bg-veryLightGold pl-14 container max-w-big my-5 ${className}`}
      {...props}>
      <form onSubmit={handleSubmit(handleSubmitGlobalSearch)}>
        <div className="relative w-auto lg:w-[940px]">
          <IoSearch className="absolute text-f-24 text-grey4 top-4 left-7" />
          <input
            type="text"
            aria-label="search"
            placeholder="destinations | experiences | places to stay"
            className={clsx(
              'w-full h-[55px]',
              'pl-20',
              'border-none shadow-input placeholder-grey3 font-semibold text-f-18',
            )}
            {...register('globalSearch')}
          />
          <Button
            as="input"
            type="submit"
            value="search"
            className="absolute h-[47px] right-1 top-1"
          />
        </div>
        {results > 0 &&
          `${(<Number number={results} />)}${
            results === 1 ? 'result' : 'results'
          }for ${query} `}
      </form>
    </div>
  );
};
