import { createContext, useContext, ComponentProps } from "react";

import Modal from '@shared/Modal'

type ModalProps = ComponentProps<typeof Modal>

interface ModalContextValue {
  open: {options: ModalProps} => void
  close: (options: ) => void
}