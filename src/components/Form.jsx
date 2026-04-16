import { Box, Input, IconButton, HStack } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useTaskQuery } from "../customQuery";

import { Plus, Check } from "lucide-react";

function Form() {
  const [newItem, setNewItem] = useState("");
  const { addTask, isAdding } = useTaskQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    addTask({ title: newItem, completed: false });
    setNewItem("");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%">
      <HStack
        width="100%"
        bg={{ base: "white", _dark: "gray.900" }}
        borderRadius="xl"
        p="3"
        gap="2"
        borderWidth="2px"
        borderColor={{ base: "gray.200", _dark: "gray.800" }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        <Input
          value={newItem}
          placeholder="Add a new task..."
          onChange={(e) => setNewItem(e.target.value)}
          variant="unstyled"
          bg="transparent !important"
          boxShadow="none !important"
          autoFocus
        />

        <IconButton
          type="submit"
          h="40px"
          minW="40px"
          px="4"
          borderRadius="lg"
          disabled={!newItem.trim()}
          loading={isAdding}
          loadingText="adding..."
        >
          <Plus size={18} />
        </IconButton>
      </HStack>
    </Box>
  );
}

export default Form;
