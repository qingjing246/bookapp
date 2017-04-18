/**
 * Created by Administrator on 2017-04-18.
 */

/**
 * 用户信息
 */
var mongoose = require('./server.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : { type: String },                    //用户账号
    userpwd: {type: String},                        //密码
    userage: {type: Number},                        //年龄
    logindate : { type: Date}                       //最近登录时间
});
