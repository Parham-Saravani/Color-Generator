const colors = `<div class="color__total">
                    <div class="color__generated-color">
                    </div>
                    <div class="color__hex--wrapper">
                        <p class="color__hex"></p>
                    </div>
                    <div class="color__copy--wrapper">
                        <div class="color__copy">
                            <svg data-v-3b185968="" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="icon-md-heavy">
                                <path class="color__copy__icon" data-v-3b185968="" fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z"
                                    fill="rgb(230, 230, 230)"></path>
                            </svg>
                        </div>
                    </div>
                </div>`
const colorDiv = document.querySelector('.colors')
const GenerateBtn = document.querySelector('.generate__Btn')
const copyModal = document.querySelector('.Copy__modal')

const alphabet = '0123456789abcedfABCDEF';

let text = '';



function CreateColors() {
    for (let i = 0; i <= 5; i++) {
        const random = Math.floor(Math.random() * 22)
        text += alphabet[random]
    }
}



GenerateBtn.addEventListener('click', function () {
    CreateColors();
    colorDiv.insertAdjacentHTML('afterbegin', colors);

    const test = document.querySelector('.color__copy')
    const fillGeneratedColor = document.querySelector('.color__generated-color');
    const GeneratedColorTitle = document.querySelector('.color__hex');
    GeneratedColorTitle.innerHTML = `#${text}`;
    CopyTheColorHandler(test, GeneratedColorTitle)
    fillGeneratedColor.style.backgroundColor = `#${text}`;
    text = '';
})



function CopyTheColorHandler(test, title) {
        test.addEventListener('click', function () {
            copyModal.style.right = '55rem';
            copyModal.style.top = '0.5rem';
            copyModal.style.opacity = '1'

            setTimeout(function () {
                copyModal.style.top = '-100rem';
                copyModal.style.opacity = '0.5'
            }, 2000)
            navigator.clipboard.writeText(title.textContent)
        })
    }
