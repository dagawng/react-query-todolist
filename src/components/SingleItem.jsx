import { Checkbox, Flex, Box, IconButton, HStack } from "@chakra-ui/react";
import { useTaskQuery } from "../customQuery";

import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function SingleItem({ task }) {
  const { updateStatus } = useTaskQuery();

  return (
    <Flex
      justify="space-between"
      align="center"
      bg={{ base: "white", _dark: "gray.900" }}
      borderRadius="lg"
      p={{ base: "3", md: "4" }}
      borderWidth="1px"
      borderColor={{ base: "gray.200", _dark: "gray.800" }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      gap="3"
    >
      {/* Left side - Checkbox & Title */}
      <HStack gap="3" flex="1" minW="0">
        <Checkbox.Root
          checked={task.completed}
          colorPalette="amber"
          variant="subtle"
          onCheckedChange={(e) =>
            updateStatus({ id: task.id, completed: !!e.checked })
          }
          flexShrink={0}
          sx={{
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control borderRadius="md" />
        </Checkbox.Root>

        <Box
          flex="1"
          minW="0"
          textDecoration={task.completed ? "line-through" : "none"}
          color={
            task.completed
              ? { base: "gray.400", _dark: "gray.600" }
              : { base: "gray.900", _dark: "gray.100" }
          }
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="500"
          transition="all 0.2s"
          wordBreak="break-word"
          opacity={task.completed ? 0.6 : 1}
        >
          {task.title}
        </Box>
      </HStack>

      {/* Right side - Action buttons */}
      <HStack gap="2" flexShrink={0}>
        <UpdateButton task={task} />
        <DeleteButton id={task.id} />
      </HStack>
    </Flex>
  );
}

export default SingleItem;
