const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const {username , email, password} =req.body;
  
  //Check if user already exists
  const existingUser = await User.findOne({email});
  if (existingUser){
    return res.status(409).json({message: "User already exists!!"});
    alert("User already exists!!");
  }
  
   //encryptedPassword
   const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    //CryptoJS.enc.Utf8.parse(password), 'my pass phrase'
    process.env.PASS_SEC
  ).toString();

  //create new user
  const newUser = new User({
    username,
    email,
    password: encryptedPassword,
  });

  try {
    const savedUser = await newUser.save();
    const accessToken = jwt.sign(
      {id: savedUser._id, isAdmin : savedUser.isAdmin},
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    )
    res.status(201).json({user: savedUser, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGOUT
router.delete("/logout", (req,res)=>{
  try {
    // Clear the cookie containing the access token
    res.clearCookie("accessToken");
    res.status(200).json("User logged out successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
