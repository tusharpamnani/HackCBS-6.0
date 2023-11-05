const express = require('express')
const router = express.Router()
const request = require('request')
const { Circle, CircleEnvironments } = require('@circle-fin/circle-sdk')


const circleApiEndpoint = 'https://api.circle.com/v1/w3s/wallets/{wallet_id}/balances';
const circleApiKey = 'TEST_API_KEY:9fd7a4caab3a380a18f0cafca426ccb6:242434a98e08643c24f25b99a4d716be';
router.get("/", async (req, res) => {
    const walletId = '86112678-bc32-54a3-ac16-b922bca18fb8';

    const options = {
        url: circleApiEndpoint.replace('{wallet_id}', walletId),
        headers: {
            'Authorization': `Bearer ${circleApiKey}`
        }
    };

    request.get(options, async(error, response, body) => {
        if (!error && response.statusCode === 200) {
            res.json({amount:JSON.parse(body).data.tokenBalances[0].amount})
        } else {
            res.status(500).json({ error: 'Failed to retrieve wallet balance' });
        }
    });
})

module.exports = router
