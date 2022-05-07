
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    id:String,
    name: String,
    done: Boolean,
    date: Date,
    selected: Boolean,
    Detail:Array,
    user:String,
})

const Todos = mongoose.model('todos',todoSchema)

const userSchema = new mongoose.Schema({
    id:String,
    avatar: String,
    user:String,
    userName:String
})
const Users = mongoose.model('users',userSchema)

const typeSchema = new mongoose.Schema({
    id:String,
    title: String,
    user:String,
    length:String,
})
const Type = mongoose.model('types',typeSchema)

const hobbySchema = new mongoose.Schema({
    id:String,
    name: String,
    done: Boolean,
    date: String,
    selected: Boolean,
    Detail:Array,
    user:String,
})

const Hobbies = mongoose.model('hobbies',hobbySchema)

module.exports = {
    Todos,
    Users,
    Type,
    Hobbies
}