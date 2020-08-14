var budgetController = (function() {

    // Encapsulated data
    var x = 23
    var add = function(a) {
        return x + a
    }

    // Method available for public use
    return {
        publicTest: function(b) {
            return add(b)
        }
    }

})()

var UIController = (function() {

    // Code here

})()

var controller = (function(budgetCtrl, UICtrl) {

    // Code here
    var z = budgetCtrl.publicTest(5) // 28

    return {
        anotherPublic: function() {
            console.log(z)
        }
    }

})(budgetController, UIController)