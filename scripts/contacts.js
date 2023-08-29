const copyEmail = document.querySelector('.email-btn')
copyEmail.addEventListener('click', clipboardCopyEmail);
async function clipboardCopyEmail(){
    let text = 'email@gmail.com'
    await navigator.clipboard.writeText(text)
    copyEmail.innerText = 'Copiado'
    setTimeout(() => {
        copyEmail.innerText = 'Copiar'
    }, 10000);
}

const copyWhatsapp = document.querySelector('.whatsapp-btn')
copyWhatsapp.addEventListener('click', clipboardCopyWhatsapp);
async function clipboardCopyWhatsapp(){
    let text = '+55 12 93456 7890'
    await navigator.clipboard.writeText(text)
    copyWhatsapp.innerText = 'Copiado'
    setTimeout(() => {
        copyWhatsapp.innerText = 'Copiar'
    }, 10000);
}

const copyPhone = document.querySelector('.phone-btn')
copyPhone.addEventListener('click', clipboardCopyPhone);
async function clipboardCopyPhone(){
    let text = '+55 12 93456 7890'
    await navigator.clipboard.writeText(text)
    copyPhone.innerText = 'Copiado'
    setTimeout(() => {
        copyPhone.innerText = 'Copiar'
    }, 10000);
}