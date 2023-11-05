// PaymentGateway.js
import React, { useState } from 'react';
import styles from "../stylesheets/Payment.module.css" ;

function Payment() {
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handlePayment = () => {
    // request
  };

  return (
    <div className={styles.payment_gateway}>
      <h1>Payment Gateway</h1>
      <div className={styles.payment_form}>
        <label>
          Amount (in MATIC):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          Wallet Address:
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </label>
        <button onClick={handlePayment}>Pay with MATIC</button>
      </div>
    </div>
  );
}

export default Payment;
