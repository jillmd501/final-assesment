var newLinkTitle, newLinkUrl; errorMessages;

$(document).ready(function () {
  newLinkTitle = $('.new-link-title');
  newLinkUrl = $('.new-link-url');
  errorMessages = $('.new-idea-messages');

  $('.new-link-submit').on('click', createLink);
});

function createLink(event) {
  event.preventDefault();
  clearErrors();
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

function clearErrors() {
  return errorMessages.html('');
}

function renderError() {
  errorMessages.text('Title and/or URL cannot be blank.');
}
