const Session = require("../models/Session");

class UserSession {


    static updateSession(email, token) {
        try {
            return Session.findOneAndUpdate(
                {email: email},
                {token: token},
                {upsert: true, new: true});
        } catch (e) {
            return {error: e}
        }
    }


    static getSession(email) {
        try {
            return Session.findOne({email: email});
        } catch (e) {
            return {error: e}
        }
    }


    static deleteSession(email) {
        try {
            return Session.findOneAndDelete({email: email});
        } catch (e) {
            return {error: e}
        }
    }

}

module.exports = UserSession;