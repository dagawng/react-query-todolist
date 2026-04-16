import { useMemo } from "react";
import SingleItem from "./SingleItem";
import { useTaskQuery } from "../customQuery";
import { Text, Stack, Box, Center, Spinner } from "@chakra-ui/react";

function Items() {
  const { data, isLoading, error } = useTaskQuery();

  if (isLoading) {
    return (
      <Center py="12">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Text textAlign="center" color="red.500" py="6" fontWeight="500">
        Error loading tasks: {error.message}
      </Text>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Center py="5">
        <Box textAlign="center">
          <Text
            textAlign="center"
            py="4"
            fontSize="md"
            fontWeight="500"
            color="fg.subtle"
          >
            All caught up!
          </Text>
          <Text
            textAlign="center"
            color={{ base: "gray.400", _dark: "gray.500" }}
            fontSize="sm"
          >
            Add a task to get started
          </Text>
        </Box>
      </Center>
    );
  }

  // Memoize the count so it only recalculates when 'data' changes
  const completedCount = useMemo(() => {
    return data.filter((t) => t.completed).length;
  }, [data]);

  return (
    <Stack gap="3">
      {/* Progress Info */}
      <Text
        fontSize="xs"
        color={{ base: "gray.500", _dark: "gray.400" }}
        fontWeight="600"
        letterSpacing="wide"
        px="2"
      >
        {completedCount} of {data.length} completed
      </Text>

      {/* Task List */}
      <Stack gap="2">
        {data.map((task, index) => (
          <SingleItem task={task} key={task.id} />
        ))}
      </Stack>
    </Stack>
  );
}

export default Items;
