import React from "react";
import { ChakraProvider, Box, Flex, Text, VStack, HStack, IconButton, Divider, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Container } from "@chakra-ui/react";
import { FaTachometerAlt, FaUsers, FaBoxes, FaTruck, FaClipboardList, FaFileInvoice } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          Dashboard
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <StatCard title="Total Materials" stat="150" icon={<FaBoxes />} />
          <StatCard title="Total Vendors" stat="45" icon={<FaTruck />} />
          <StatCard title="Pending Requisitions" stat="10" icon={<FaClipboardList />} />
          <StatCard title="Pending Orders" stat="5" icon={<FaClipboardList />} />
          <StatCard title="Goods Receipts" stat="20" icon={<FaClipboardList />} />
          <StatCard title="Invoices" stat="30" icon={<FaFileInvoice />} />
        </SimpleGrid>
        <Divider />
        <Text fontSize="xl" fontWeight="bold">
          Recent Activities
        </Text>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Text>No recent activities.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

const StatCard = ({ title, stat, icon }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <HStack>
        <Box p={2} bg="gray.100" borderRadius="md">
          {icon}
        </Box>
        <VStack align="start">
          <Stat>
            <StatLabel>{title}</StatLabel>
            <StatNumber>{stat}</StatNumber>
          </Stat>
        </VStack>
      </HStack>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box w="250px" bg="gray.800" color="white" h="100vh" p={4}>
      <VStack align="start" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          ERP System
        </Text>
        <Divider />
        <NavItem icon={<FaTachometerAlt />} label="Dashboard" />
        <NavItem icon={<FaUsers />} label="User Management" />
        <NavItem icon={<FaBoxes />} label="Material Management" />
        <NavItem icon={<FaTruck />} label="Vendor Management" />
        <NavItem icon={<FaClipboardList />} label="Procurement Management" />
        <NavItem icon={<FaClipboardList />} label="Receiving and Inspection" />
        <NavItem icon={<FaFileInvoice />} label="Invoice Verification" />
      </VStack>
    </Box>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <HStack spacing={4} w="full" p={2} _hover={{ bg: "gray.700", cursor: "pointer" }}>
      {icon}
      <Text>{label}</Text>
    </HStack>
  );
};

const Index = () => {
  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Box flex="1" p={4}>
          <Dashboard />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
