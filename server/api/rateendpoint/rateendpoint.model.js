'use strict';

import mongoose from 'mongoose';

var RateendpointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Rateendpoint', RateendpointSchema);
