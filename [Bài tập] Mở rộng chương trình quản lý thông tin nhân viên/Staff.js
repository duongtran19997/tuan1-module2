var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["others"] = 2] = "others";
})(gender || (gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, sex, birthday, email, phoneNumber) {
    }
    return Staff;
}());
