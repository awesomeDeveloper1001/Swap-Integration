import React, { useEffect, useState, Fragment, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import Sidebar from './GeneralComponents/Sidebar';
import ModalConnect from './GeneralComponents/ModalConnect';
import TopNav from './GeneralComponents/TopNav';
import _, { add } from "lodash";
import { loadContract } from '../utils';
import { BigNumber } from "@0x/utils";

import { assert } from "@0x/assert";

import { walletTokens as toks } from "../constants/spot-config/mainnet/config.json";

import {
  BTC, CHANGE_NOW_FLOW, SIDE_SHIFT_TYPE, supportedDEXes, SIMPLE_SWAP_FIXED, DEXesImages,
  ZERO, PARASWAP_REFERRER_ACCOUNT, networks_dict
} from "../constants";
import { ChainId } from "@uniswap/sdk";
import { useToasts } from 'react-toast-notifications';
import Load from './GeneralComponents/Load';
import { selectClasses } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ERC20_ABI } from '../constants/abis/erc20';

import SelectBox from './GeneralComponents/BridgeSelectBox';
import Grid from '@mui/material/Grid';
import InputSample from './GeneralComponents/InputBox';



function Bridge(props: any) {

  const { active, account, deactivate, library } = useWeb3React();
  const [show, setShow] = useState(false);
  const [currShow, setCurrShow] = useState(false);

  const useStyles = makeStyles((theme) => ({
    content: {
      // minHeight: "calc(100vh - 150px)",
      backgroundColor: "#00132f",
      backgroundSize: "100% 100%",
      textAlign: "center",
      border: "1px solid white",
      borderRadius: 20
    },
    header: {
      borderBottom: "1px solid rgb(26 43 68)",
      padding: "25px 0"
    },
    h_font_size: {
      fontSize: 25,
      margin: 0,
      fontWeight: "bold"
    },
    select_part: {
      padding: 30,
      borderBottom: "1px solid rgb(26 43 68)",
    },
    input_part: {
      padding: 30,
    },
    switch_btn: {
      height: "100%",
      display: "flex",
      alignItems: "end",
      justifyContent: "center",
    },
    connect_wallet: {
      borderRadius: 50,
      width: "100%",
      height: 60,
      backgroundColor: "grey",
      color: "white",
      border: "1px solid grey"
    }
  }));

  const classes = useStyles();



  const html =
    <div id="page-content-wrapper">
      {/* Top navigation*/}
      <TopNav show={[show, setShow]} />
      {/* Page content*/}
      <div className="right-side">
        <div className="container-fluid">
          <div className="row mt-4">
            <h1>Bridge</h1>
            <p>Get the best price on different exchanges</p>
          </div>


          <Grid container className="mt-4">
            <Grid item lg={3} md={12} sm={12} xs={12}>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <div className={classes.content}>

                <div className={classes.header}>
                  <p className={classes.h_font_size}>ChainPort</p>
                </div>

                <div className={classes.select_part}>
                  <Grid container className="m-0 p-0">
                    <Grid item lg={5} md={5} sm={5} xs={12} className="m-0 p-0 text-left">
                      <label htmlFor="" className="">From</label>
                      <SelectBox />
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={12} className="m-0 p-0">
                      <div className={classes.switch_btn}>
                        <img src="assets/icons/bridge/switch.png" alt="" width="45" className="mt-4" />
                      </div>
                    </Grid>
                    <Grid item lg={5} md={5} sm={5} xs={12} className="m-0 p-0 text-left">
                      <label htmlFor="">To</label>
                      <SelectBox />
                    </Grid>
                  </Grid>
                </div>

                <div className={classes.input_part}>
                  <Grid container className="m-0 p-0">
                    <Grid item lg={5} md={5} sm={5} xs={12} className="m-0 p-0 text-left">
                      <label htmlFor="" className="">Select a Token</label>
                      <SelectBox />
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={12} className="m-0 p-0">
                      
                    </Grid>
                    <Grid item lg={5} md={5} sm={5} xs={12} className="m-0 p-0 text-left">
                      <label htmlFor="">Enter Amount to Port</label>
                      <InputSample />
                    </Grid>
                  </Grid>
                </div>

                <div className="p-4">
                  <button className={classes.connect_wallet}>Connect Wallet</button>
                </div>

              </div>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
            </Grid>
          </Grid>

        </div>

        <div className="mt-5">
          <footer>
            <p className="text-center text-white">
              <a href="#" className="text-white"><small>Terms &amp; Condition</small></a> | <a href="#" className="text-white"><small>Privacy Policy</small></a>
              <br />
              <small>© 2021 ABC Token</small>
            </p>
          </footer>
        </div>
      </div>
    </div>

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar current={props.current} />
      {html}
      <ModalConnect show={show} setShow={setShow} />
    </div>
  )

}

export default Bridge;