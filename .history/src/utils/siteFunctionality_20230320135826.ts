export const handler = (e: MouseEvent, ref: any, setState: any) => {
  if (ref.current) {
    if (!ref?.current?.contains(e.target as Node)) {
      setState(false);
    }
  }
};
