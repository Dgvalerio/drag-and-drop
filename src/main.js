(function controller(doc, win) {
  /** Help */
  // eslint-disable-next-line no-console
  const log = (message) => win.console.log(message);

  /** App */
  // For draggable
  const dragstart = () => {
    log('> CARD: Star dragging');
  };

  const drag = () => {
    log('> CARD: Is dragging');
  };

  const dragend = () => {
    log('> CARD: Stop drag!');
  };

  // For dropzone
  const dragenter = () => {
    log('> DROPZONE: Enter in zone!');
  };

  const dragover = () => {
    log('> DROPZONE: In zone!');
  };

  const dragleave = () => {
    log('> DROPZONE: Leave the zone!');
  };

  const drop = () => {
    log('> DROPZONE: Dropped!');
  };

  /** Control DOM */
  const cards = doc.querySelectorAll('.card');
  const dropZones = doc.querySelectorAll('.dropzone');

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
