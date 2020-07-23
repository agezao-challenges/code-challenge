import React, { useState, FormEvent } from 'react';
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/core";
import { RiSearchLine } from 'react-icons/ri';
import CoinTable from '../CoinTable/CoinTable';

export default (): React.ReactElement => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  let delayedSet: NodeJS.Timeout | null = null;

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (delayedSet) clearTimeout(delayedSet);

    delayedSet = setTimeout(function() {
      setSearchQuery(value);
    }, 2000);
  }

  return (
    <>
      <Box
        width="100%"
        d="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row']}
      >
        <Box>
          <Heading marginBottom={3} size="lg">Cryptocurrency Market</Heading>
        </Box>
        <Box>
          <InputGroup>
            <InputLeftElement children={<RiSearchLine color="gray.300" />} />
            <Input
              placeholder="Search cryptocurrency, rates and prices"
              minWidth={350}
              onChange={onChange}
            />
          </InputGroup>
        </Box>
      </Box>

      <CoinTable
        searchQuery={searchQuery}
      />
    </>
  );
}
