import { convertSingleFuncType } from '../types';

const pxRegex = /([0-9]*\.?[0-9]+)px/;
const remRegex = /([0-9]*\.?[0-9]+)rem/;

export const convertPxsToRems = (inputs: string, rootFontSize: string) => {
  const splitKeys = /,|@|"/g;
  return inputs.split(splitKeys).map((input) => {
    const pxRegexExp = RegExp(pxRegex, 'g');
    const px = pxRegexExp.exec(input.trim());
    return input.replace(
      px ? px[0] : '',
      px ? `${convertPxToRem(px[1], rootFontSize)}rem` : ''
    );
  });
};

export const convertRemsToPxs = (inputs: string, rootFontSize: string) => {
  return inputs.split(';').map((input) => {
    const remRegexExp = RegExp(remRegex, 'g');
    const rem = remRegexExp.exec(input.trim());
    return input.replace(
      rem ? rem[0] : '',
      rem ? `${convertRemToPx(rem[1], rootFontSize)}px` : ''
    );
  });
};

export const convertRemToPx: convertSingleFuncType = (
  inputRem,
  rootFontSize
) => {
  if (inputRem === '') return '';
  return String(Number(inputRem) * parseFloat(String(rootFontSize)));
};

export const convertPxToRem: convertSingleFuncType = (
  inputPx,
  rootFontSize
) => {
  if (inputPx === '') return '';
  return String(Number(inputPx) / parseFloat(String(rootFontSize)));
};
