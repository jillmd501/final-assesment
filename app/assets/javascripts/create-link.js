var newLinkTitle, newLinkUrl

$(document).ready(function () {
  newLinkTitle = $('.new-link-title');
  newLinkUrl = $('.new-link-url');

  $('.new-link-submit').on('click', createLink);
});

function createLink(event) {
  event.preventDefault();
  LinkRepository.create(getNewLink())
                .then(prependLinkToContainer)
                .fail(renderError);
}


function getNewLink() {
  return {
    title: newLinkTitle.val(),
    url: newLinkUrl.val()
  };
}
