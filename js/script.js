const actionBtn = document.querySelector('.action-btn');

const modal = (body = {}) => {
  return `
    <div class="modal">
        <p class="modal-title ${body.type || ''}">
            <i class="modal-title-icon" data-feather="${body.modal_icon || 'info'}"></i>
            ${body.title || 'Czy jesteś pewny?'}
        </p>
        <p class="modal-description">
            ${body.description || 'potwierdź swój wybór'}
        </p>
        <div class="modal-buttons">
            <button class="modal-accept modal-action-btn">${body.accept_btn || 'Tak'}</button>
            <button class="modal-decline modal-action-btn">${body.decline_btn || 'Nie'}</button>
        </div>
        <button class="modal-close-icon"><i data-feather="x"></i></button>
    </div>`;
};
const createModal = (body) => {
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';
  modalContainer.innerHTML = modal(body);
  document.body.appendChild(modalContainer);

  const closeIcon = document.querySelector('.modal-close-icon');
  closeIcon.addEventListener('click', () => {
    const modal = document.querySelector('.modal-container');
    modal.remove();
  });

  const closeButtons = document.querySelectorAll('.modal-action-btn');
  closeButtons.forEach(btn => btn.addEventListener('click', () => {
    const modal = document.querySelector('.modal-container');
    modal.remove();
  }));


  feather.replace();
};

const addToBasket = () => {
  console.log('dodano do koszyka');

  createModal({
    modal_icon: 'alert-triangle',
    type: 'warning',
    title: 'lorem ipsum dolor title vla blala laslal llas',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatibus error, ullam ab quos iusto minus! Natus, optio quasi magni fugiat neque atque error unde.',  
    accept_btn: 'Zaakceptuj',
    decline_btn: 'Anuluj',
});
};

actionBtn.addEventListener('click', addToBasket);

const actionTwoBtn = document.querySelector('.action-two-btn');
actionTwoBtn.addEventListener('click', () => {
  createModal({
    title: 'Drugi tekst modala',
    description: 'lapapa ldsald kdlk saldksaldksadlsak llsakds. Qui voluptatibus error, ullam ab quos iusto minus! Natus, optio quasi magni fugiat neque atque error unde.',  
    accept_btn: 'OK',
    decline_btn: 'Nie', 
  });
} );
 
const actionThreeBtn = document.querySelector('.action-three-btn');
actionThreeBtn.addEventListener('click', () => {
  createModal();
});