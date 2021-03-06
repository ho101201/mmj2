import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    HStack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useMediaQuery
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';
  
  import styled from "styled-components";

  import { useRef } from "react";
  import { useDraggable } from "react-use-draggable-scroll";
  
  import bell from './images/Bell_Icon.png';
  import search from './images/Search_Icons.png';
  import info from './images/info.png';
  import arrowB from './images/arrowB.png';
  import circleB from './images/EllipseB.png';
  import ranking from './images/ranking.png';

  import p1 from './images/photo/photoEx1.png';
  import p2 from './images/photo/photoEx2.png';
  import p3 from './images/photo/photoEx3.png';
  import pd from './images/photo/default.png';

  import foodA1 from './images/foodIcon/foodA1.png';
  import foodA2 from './images/foodIcon/foodA2.png';
  import foodA3 from './images/foodIcon/foodA3.png';
  import foodA4 from './images/foodIcon/foodA4.png';
  import foodA5 from './images/foodIcon/foodA5.png';
  import foodA6 from './images/foodIcon/foodA6.png';
  import foodA7 from './images/foodIcon/foodA7.png';
  import foodA8 from './images/foodIcon/foodA8.png';
  import foodA9 from './images/foodIcon/foodA9.png';
  import foodA10 from './images/foodIcon/foodA10.png';
  import foodN1 from './images/foodIcon/foodN1.png';
  import foodN2 from './images/foodIcon/foodN2.png';
  import foodN3 from './images/foodIcon/foodN3.png';
  import foodN4 from './images/foodIcon/foodN4.png';
  import foodN5 from './images/foodIcon/foodN5.png';
  import foodN6 from './images/foodIcon/foodN6.png';
  import foodN7 from './images/foodIcon/foodN7.png';
  import foodN8 from './images/foodIcon/foodN8.png';
  import foodN9 from './images/foodIcon/foodN9.png';
  import foodN10 from './images/foodIcon/foodN10.png';
  import iconBgA from './images/foodIcon/iconBgA.png';
  import iconBgN from './images/foodIcon/iconBgN.png';
  
//   footer
  import home from './images/navIcons/icon_home.png';
  import homeA from './images/navIcons/icon_homeA.png';
  import rec from './images/navIcons/icon_rec.png';
  import recA from './images/navIcons/icon_recA.png';
  import rev from './images/navIcons/icon_rev.png';
  import revA from './images/navIcons/icon_revA.png';
  import my from './images/navIcons/icon_my.png';
  import myA from './images/navIcons/icon_myA.png';
  
  export default function LogIn() {
  
    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const styles = {
        control: base => ({
          ...base,
          fontFamily: "Noto Sans KR"
        }),
        menu: base => ({
          ...base,
          fontFamily: "Noto Sans KR"
        })
      };

    const SelectBoxWrapper = styled.div`
	display: flex;
`;

    const IconSVG = styled.svg`
	margin-left: -28px;
	align-self: center;
	width: 24px;
	height: 24px;
`;
    const [show, setShow] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [longW] = useMediaQuery(
        "(min-width: 600px)"
      );

  
    return (
      
        <div>
                <Flex h="40px"  alignItems="center" borderBottom="1px solid #DDDDDD" position="sticky">
                    {/* <SelectBoxWrapper >
                        <Select variant="unstyled" style={styles} placeholder="????????? ?????????" letterSpacing='-1px' ml="10px" fontSize={f2} iconSize='20px' w="115px" >
                        </Select>
                    </SelectBoxWrapper> */}
                    <Link href='/SetLocation' display="flex" flexDirection="row">
                        <Text id='location' fontSize={f2} fontWeight="bold" ml="10px" mr="7px" >????????? ?????????</Text>
                        <Box w="12px" h="20px" position="absolute" left="104px" top="4px" >
                            <Image src={arrowB} alt="arrowB"/>
                        </Box>
                    </Link>
                    <Spacer/>
                    <Link href='/Search'>
                        <Box w="20px" h="20px" mr="22px">
                            <Image src={search} alt="search"/>
                        </Box>
                    </Link>
                    <Link href='/Alarm'>
                        <Box w="20px" h="20px" mr="22px">
                            <Image src={bell} alt="bell"/>
                        </Box>
                    </Link>
                </Flex>

                {/* hide or fade out */}
                    <Box position="absolute" w="214px" h="28px" top="29px" left="11px">
                        <Image src={info} alt="info"/>
                    </Box>
      

                <HStack overflow="hidden" mt='20px' spacing="14.5px" whiteSpace="nowrap" overflowX='hide' >
                    {/* hilighted */}
                    <Link href='/Category'>
                        <Flex alignItems="center" justifyContent="center" ml="10px" position="relative">
                            <Box w="60px" h="60px">
                                <Image src={iconBgA} alt="iconBgA"/>
                            </Box>
                            <Box position="absolute" w="18px" h="12px" mb="20px">
                                <Image src={foodA1} alt="foodA1"/>
                            </Box>
                            <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                        </Flex>
                    </Link>

                    {/* normal */}
                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN2} alt="foodN2"/>
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN3} alt="foodN3" />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN4} alt="foodN4"/>
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN5} alt="foodN5"/>
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex> 

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN6} alt="foodN6"/>
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex> 

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN7} alt="foodN7"/>
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex> 

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN8} alt="foodN8"/>
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex> 
                    
                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="26px">
                            <Image src={foodN9} alt="foodN9"/>
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="16px">?????????</Text>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="36px">????????????</Text>
                    </Flex> 

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN} alt="iconBgN"/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN10} alt="foodN10"/>
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex> 
                </HStack>

                {/* <Flex overflow="hidden" ml="10px" mt='20px'>
                    {/* hilighted */}
                    {/* <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgA}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodA1}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex> */}

                    {/* normal */}
                    {/* <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN2}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN3}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN4}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN5}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">??????</Text>
                    </Flex>

                </Flex> */}

                <Box mt="26px" ml="10px">
                    <Text fontSize={f1} fontWeight="bold" >????????? ?????? ??????</Text>
                    <HStack spacing="10px" mt="11px">
                        <Box w="90px" h="90px" bg="gray.200">
                            <Image src={p1} alt="p1"/>
                        </Box>
                        <Box w="90px" h="90px" bg="gray.200">
                            <Image src={p2} alt="p2"/>
                        </Box>
                        <Box w="90px" h="90px" bg="gray.200">
                            <Image src={p3} alt="p3"/>
                        </Box>
                        <Box w="90px" h="90px" bg="gray.200">
                            <Image src={pd} alt="pd"/>
                        </Box>
                    </HStack>
                </Box>

                <Flex direction="column" w="vw" h="120px" justifyContent="center" alignItems="center"  ml="10px" mr="10px"mt="40px" border="3px solid #F6E229"
                 borderTopLeftRadius="30px" borderTopRightRadius="30px" borderBottomLeftRadius="30px">
                     <Flex position="absolute" alignItems="center" justifyContent="center" mb="115px">
                         <Flex position="absolute" w="40px" h="40px">
                             <Image src={circleB} alt="fcircleB"/>
                         </Flex>
                         <Flex position="absolute" w="24px" h="24px">
                             <Image src={ranking} alt="ranking"/>
                         </Flex>
                     </Flex>
                    <Text fontSize={f2} fontWeight="bold" align="center">??????????????? ????????? ????????? ??? ??????????</Text>
                    <Flex direction="row" justifyContent="center" mt="9px">
                        <Button w="90px" h="30px" bg="#303030" color="#ffffff" borderRadius="full" fontSize="10px" fontWeight="medium" mr="5px">????????? ??????</Button>
                        <Button w="90px" h="30px" bg="#F6E229" border="1px solid #303030" borderRadius="full" fontSize="10px" fontWeight="medium" ml="5px">????????? ??????</Button>
                    </Flex>
                </Flex>

                <Flex direction="row" w="vw" h="60px" ml="10px" mr="10px" mt="30px" mb="30px" borderRadius="full" bg="#F6E229" justifyContent="center" alignItems="center" >
                    <Text fontSize={f2} fontWeight="bold" letterSpacing="-1px" align="center" mr="5px">????????? ??? ????????? ??????????????? ?</Text>
                    <Link href='/RandomR1'>
                        <Button fontSize={f3} fontWeight="medium" color="#ffffff" w="96px" h="30px" bg="#303030" borderRadius="full" ml="5px">?????? ????????????</Button>
                    </Link>

                </Flex>
                
                {/* Modal1 */}
                <Button onClick={onOpen} bg="yellow.200">
                    modal test
                </Button>
                <Modal id='alarm' isOpen={isOpen} onClose={onClose} show={show} onHide={() => setShow(false)}>
                    <ModalOverlay/>
                    <ModalContent  borderRadius="30px">
                        <ModalBody >
                            <Text fontSize={f2} fontWeight="bold" align="center" mt="26px">????????????????????? ????????? ???????????? ?????????.</Text>
                            <Text fontSize={f3} mt="10px" align="center">
                                ??????, ????????? ??? ????????? ????????? ????????? ????????? ??? ????????????.
                            </Text>
                            <Text fontSize={f3} align="center">
                                ???????????? ?????? ????????? ??? ????????????.
                            </Text>
                            <Flex direction="row" justifyContent="center" mt="15px" mb="25px">
                                <Button w="90px" h="30px" bg="#303030" color="#ffffff" borderRadius="full" fontSize="10px" fontWeight="medium" mr="5px" onClick={onClose}>?????? ??? ???</Button>
                                <Button w="90px" h="30px" bg="#F6E229" border="1px solid #303030" borderRadius="full" fontSize="10px" fontWeight="medium" ml="5px" >??????</Button>
                            </Flex>
                        </ModalBody>
                        {/* <ModalFooter>
                        </ModalFooter> */}
                    </ModalContent>
                </Modal>

                {/* Modal2 */}
                {/* <Modal id='alarm' isOpen={isOpen} onClose={onClose} show={show} onHide={() => setShow(false)}>
                    <ModalOverlay/>
                    <ModalContent  borderRadius="30px">
                        <ModalCloseButton w="20px" h="20px" fontSize="20px" m="10px"/>
                        <ModalBody >
                            <Text fontSize={f2} fontWeight="bold" align="center" mt="26px">?????? ????????? ????????? ?????????!</Text>
                            <Text fontSize={f3} mt="10px" align="center">
                                ???????????? ????????? ???????????? ?????? ????????? ?????????  
                            </Text>
                            <Text fontSize={f3} align="center">
                                ?????? ????????? ???????????? ?????????????????????.
                            </Text>
                            <Flex direction="row" justifyContent="center" mt="15px" mb="25px">
                                <Button w="90px" h="30px" bg="#F6E229" border="1px solid #303030" borderRadius="full" fontSize="10px" fontWeight="medium" ml="5px" >?????? ????????????</Button>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal> */}

                {/* footer */}
                <Spacer/>
                <Box borderTop="1px solid #E8E8E8" h="80px"  pl="7px" pr="7px" display="absolute" position="sticky" bottom="0px" bg="#ffffff">
                    <Flex direction="row" w="vw" mt="13px" >
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/Home' w="24px" h="24px">
                                <Image src={homeA} alt="homeA"/>
                            </Link>
                            <Text fontWeight="bold" fontSize="10px" align="center" >???</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/Recommand' w="24px" h="24px">
                                <Image src={rec} alt="rec"/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >??????</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/Review' w="24px" h="24px">
                                <Image src={rev} alt="rev"/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >??????</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/Profile' w="24px" h="24px">
                                <Image src={my} alt="my"/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >??????</Text>
                        </Flex>
                        <Spacer/>
                    </Flex>
                </Box>

        </div>
  
    )
  }
  