import React from "react";
import axios from "axios";

const All_transection_for_address = () => {
  const allTransection = () => {
    axios
      .get(
        "https://api.covalenthq.com/v1/137/address/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045/transactions_v2/?key=ckey_72773976706e44d2967b834462e"
      )
      .then(function (response) {
        // handle success
        console.log("response is :", response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <div>Get all transections</div>
      <button onClick={allTransection}>click</button>
    </div>
  );
};

export default All_transection_for_address;
