import { Button } from "../Button/Button";
import { CompleteForm } from "./CompleteForm";
import { Modal } from "./Modal";

interface ModalFormProps {
  onOpen: boolean;
  isClose: () => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ModalForm({ onClick, isClose, onOpen }: ModalFormProps) {
  return (
    <>
      <Button onClick={onClick} label='solicite demo'/>
      <Modal
        onOpen={onOpen}
        isClose={isClose}
        titleModal="Solicite demonstração"
        bodyModal={<CompleteForm/>}
      />
    </>
  );
}
