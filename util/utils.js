
const request = require("request")
module.exports = class Utils{

    /*
    * PARAM     : message : Array of type String.
    * RETURN    : String composed of elem in message  
    */
    static gatherString(message){
        var toRet = "";
        for (let i = 0; i < message.length; i++) {
            toRet += message[i] + " ";
        }
        toRet = toRet.substring(0,toRet.length - 1);
        return toRet;
    }
}

