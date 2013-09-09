/* Models */
var Lottery = Backbone.Model.extend({
	myNumbers: [],

	initialize: function() {
		this.on('change:myNumbers', function(model) {
			var newNumbers = model.get('myNumbers');
			console.log('This is ' + newNumbers);
		});
	},

	addNewNumbers: function(newNumbers) {
		this.myNumbers.push(newNumbers);
		console.log(this.myNumbers);
	}

});



/* Models Instances */
var lottery = new Lottery();



/* Views */
var SetOfNumber = Backbone.View.extend({
	initialize: function() {
		this.render();
	},

    render: function(){
    	var aMyNumbers = this.model.get('myNumbers');

    	for(var i = 0; i < aMyNumbers; i++) {
    		var divNumber = '<div class="number"><ul>';
    		var set = this.model.get('myNumbers')[i];

    		for(var j = 0; j < set; j++) {
    			divNumber += '<li>' + set[j] + '</li>';
    		}

    		divNumber += '</ul><button id="read" class="del button yellow icon">Del<span></span></button></div>';
    	}

        // Load the compiled HTML into the Backbone "el"
        this.$el.html( divNumber );
    }

});



/* Views Instances */
var setOfNumbers = new SetOfNumber({
	model: lottery
});
