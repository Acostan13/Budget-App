var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id
    this.description = description
    this.value = value
  }

  var Income = function (id, description, value) {
    this.id = id
    this.description = description
    this.value = value
  }

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  }

  return {
    addItem: function (type, desc, val) {
      var newItem, ID

      // Create new ID
      if(data.allItems[type].length > 0){
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1
      } else {
        ID = 0
      }

      // Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, desc, val)
      } else if (type === 'inc') {
        newItem = new Income (ID, desc, val)
      }

      // Push it into data structure
      data.allItems[type].push(newItem)

      // Return the new element
      return newItem
      
    },
    
  testing: function() {
    console.log(data)
  }

  }
})()

var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  }

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      }
    },

    getDOMstrings: function () {
      return DOMstrings
    },
  }
})()

var appController = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings()

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem)

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem()
      }
    })
  }

  var ctrlAddItem = function () {
    var input, newItem

    //1. Get the filed input data
    input = UIController.getInput()

    // 2. Add the item to the budget controller
    newItem = budgetController.addItem(input.type, input.description, input.value)

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
  }

  return {
    init: function () {
      console.log("Application has started")
      setupEventListeners()
    },
  }
})(budgetController, UIController)

appController.init()
