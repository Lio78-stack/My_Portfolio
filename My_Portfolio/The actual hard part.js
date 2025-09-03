(() => {

    const tabs = {
        $buttons: document.querySelectorAll('.tab-menu__button'),
        $panels: document.querySelectorAll('.tab-panel'),
        Init() {

            for (let i = 0; i < this.$buttons.length; i++) {
                let $button = this.$buttons[i];
                let $panel = this.$panels[i];

                $button.addEventListener('click', () => {
                    document.querySelector('.tab-menu__button.active').classList.remove('active');
                    $button.classList.add('active');
                    document.querySelector('.tab-panel.active').classList.remove('active');
                    $panel.classList.add('active');

                });

            }
        }
    };

tabs.Init()
})();

