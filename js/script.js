const actionBtn = document.querySelector('.action-btn');

const modal = (body) => {
  return `
    <div class="modal">
        <p class="modal-title ${body.type}">
            <i class="modal-title-icon" data-feather="info"></i>
            ${body.title}
        </p>
        <p class="modal-description">
            ${body.description}
        </p>
        <div class="modal-buttons">
            <button class="modal-accept">${body.accept_btn}</button>
            <button class="modal-decline">${body.decline_btn}</button>
        </div>
        <button class="modal-close-icon"><i data-feather="x"></i></button>
    </div>`;
};
const createModal = (value) => {
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';
  modalContainer.innerHTML = modal(value);
  document.body.appendChild(modalContainer);
  feather.replace();
};

const addToBasket = () => {
  console.log('dodano do koszyka');

  createModal({
    type: 'success',
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
 


























actionBtn.addEventListener('click', addToBasket);
