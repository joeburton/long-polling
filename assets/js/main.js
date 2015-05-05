var longPolling = (function() {
	
	var api = 'http://localhost/~joe/labs/long-polling/data_json.php?role=all',
	    counter = 0,
	    initLoad = 0, // call immediately on first load
	    main = $('.main'),
	    ul = main.find('ul');
	    
    var poll = function () {
		setTimeout(function() {
			$.ajax({ url: api, success: function(data) {
				
				displayNames(data);
				initLoad = 2000; // set the polling time to 5 seconds
				
			}, complete: poll, dataType: "json"});
		}, initLoad);
	};
	
	var displayNames = function (data) {		
		counter = counter + 1;
        console.log('Server data ' + counter + ':' + data['1'].id + '\n');
        ul.append('Server data' + counter + ':' + data['1'].id + '<br />');
	}

	poll();
    
})();

