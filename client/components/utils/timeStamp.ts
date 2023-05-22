export const getTimeStamp = () => {
  const currentDate: Date = new Date();
  const timeStamp = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}@${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  return timeStamp;
};
