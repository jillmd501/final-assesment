var newLinkTitle, newLinkUrl;

$(document).ready(function () {
  newLinkTitle = $('.new-link-title');
  newLinkUrl = $('.new-link-url');

  $('.new-link-submit').on('click', createLink);
});

function createLink(event) {
  event.preventDefault();
  clearErrors();
  IdeaRepository.create(getNewLink())
              .then(prependLinkToContainer)
                .fail(renderError);
}

function clearErrors() {
  return errorMessages.html('');
}

function getNewLink() {
  return {
    title: newLinkTitle.val(),
    url: newLinkUrl.val()
  };
}
