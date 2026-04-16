import {
  Button,
  CloseButton,
  Dialog,
  Field,
  Input,
  Portal,
  Stack,
} from "@chakra-ui/react";
import { SquarePen } from "lucide-react";

import { useTaskQuery } from "../customQuery";
import { useState } from "react";

const UpdateButton = ({ task }) => {
  const { updateTask, isUpdating } = useTaskQuery();
  const [localValue, setLocalValue] = useState(task.title);

  const handleUpdate = () => {
    updateTask({ id: task.id, title: localValue });
  };

  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        <Button variant="subtle" size="sm">
          <SquarePen />
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Update Task</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <Stack gap="4">
                <Field.Root>
                  <Input
                    placeholder="update Task"
                    value={localValue}
                    onChange={(e) => setLocalValue(e.target.value)}
                  />
                </Field.Root>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button
                  onClick={handleUpdate}
                  loading={isUpdating}
                  disabled={localValue.trim() === ""}
                >
                  Update
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default UpdateButton;
