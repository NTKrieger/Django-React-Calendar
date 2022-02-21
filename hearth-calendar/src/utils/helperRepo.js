export function resIsError(response){
  if (response instanceof Error) {
    return true;
  }
};