//student routes
const Student = require("../models/studentModel");
const authenticateStudent = require("../middlewares/studentAuth");
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
//const bcrypt = require("bcryptjs");


router.use(express.json());


router.post("/register",async (req,res)=>{
    const {name,email,password,confirmPassword,rollno} = req.body;
    const user = await Student.findOne({email});
    if(user) return res.status(400).json({msg:"Username already exists"});
    if(password !== confirmPassword) return res.status(400).json({msg:"Passwords do not match"});
    else{
        const newStudent  = new  Student({name,email,password,rollno});
        await newStudent.save();
        const token = authenticateStudent.generateToken(user);
        res.json({ message: 'User created successfully', token });    
    }
});


router.post("/login", async (req,res)=>{
    const {email, password} = req.headers;
    const user = await Student.findOne({ email, password });
    if (user) {
        const token =  authenticateStudent.generateToken(user);
        res.json({ message: 'Logged in successfully', token });
    }else {
        res.status(403).json({ message: 'Invalid username or password' });
    }    
});

router.get("/profile",authenticateStudent.authenticateToken ,async (req,res)=>{
    try{
        const studentId = req.user.rollno;
        const students = await Student.findOne({studentId});
        res.send(students);
    }catch(err){
        res.status(500).send({message:err});
    }
        
});
module.exports = router;



