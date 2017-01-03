#! /usr/bin/env node
/*
 * find-dev-ip
 * https://github.com/zizther/find-dev-ip
 */

"use strict";

var messages = {
    error: "Couldn't find a suitable IP for you to use. (You're probably offline!)"
};

/**
 * @returns {Array}
 */
function getIp() {

    var networkInterfaces = require("os").networkInterfaces();
    var matches = [];

    Object.keys(networkInterfaces).forEach(function (item) {
        networkInterfaces[item].forEach(function (address) {
            if (address.internal === false && address.family === "IPv4") {
                matches.push(address.address);
            }
        });
    });

    return matches;
}

module.exports = getIp;

if (require.main === module) {

    var out = getIp();

    if (!out.length)
        console.log(messages.error);
    else
        console.log(out);
}
