import React from 'react';
import Head from "next/head";
import { Box, Flex, Text, Stack, Button, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>E-commerce App</title>
            </Head>
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.600')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}
                >
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Text fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')}>Logo</Text>
                        <Stack flex={{ base: 1 }} justify={'flex-end'} direction={'row'} spacing={6}>
                            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'}>Sign In</Button>
                            <Button fontSize={'sm'} fontWeight={600} color={'white'} bg={'pink.400'} href={'#'} _hover={{ bg: 'pink.300' }}>Sign Up</Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
            {children}
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.600')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderTop={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}
                >
                    <Flex flex={{ base: 1 }} justify={{ base: 'center' }} alignItems={{ base: 'center' }}>
                        <Text fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')}>Copyright 2023</Text>
                    </Flex>
                </Flex>
            </Box>
        </div>
    )
}

export default Layout