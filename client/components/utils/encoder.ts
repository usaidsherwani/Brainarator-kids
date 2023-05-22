export const base64Encoder = (data: string) => {
  let buff = new Buffer(String(data));
  let base64data = buff.toString('base64');
  return base64data;
};

export const base64Decoder = (data: string) => {
  let buff = new Buffer(data, 'base64');
  let asciiData = buff.toString('ascii');
  return asciiData;
};
