import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const OrderForm = ({ open, setOpen, selectedSize, itemSlug, itemPrice }) => {
  //Client Identity
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  //Client Location
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  //Client Payment Type
  const [paymentType, setPaymentType] = useState("");
  //Error Message
  const [errorMessage, setErrorMessage] = useState();

  const handleInputChange = (e, setInput) => {
    if (errorMessage) setErrorMessage("");
    setInput(e.target.value);
  };

  const axiosApi = useAxios();
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    if (
      ![
        fullName,
        phoneNumber,
        email,
        country,
        city,
        address,
        paymentType,
      ].every((x) => (x ? true : false))
    ) {
      setErrorMessage("Please complete the form");
      return;
    }

    const response = await axiosApi.post("products/create-order", {
      full_name: fullName,
      phone_number: phoneNumber,
      email,
      country,
      city,
      address,
      payment_type: paymentType,
      item: {
        slug: itemSlug,
        size: selectedSize,
        price: itemPrice,
      },
    });

    return navigate("/");
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Place Order</DialogTitle>
      <DialogContent>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Grid container direction="column" spacing={2} p={1}>
          <Grid item xs={4} container direction="column" spacing={1}>
            <Grid item xs={4}>
              <TextField
                label="Full Name"
                size="small"
                value={fullName}
                onChange={(e) => handleInputChange(e, setFullName)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Phone Number"
                size="small"
                value={phoneNumber}
                onChange={(e) => handleInputChange(e, setPhoneNumber)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Email"
                size="small"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
              />
            </Grid>
          </Grid>
          <Grid item xs={4} container direction="column" spacing={1}>
            <Grid item xs={4}>
              <TextField
                label="Country"
                size="small"
                value={country}
                onChange={(e) => handleInputChange(e, setCountry)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="City"
                size="small"
                value={city}
                onChange={(e) => handleInputChange(e, setCity)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Address"
                size="small"
                value={address}
                onChange={(e) => handleInputChange(e, setAddress)}
              />
            </Grid>
          </Grid>
          <Grid item xs={4} container direction="column" spacing={1}>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Payment Type</FormLabel>
                <RadioGroup
                  row
                  value={paymentType}
                  onChange={(e) => handleInputChange(e, setPaymentType)}
                >
                  <FormControlLabel
                    control={<Radio />}
                    label="Cash"
                    value="Cash"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Card"
                    value="Card"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item container direction="row" textAlign="center" xs={6}>
              <Grid item xs={6}>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={handleFormSubmit}>Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
