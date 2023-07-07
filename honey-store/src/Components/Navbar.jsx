import { Text, Box, Heading, Flex, Badge, Stack } from "@chakra-ui/react"
import { BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { BsCart2 } from 'react-icons/bs';
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {
    const navigate=useNavigate()
    const {cartItems}=useSelector((store)=>store)
    return <>
        <Box   border={"2px solid black"} style={{ width: "100%" }} >

            <Text style={{ textAlign: "center", background: "#185E49", color: "white", width: "100%" }}>Free shipping on orders over 500 rupees</Text>

            <Flex style={{ justifyContent: "space-evenly", width: "80%", margin: "0px auto" }}>
                <Box borderLeft={"2px solid black"} borderRight={"2px solid black"} paddingLeft={"10"} paddingRight={"10"} h={"50px"} cursor={'pointer'} onClick={()=>navigate("/")} ><Heading>LET IT BEE.CO</Heading></Box>
                <Box ></Box>

                <Flex gap="50px" alignItems={"center"} justifyContent={"center"}>
                    <Box pt={"13px"} borderLeft={"2px solid black"} borderRight={"2px solid black"} paddingLeft={"10"} paddingRight={"10"} h={"50px"} cursor={'pointer'} onClick={()=>navigate("/product")} ><BsSearch style={{ fontSize: "25px" }} /></Box>
                <Box pt='13px' h={"50px"} cursor={'pointer'} onClick={()=>navigate("/login")}>
                    <VscAccount fontSize={'25px'}/>
                </Box>
                    <Stack direction={'row'} ><Box pt='13px' borderLeft={"2px solid black"} borderRight={"2px solid black"} px={"10"} h={"50px"} cursor={'pointer'}
                    onClick={()=>navigate("/addtocart")} 
                    ><BsCart2 style={{ fontSize: "25px" }}  />
                        <Box ml="22px " mt={'-30px'} mb={'30px'} size={'xm'} px='-5px'  
                            
                        ><Badge  px='10px' py='5px' fontSize="5px" color='white' borderRadius={"full"} background={"#F05A1F"}><Text fontSize={'10px'}>{cartItems.length}</Text></Badge></Box> </Box></Stack>
                </Flex>


            </Flex>
        </Box>
    </>
}
export default Navbar;
