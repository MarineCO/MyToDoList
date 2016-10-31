(function main () {

//Click Add

$('#addTasksBtn').on('click', function(){

	var addTask = $('input[name=addTask]').val();

	$('.list').append('<li>' + '<input type="checkbox" class="task">' + ' ' +
		addTask + '</li>' )

});


//Click hide tasks to do

$('#hideTasksToDoBtn').on('click', function(){

	$('input[type=checkbox]:not(:checked)').parent('li').hide();
	$('input[type=checkbox]:checked').parent('li').show();

});

//Click hide tasks done

$('#hideTasksDoneBtn').on('click', function(){

	$('input[type=checkbox]:checked').parent('li').hide();
	$('input[type=checkbox]:not(:checked)').parent('li').show();

});

//Click show all tasks

$('#showAllTasksDoneBtn').on('click', function(){

	$('input[type=checkbox]:checked').parent('li').show();
	$('input[type=checkbox]:not(:checked)').parent('li').show();

});



})();