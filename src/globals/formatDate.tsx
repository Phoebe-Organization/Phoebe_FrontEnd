import moment from 'moment';

export const formatDate = (time: number) => {
  let dayOfWeek = moment(time).format('ddd');
  let dayOfMonth = moment(time).format('Do');
  let month = moment(time).format('MMM');
  let timeOfDay = moment(time).format('LT');

  return `${dayOfWeek}, ${month} ${dayOfMonth} · ${timeOfDay}`;
};
