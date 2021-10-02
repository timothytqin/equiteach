import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { PRIMARY_COLOR, TYPOGRAPHY } from "../styles/css/global";
import logo from "../styles/assets/logo_light.png";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { FormatAlignLeft } from "@material-ui/icons";
import { darkWhite } from "material-ui/styles/colors";
import axios from "../lib/axios";

export default function NavBar(props) {
  const [open, setOpen] = React.useState(false);
  const [company, setCompany] = React.useState("");
  const [donation, setDonation] = React.useState("");
  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  const handleDonation = (event) => {
    setDonation(event.target.value);
  };
  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        style={{
          backgroundColor: `${PRIMARY_COLOR}`,

          height: window.innerHeight * 0.09,
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <img
            style={{
              width: 60,
              height: "80%",
              marginRight: 10,
            }}
            src={logo}
            alt="Equiteach"
          />
          <Typography style={{ ...TYPOGRAPHY, fontSize: 36 }}>
            Equiteach
          </Typography>
          <Button
            style={{
              backgroundColor: "#2f2e40",
              color: "white",
              fontWeight: 800,
              fontSize: "1rem",
              textTransform: "capitalize",
              marginLeft: "auto",
              padding: ".5rem 2rem",
            }}
            onClick={() => setOpen(true)}
          >
            Make a donation
          </Button>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            style={
              {
                // width: "50%",
              }
            }
          >
            <div
              style={
                {
                  //backgroundColor: PRIMARY_COLOR
                }
              }
            >
              <h1
                style={{
                  fontWeight: "bold !important",
                  color: PRIMARY_COLOR,
                  marginLeft: "23px",
                  marginBottom: "0px",
                }}
              >
                Make Donation
              </h1>
              <DialogContent>
                <DialogContentText
                  style={{
                    marginTop: "-10px",
                  }}
                >
                  Enter the Company name and Donation amount
                </DialogContentText>
              </DialogContent>

              <h3 style={{ color: "white", margin: "0px" }}>Name</h3>

              <TextField
                value={company}
                variant="outlined"
                onChange={handleCompany}
                label="Company Ticker"
                style={{
                  backgroundColor: "WHITE",
                  margin: "-30px 0px 20px 20px",
                  width: "80%",
                }}
              />

              <h3 style={{ color: "white", margin: "0px" }}>Donation Amount</h3>

              <TextField
                value={donation}
                variant="outlined"
                onChange={handleDonation}
                label="Donation Amount"
                style={{
                  backgroundColor: "WHITE",
                  margin: "-30px 0px 20px 20px",
                  width: "80%",
                }}
              />

              <Button
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  color: "white",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  marginLeft: "auto",
                  padding: "10px",
                  marginBottom: "10px",
                  marginLeft: "20px",
                }}
                onClick={() => {
                  axios
                    .post("/updateDonation", {
                      company: company,
                      donation: donation,
                    })
                    .then(() => {
                      location.reload(); // eslint-disable-line
                    })
                    .catch((err) => console.log(err));
                }}
              >
                submit
              </Button>

              {/* <TextareaAutosize
                aria-label="Company Name"
                placeholder="Name"
                style={{
                  margin: "-5px, -50px",
                  marginTop: "0px",
                  borderRadius: "5px",
                }}
              /> */}
            </div>
          </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
}
