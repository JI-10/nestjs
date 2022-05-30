import { json } from "express"
import * as mongoose from "mongoose"

export const psSchema= new mongoose.Schema({
    id: {type:String,required:true},
    user_profile: {type:String,required:true},
    image: {type:String,required:false},
    location: {type:JSON,required:true},
    created_at: {type:Date,required:true},
    updated_at: {type:Date,required:true}
    // title: {type:String,required:true},
    // description: {type:String,required:true},
    // price: {type:Number,required:true},
})
export interface parking_space {
  
     id: string
     user_profile: string
     image: string
     location: JSON
     created_at:Date
     updated_at:Date
}
