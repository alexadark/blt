import { format } from 'date-fns';

export const Date = ({ date }) => {
  const formatDate = !!date && date.split(' ').join('T');
  return !!date && format(new Date(formatDate), 'MMMM dd, yyyy');
};
