import React from "react";
import axios from "axios";

const ERC20_transfer_for_address = () => {
  const transfers = () => {
    axios
      .get(
        "https://api.covalenthq.com/v1/1/address/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045/transfers_v2/?contract-address=0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0&key=ckey_72773976706e44d2967b834462e"
      )
      .then(function (response) {
        // handle success
        console.log("response is :", response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <div>Get all erc20 transfers</div>
      <button onClick={transfers}>click</button>
    </div>
  );
};

export default ERC20_transfer_for_address;
