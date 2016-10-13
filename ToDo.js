console.log('checkbox');

(function main () {

//Click Add

$('#addTasksBtn').on('click', function(){

	console.log('hello');

	var addTask = $('input[name=addTask]').val();

	$('.list').append('<li>' + '<input type="checkbox" class="task">' + addTask + '</li>')

});


//Click hide tasks to do

	$('#hideTasksToDoBtn').on('click', function(){

		console.log('ok');

		$('input[type=checkbox]:not(:checked)').parent('li').hide();
		$('input[type=checkbox]:checked').parent('li').show();

	});

	$('#hideTasksDoneBtn').on('click', function(){

		console.log('ok2');

		$('input[type=checkbox]:checked').parent('li').hide();
		$('input[type=checkbox]:not(:checked)').parent('li').show();

	});

	$('#showAllTasksDoneBtn').on('click', function(){

		console.log('ok3');

		$('input[type=checkbox]:checked').parent('li').show();
		$('input[type=checkbox]:not(:checked)').parent('li').show();

	});


})();