import React, { Fragment } from 'react';
import Link from 'next/link';
import { Date } from 'components';

export const About = ({ writer, date, text, children, ...props }) => {
  console.log('about writer', writer);
  return (
    <Fragment {...props}>
      <div className="flex justify-between text-f-22">
        <div>
          Expert travel writer:{' '}
          <Link href={writer?.uri}>
            <a>{writer?.title}</a>
          </Link>
        </div>
        <div>{/* Last updated: <Date date={date} /> */}</div>
      </div>
      <div className="mt-5 mb-12 prose-lg">{children}</div>
      <div className="text-center text-gold text-f-24">{text}</div>
    </Fragment>
  );
};