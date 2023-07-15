import React, { useState } from "react";

import {
  Box,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Checkbox,
  CheckboxGroup,
  flexbox,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddToCart = () => {

  return (
    <Box
      className="addtocart"
      py="0"
      pl="10"
      height="100vh"
      width="100vw"
      position="absolute"
      top="0"
      style={{ backgroundColor: "#FEFCF9" }}
    >
      <Box
        className="addtocart-wrapper"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <AddToCartForm />
        <AddToCardSidebar className="addtocart-sidebar" />
      </Box>
      <style jsx>{`
        @media screen and (max-width: 965px) {
          .addtocart {
            padding-left: 0;
          }
          .addtocart-wrapper {
            flex-direction: column;
          }
        }
      `}</style>
    </Box>
  );
};

const AddToCartForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [order, setOrder] = useState({
    city: "",
    postalCode: "",
    address: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    paymentMethod: "card",
    card: {
      cardNumber: "",
      cardMMYY: "",
      cardCVC: "",
      cardHolderName: "",
    },
  });

  const handleBackStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  const renderStep1 = () => {
    return (
      <Box
        className="delivery-form-step"
        maxWidth="600px"
        style={{ textTransform: "uppercase" }}
        textAlign="left"
      >
        <Heading fontSize="20" mb="10">
          <span style={{ color: "#165341" }}>delivery</span>
          /details/confirmation and payment
        </Heading>
        <FormControl mb="4">
          <Input
            name="city"
            value={order.city}
            onChange={handleOrderChange}
            placeholder="DELIVERY CITY"
          />
        </FormControl>
        <FormControl mb="4">
          <Input
            name="postalCode"
            value={order.postalCode}
            onChange={handleOrderChange}
            placeholder="POSTAL CODE"
          />
        </FormControl>
        <FormControl mb="10">
          <Input
            name="address"
            value={order.address}
            onChange={handleOrderChange}
            placeholder="ADDRESS"
          />
        </FormControl>
        <Button className="back" onClick={() => navigate("/")}>
          Back
        </Button>
        <Button className="proceed" onClick={handleNextStep}>
          proceed
        </Button>
      </Box>
    );
  };

  const renderStep2 = () => {
    return (
      <Box
        className="delivery-form-step"
        maxWidth="600px"
        style={{ textTransform: "uppercase" }}
        textAlign="left"
      >
        <Heading fontSize="20" mb="10">
          <span style={{ color: "#165341" }}>delivery</span>
          /details/confirmation and payment
        </Heading>
        <FormControl mb="4">
          <Input
            name="firstName"
            value={order.firstName}
            onChange={handleOrderChange}
            placeholder="FIRST NAME"
          />
        </FormControl>
        <FormControl mb="4">
          <Input
            name="lastName"
            value={order.lastName}
            onChange={handleOrderChange}
            placeholder="LAST NAME"
          />
        </FormControl>
        <FormControl mb="4">
          <Input
            name="email"
            type="email"
            value={order.email}
            onChange={handleOrderChange}
            placeholder="EMAIL"
          />
        </FormControl>
        <FormControl mb="10">
          <Input
            name="phone"
            type="text"
            value={order.phone}
            onChange={handleOrderChange}
            placeholder="PHONE NUMBER"
          />
        </FormControl>
        <Button className="back" onClick={handleBackStep}>
          Back
        </Button>
        <Button className="proceed" onClick={handleNextStep}>
          proceed
        </Button>
      </Box>
    );
  };

  const renderStep3 = () => {
    return (
      <Box
        className="delivery-form-step"
        maxWidth="600px"
        style={{ textTransform: "uppercase" }}
      >
        <Heading fontSize="20" mb="10" textAlign="left">
          <span style={{ color: "#165341" }}>delivery</span>
          /details/confirmation and payment
        </Heading>
        <FormControl
          mb="4"
          maxWidth="600px"
          style={{ margin: "50px auto 50px" }}
          textAlign="left"
        >
          <Box display="flex" justifyContent="space-between" mb="3">
            <Text fontWeight="bold" color="gray.500">
              name
            </Text>
            <Text>{order.firstName + " " + order.lastName}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" mb="3">
            <Text fontWeight="bold" color="gray.500">
              phone number
            </Text>
            <Text>{order.phone}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" mb="3">
            <Text fontWeight="bold" color="gray.500">
              email
            </Text>
            <Text>{order.email}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" mb="50">
            <Text fontWeight="bold" color="gray.500">
              delivery address
            </Text>
            <Text>{order.address}</Text>
          </Box>
          <hr />
          <Box display="flex" alignItems="center" mt="4" mb="10">
            <Text mb="4" flex="1">
              Payment method
            </Text>
            <Box display="flex" alignItems="center">
              <Box display="flex" mr="4">
                <input
                  type="checkbox"
                  value="card"
                  name="paymentMethod"
                  checked={order.paymentMethod === "card"}
                  onChange={() =>
                    setOrder((prevOrder) => ({
                      ...prevOrder,
                      paymentMethod: "card",
                    }))
                  }
                  style={{
                    cursor: "pointer",
                    width: "20px",
                    marginRight: "5px",
                  }}
                  width="20px"
                />
                <Text>Credit Card</Text>
              </Box>
              <Box display="flex">
                <input
                  type="checkbox"
                  value="paypal"
                  name="paymentMethod"
                  checked={order.paymentMethod === "paypal"}
                  onChange={() =>
                    setOrder((prevOrder) => ({
                      ...prevOrder,
                      paymentMethod: "paypal",
                    }))
                  }
                  style={{
                    cursor: "pointer",
                    width: "20px",
                    marginRight: "5px",
                  }}
                />
                <Text>Paypal</Text>
              </Box>
            </Box>
          </Box>
        </FormControl>
        <Button className="back" onClick={handleBackStep}>
          Back
        </Button>
        <Button className="proceed" onClick={handleNextStep}>
          proceed
        </Button>
      </Box>
    );
  };

  const renderStep4Card = () => {

    return (
      <Box
        fontSize="20"
        maxWidth="600px"
        className="delivery-form-step"
        style={{ textTransform: "uppercase" }}
      >
        <Heading fontSize="20" mb="10" textAlign="left">
          Payment by credit card
        </Heading>
        <FormControl mb="4">
          <Input
            name="cardNumber"
            value={order.card.cardNumber}
            onChange={(e) => {
              setOrder((prevOrder) => ({
                ...prevOrder,
                card: {
                  ...prevOrder.card,
                  cardNumber: e.target.value,
                },
              }));
            }}
            placeholder="CARD NUMBER"
          />
        </FormControl>
        <Box display="flex" justifyContent="space-between">
          <FormControl maxWidth="45%" mb="4">
            <Input
              name="cardMMYY"
              value={order.card.cardMMYY}
              onChange={(e) => {
                setOrder((prevOrder) => ({
                  ...prevOrder,
                  card: {
                    ...prevOrder.card,
                    cardMMYY: e.target.value,
                  },
                }));
              }}
              placeholder="MM/YY"
              maxLength="4"
            />
          </FormControl>
          <FormControl maxWidth="45%" mb="4">
            <Input
              name="cardCVC"
              value={order.card.cardCVC}
              onChange={(e) => {
                setOrder((prevOrder) => ({
                  ...prevOrder,
                  card: {
                    ...prevOrder.card,
                    cardCVC: e.target.value,
                  },
                }));
              }}
              placeholder="CVC"
            />
          </FormControl>
        </Box>
        <FormControl mb="10">
          <Input
            name="cardHolderName"
            value={order.card.cardHolderName}
            onChange={(e) => {
              setOrder((prevOrder) => ({
                ...prevOrder,
                card: {
                  ...prevOrder.card,
                  cardHolderName: e.target.value,
                },
              }));
            }}
            placeholder="CARDHOLDER NAME"
          />
        </FormControl>
        <Button className="back" onClick={handleBackStep}>
          Back
        </Button>
        <Button className="proceed" onClick={() => {  navigate("/thankyou")}}>
          Payment
        </Button>
      </Box>
    );
  };

  return (
    <Box className="addtocart-form" p="4" style={{ width: "55vw" }}>
      <Heading fontSize="25px" textAlign="left" mb="10">
        <span style={{ color: "#165341" }}>LET IT BEE</span>.CO
      </Heading>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 &&
        (order.paymentMethod === "card" ? (
          renderStep4Card()
        ) : (
          <>Payment by paypal</>
        ))}

      <style jsx>{`
        .proceed {
          color: #fff;
          background-color: #165341;
          border-radius: 20px;
          padding: 23px 0;
          width: 350px;
          font-weight: 400;
          text-transform: uppercase;
          margin-left: 15px;
        }

        .proceed:hover {
          background-color: #f05121;
          color: #feedd1;
        }

        .back {
          color: #000;
          background: transparent;
          border: 1px solid #000;
          border-radius: 20px;
          padding: 20px 40px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .back:hover {
          background: transparent;
        }

        .delivery-form-step input {
          border: none;
          border-bottom: 1px solid #000 !important;
          border-radius: 0;
          outline: none;
          box-shadow: none !important;
        }

        @media screen and (max-width: 965px) {
          .addtocart-form {
            margin: 0 auto 50px;
            padding-top: 50px;
            width: auto !important;
          }
          .proceed {
            margin-left: 25px;
          }
        }
      `}</style>
    </Box>
  );
};

const AddToCardSidebar = () => {
  const {cartItems}=useSelector((store)=>store)

  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(
    cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  );
  return (
    <Flex
      className="addtocart-sidebar"
      flexDirection="column"
      justifyContent="space-between"
      p="10"
      style={{
        backgroundColor: "#165341",
        color: "#F7FEF9",
        height: "100vh",
        width: "40vw",
        fontWeight: 500,
        textTransform: "uppercase",
      }}
    >
      <Box>
        <Text textAlign="left" mb="5">
          Your orders: {cartItems.length}
        </Text>
        <Box overflow="scroll" maxHeight="236px" mb="10">
          {cartItems.map((item) => (
            <Box
              key={item.name}
              pt="2"
              pb="2"
              display="flex"
              borderX="none"
              borderWidth="1px"
              justifyContent="space-between"
              overflow="hidden"
            >
              <Box display="flex">
                <Image maxHeight="100px" src={item.image} alt={item.name} />
                <Flex
                  textAlign="left"
                  ml="10"
                  height="100%"
                  direction="column"
                  justifyContent="space-between"
                >
                  <Text>{item.name}</Text>
                  <Text>1pcs</Text>
                </Flex>
              </Box>
              <Text mr="5" mt="5">
                {item.price.toFixed(2)}₹
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Flex
        fontSize="xl"
        justifyContent="space-between"
        borderTopWidth="1px"
        py="5"
        maxHeight="10px"
      >
        <Text>Subtotal</Text>
        <Text>{subtotal}₹</Text>
      </Flex>
      <Flex
        fontSize="xl"
        justifyContent="space-between"
        borderTopWidth="1px"
        py="5"
      >
        <Text>Delivery</Text>
        <Text>{deliveryPrice.toFixed(2)}₹</Text>
      </Flex>
      <Flex
        fontSize="4xl"
        justifyContent="space-between"
        borderTopWidth="1px"
        py="5"
      >
        <Text>Total</Text>
        <Text>{subtotal + deliveryPrice}₹</Text>
      </Flex>
      <style jsx>{`
        @media screen and (max-width: 965px) {
          .addtocart-sidebar {
            width: 100vw !important;
          }
        }
      `}</style>
    </Flex>
  );
};

export default AddToCart;

//  const cartItems = [
//   {
//     id: 1,
//     name: "Sulai Honey",
//     image:
//       "https://honeyandspice.in/cdn/shop/products/SulaiHoneyFront-01.png?v=1683144497&width=420",

//     image1:
//       "https://honeyandspice.in/cdn/shop/products/Untitleddesign.png?v=1683144341&width=420",

//     image2:
//       "https://honeyandspice.in/cdn/shop/products/2_38edfdc6-3411-4b24-901d-e6e4e5fc93c7.png?v=1683144341&width=420",

//     description:
//       "Tree of life, the Moringa tree is called, because every part of the Moringa tree is high in nutrition and even healing properties. Imagine the nectar from these highly nutritious Moringa flowers, that exactly what comes in a jar of our Moringa Honey. This super light colour and mild flavoured honey is collected by our Bees from the Moringa orchards of Jharkhand and Bihar.",
//     rating: 4,
//     price: 380.0,
//   },
//   {
//     id: 2,
//     name: "Central Indian Wild Honey",
//     image:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceCentralIndianWildHoney250gm.png?v=1683144097&width=420",

//     image1:
//       "https://honeyandspice.in/cdn/shop/files/FromthedeepforestsofIndia.jpg?v=1688203321&width=420",

//     image2:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceCentralIndianWildHoney250gmbacktwo.png?v=1688203321&width=420",

//     description:
//       "This wildflower honey is harvested from the dense forests of Madhya Pradesh and Maharashtra. Extracted from the wild beehives of the Apis Dorsata species of bees, this honey is the oldest and most popular wild honey among our collection.",
//     rating: 3,
//     price: 320.0,
//   },
//   {
//     id: 3,
//     name: "Jamun Honey",
//     image:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceJamunHoney250gm.png?v=1683144327&width=420",

//     image1:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceJamunHoney500gmbacktwo.png?v=1683144327&width=420",

//     image2:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceJamunHoney250gmback.png?v=1683144327&width=420",

//     description:
//       "Jamun honey is Unifloral which means it contains predominantly the nectar of the Jamun flower. Jamun honey is unique in its taste because of the tinge of bitterness it carries. The sweetness, sourness, and the bitter tinge when combined make for a true surprise to your taste buds. ",
//     rating: 5,
//     price: 400.0,
//   },
//   {
//     id: 4,
//     name: "Sweet Cliff Honey",
//     image:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceSweetCliffHoney250gm.png?v=1683144483&width=420",

//     image1:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceSweetCliffHoney250gmbacktwo.png?v=1683144483&width=420",

//     image2:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceSweetCliffHoney250gmback.png?v=1683144483&width=420",

//     description:
//       "The Cliff honey is harvested only in limited quantities every year and is highly sought-after. Now experience this true flavor of the forests by ordering a jar of our cliff honey. The rich flavor of this honey comes from the thousands of wildflowers from which the bees collect the nectar. The untouched pristine purity of the forests will be evident in every spoon of this honey. ",
//     rating: 4,
//     price: 450.0,
//   },
//   {
//     id: 5,
//     name: "Lychee Honey",
//     image:
//       "https://honeyandspice.in/cdn/shop/products/Front-01_a27eebfb-cdc3-4db7-b0e7-8b063d15f8ec.png?v=1683144335&width=420",

//     image1:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceSweetCliffHoney250gmbacktwo.png?v=1683144483&width=420",

//     image2:
//       "https://honeyandspice.in/cdn/shop/products/Honey_SpiceSweetCliffHoney250gmback.png?v=1683144483&width=420",

//     description:
//       "Lychee honey is a light amber-colored honey that comes from the lychee orchards in the Muzzafarpur region in Bihar. This honey is extremely flavourful, light & buttery. Enjoy this raw honey as a sweetener in your drink, warm toast, or desserts. ",
//     rating: 3.5,
//     price: 480,
//   },
// ];
