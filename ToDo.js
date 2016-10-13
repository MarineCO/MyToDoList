console.log('checkbox');

(function main () {

//Click Add

	$('#addTasksBtn').on('click', function(){

	console.log('hello');
	
	});



//Click hide tasks to do
	$('#hideTasksToDoBtn').click(function(){

		var boxChecked = $('input[type=checkbox]:checked');
		var boxUnchecked = $('input[type=checkbox]:not(:checked)');


			if (boxChecked) {
				boxChecked.parent('div').hide();
				boxUnchecked.parent('div').show();
			}


	});

//Click hide tasks done


})();