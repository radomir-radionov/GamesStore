import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useSuspense(
  isLoading: boolean,
  setIsLoadIng: Dispatch<SetStateAction<boolean>>,
  cards: JSX.Element[],
  spinner: JSX.Element,
  message: JSX.Element
): JSX.Element | JSX.Element[] {
  const [suspenseComponent, setSuspenseComponent] = useState<
    JSX.Element[] | JSX.Element
  >(cards);
  useEffect(() => {
    if (isLoading) {
      if (cards.length === 0) {
        setSuspenseComponent(message);
      } else setSuspenseComponent(cards);
    } else {
      setSuspenseComponent(spinner);
      setTimeout(() => setIsLoadIng(true), 500);
    }
  }, [isLoading]);

  return suspenseComponent;
}

export default useSuspense;
