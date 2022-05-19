import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function onChangeModal() {
    setIsOpen(!isOpen);
  }

  return { onChangeModal, isOpen };
}
