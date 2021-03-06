"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/chats", ctrl.output.chats);
router.get("/chat", ctrl.output.chat);
router.get("/find", ctrl.output.find);
router.get("/more", ctrl.output.more);
router.get("/settings", ctrl.output.settings);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router;
