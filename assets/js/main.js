(function() {
	
	var api = 'http://localhost/rank/labs/long-polling/data_json.php?role=all';
    
    // call immediately on first load
    var initLoad = 0;
    
    (function poll() {
		setTimeout(function() {
			$.ajax({ url: api, success: function(data) {
				
				displayNames(data);
				
                // set the polling time to 5 seconds
				initLoad = 2000;
				
			}, complete: poll, dataType: "json"});
		}, initLoad);
	})();
	
	var counter = 0;
	
	function displayNames(data) {		
		counter = counter + 1;
		//console.log('Server data ' + counter + ':' + data);
        console.log('Server data ' + counter + ':' + data['1'].id);
	}
    
    /*
    $.getJSON(api, function(data) {
    
        console.log(data[0].id, data[2].id);
        
    });
    */
    
})();

