import { ParameterValue, Parameters } from './getUrl';

export function getParameters(parameters: Parameters): string[] {
  return Object.entries(parameters)
    .filter(item => typeof item[1] !== 'undefined')
    .map(item => `${item[0]}=${getParameterValue(item[1])}`);
}

export function getParameterValue(value: ParameterValue): string {
  if (Array.isArray(value)) {
    return value.join();
  }

  return String(value);
}
