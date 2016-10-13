console.log('checkbox');

(function main () {

//Click Add

	$('#addTasksBtn').on('click', function(){

	console.log('hello');

	var addTask = $('input[name=addTask]').val();

	$('.list').append('<li>' + '<input type="checkbox" class="task">' + addTask + '</li>')

	});


})();