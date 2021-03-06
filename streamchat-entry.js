/*
 * Copyright (c) (2016) Starlis LLC / Daniel Ennis (Aikar)
 *
 *  http://aikar.co
 *  http://starlis.com
 *
 *  @license MIT
 *
 */

const path = require('path');
require("babel-register")({
	only: path.join(__dirname, "lib"),
	extensions: [".js"]
});
require("./lib/app");
