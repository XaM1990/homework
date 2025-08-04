        const openBtn = document.querySelector('.btn-open')
        const modal = document.querySelector('.modal')
        const closeBtn = document.querySelector('.modal__close-btn')

        const closeModal = () => {
            modal.classList.remove('modal--active')
        }

        openBtn.addEventListener('click', () => {
            modal.classList.add('modal--active')
        })

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('modal--active')
        })

        modal.addEventListener('click', event => {
            if (event.target === modal) {
                modal.classList.remove('modal--active')
            }
        })

        document. addEventListener('keydown', event => {
            if(event.code === 'Escape' && modal.classList.contains('modal--active')) {
                closeModal()
            }
        })