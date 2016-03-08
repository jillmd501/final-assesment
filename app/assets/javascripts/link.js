function Link(data) {
  this.id = data.id;
  this.title = data.title;
  this.url = data.url;
  this.read = data.read;

  this.render().bindEvents();
}

Link.prototype.promote = function () {
  if (this.read === 'unread') { this.quality = 'read'; }
  return this.update();
};

Link.prototype.demote = function () {
  if (this.quality === 'read') { this.quality = 'unread'; }
  return this.update();
};

Link.prototype.delete = function () {
  $.ajax({
    method: 'DELETE',
    url: '/api/v1/links/' + this.id
  }).then(function () {
    this.element.remove();
  }.bind(this));
};

Link.prototype.update = function () {
  return $.ajax({
    method: 'PUT',
    url: '/api/v1/links/' + this.id,
    data: this.toJSON()
  });
};

Link.prototype.render = function () {
  this.element = $(linkTemplate(this));
  return this;
};

Link.prototype.rerender = function () {
  this.element.replaceWith(this.render().bindEvents().element);
  return this;
};

Link.prototype.prependTo = function (target) {
  this.element.prependTo(target);
  return this;
};

Link.prototype.toJSON = function () {
  return { link: _.pick(this, ['title', 'url', 'read']) };
};

Link.prototype.bindEvents = function () {
  this.element.find('.link-delete').on('click', function () {
    this.delete();
  }.bind(this));

  this.element.find('.link-promote').on('click', function () {
    this.promote().then(this.rerender.bind(this));
  }.bind(this));

  this.element.find('.link-demote').on('click', function () {
    this.demote().then(this.rerender.bind(this));
  }.bind(this));

  return this;
};
