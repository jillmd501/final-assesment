var linksContainer;

$(document).ready(function () {
  linksContainer = $('.links');
  LinkRepository.all()
                .then(renderIdeas)
                .then(prependIdeasToContainer);
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

function renderLink(link) {
  link.render = function () {
    this.element = $(linkTemplate(this));
    return this;
  };

  link.prependTo = function (target) {
    this.element.prependTo(target);
    return this;
  };
  def create_link
    Link.create(title: "Graduation", url: "http://www.imouttahere.com")
  end
  return link.render();
}
