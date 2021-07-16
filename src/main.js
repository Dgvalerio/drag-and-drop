(function controller(doc, win) {
  /** Help */
  // eslint-disable-next-line no-console,no-unused-vars
  const log = (message) => win.console.log(message);

  /** App */
  // Selecting nodes
  const cards = doc.querySelectorAll('.card');
  const dropZones = doc.querySelectorAll('.dropzone');

  // For .card
  function dragstart() {
    // log('> CARD: Star dragging');
    dropZones.forEach((dropzone) => dropzone.classList.add('highlight'));

    this.classList.add('is-dragging');
  }

  function drag() {
    // log('> CARD: Is dragging');
  }

  function dragend() {
    // log('> CARD: Stop drag!');
    dropZones.forEach((dropzone) => dropzone.classList.remove('highlight'));

    this.classList.remove('is-dragging');
  }

  // For .dropzone
  function dragenter() {
    // log('> DROPZONE: Enter in zone!');
  }

  function dragover() {
    // log('> DROPZONE: In zone!');

    this.classList.add('over');

    // Get dragging card
    const cardBeingDragged = doc.querySelector('.is-dragging');

    // Append card
    this.appendChild(cardBeingDragged);
  }

  function dragleave() {
    // log('> DROPZONE: Leave the zone!');

    this.classList.remove('over');
  }

  function drop() {
    // log('> DROPZONE: Dropped!');
    this.classList.remove('over');
  }

  /** Adding events */
  cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart, false);
    card.addEventListener('drag', drag, false);
    card.addEventListener('dragend', dragend, false);
  });

  dropZones.forEach((dropZone) => {
    dropZone.addEventListener('dragenter', dragenter, false);
    dropZone.addEventListener('dragover', dragover, false);
    dropZone.addEventListener('dragleave', dragleave, false);
    dropZone.addEventListener('drop', drop, false);
  });
})(document, window);
