$(function() {
	if ($('.datagrid').length) {
		return $.nette.ajax({
			type: 'GET',
			url: $('.datagrid').first().data('refresh-state')
		});
	}
});