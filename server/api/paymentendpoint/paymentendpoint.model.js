'use strict';

import mongoose from 'mongoose';

var PaymentendpointSchema = new mongoose.Schema({
SEATS: String
});

export default mongoose.model('Paymentendpoint', PaymentendpointSchema);
