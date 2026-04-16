import {
  Button,
  CloseButton,
  Dialog,
  For,
  HStack,
  Portal,
  Text,
} from "@chakra-ui/react";
import { Trash2 } from "lucide-react";
import { useTaskQuery } from "../customQuery";

export default function DeleteButton({ id }) {
  const { deleteTask, isDeleting } = useTaskQuery();
  return (
    <Dialog.Root size="sm" placement="center">
      <Dialog.Trigger asChild>
        <Button variant="subtle" size="sm">
          <Trash2 color="red" />
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Are You Sure?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                This action cannot be undone. This will permanently delete your
                task from our systems.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button
                colorPalette="red"
                onClick={() => deleteTask(id)}
                loading={isDeleting}
              >
                Delete
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
