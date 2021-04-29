const {DataTypes} = require('sequelize');
const db = require('../connection');

const Transaction = db.define('Transaction', {
    transaction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: ,
        //     key: ,

        // }
    },
    order_id: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: ,
        //     key: ,
        // }
    },
    code: {
        type: DataTypes.STRING,
        comment: 'The payment id provided by the payment gateway.'
    },
    payment: {
        type: DataTypes.STRING,
        comment: 'Cash, cash on delivery, cheque, or online.'
    },
    status: {
        type: DataTypes.STRING,
        comment: 'New, Cancelled, Failed, Pending, Declined, Rejected, and Success.'
    },
    content: {
        type: DataTypes.STRING,
        comment: 'used to store the additional details of the transaction.'
    }
    
});

Transaction.sync({alter: true}).then(() => {
    console.log('Transaction table ready...');
}).catch(err => {
    console.log('Transaction table sync error: ' + err);
})