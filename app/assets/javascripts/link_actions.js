function deleteLink() {
  $.ajax({
    method: 'DELETE',
    url: '/api/v1/links/' + this.id
  }).then(function () {
    this.element.remove();
  }.bind(this))
}

function updateLink() {
  return $.ajax({
    method: 'PUT',
    url: '/api/v1/links/' + this.id,
    data: this.toJSON()
  });
}
