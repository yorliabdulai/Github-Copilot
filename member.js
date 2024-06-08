function skillsMember() {
    // this is the object that we are going to return
    var obj = {};

    // this is a private variable
    var skills = ['HTML', 'CSS', 'JS'];

    // this is a private function
    function getSkills() {
        return skills;
    }

    // this is a public function
    obj.showSkills = function () {
        return getSkills();
    };

    return obj;
}