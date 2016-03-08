var linksContainer;

$(document).ready(function () {
  linksContainer = $('.links');
  LinkRepository.all()
                .then(renderLinks)
                .then(prependLinksToContainer);
});

function prependLinkToContainer(link) {
  link.prependTo(linksContainer);
  return link;
}

function prependLinksToContainer(links) {
  return links.map(prependLinkToContainer);
}

function renderLinks(links) {
  links.map(renderLink);
  return links;
}

function renderLink(idea) {
  idea.render = function () {
    idea.element = $(ideaTemplate(idea));
    return idea;
  };

  idea.prependTo = function (target) {
    idea.element.prependTo(target);
    return idea;
  };

  idea.delete = deleteLink;

  idea.bindEvents = function () {
    idea.element.find('.idea-delete').on('click', function () {
      idea.delete();
    });

    return idea;
  };

  return idea.render().bindEvents();
}
