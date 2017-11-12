'use strict';

import mongoose from 'mongoose';

var MoviemappingendpointSchema = new mongoose.Schema({
  CITYNAME: String,
   THEATRENAME: String,
    MOVIENAME:String,
 AMPM: String,
 MINUTE:Number,
 HOUR: Number,
 DATE:String,

 POSTER: String

});

export default mongoose.model('Moviemappingendpoint', MoviemappingendpointSchema);
