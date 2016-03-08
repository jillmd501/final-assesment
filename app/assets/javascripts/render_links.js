var linksContainer;

$(document).ready(function () {
  linksContainer = $('.links');

  LinkRepository.all()
                .then(prependLinksToContainer);
});

function renderLinks(links) {
  return links.map(renderLink);
}

function renderLink(link) {
  return new Link(link);
}

function prependLinkToContainer(link) {
  link.prependTo(linksContainer);
  return link;
}

function prependLinksToContainer(links) {
  return links.map(prependLinkToContainer);
}
