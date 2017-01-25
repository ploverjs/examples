(function($) {


$(ready);


function ready() {
  handleDeleteLink();
}


function handleDeleteLink() {
  $('.books').on('click', '[data-request=delete]', function(e) {
    e.preventDefault();

    if (!window.confirm('确定要删除？')) {
      return;
    }

    request($(this).attr('href'), { _method: 'delete' });
  });
}


function request(url, data) {
  var form = $('<form>');
  form.attr('method', 'post')
    .attr('action', url);

  var field = function(name, value) {
    var input = $('<input type="hidden" />');
    input.attr('name', name);
    input.val(value);
    form.append(input);
  };

  field('_csrf', csrf());

  for (var name in data) {
    field(name, data[name]);
  }

  form[0].submit();
}


function csrf() {
  return $('head meta[name=x-csrf]').attr('content');
}


})(jQuery);
