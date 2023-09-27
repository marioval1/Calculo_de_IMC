export const AlertError = {//AQUI criamos uma constante que vai interagir com o alert-error que temos no html.
  element: document.querySelector('.alert-error'),
  open(){
    AlertError.element.classList.add('open')//AQUI estamos add a clase open para a clase 'alert-error' do html. no css ja temos configurada a clase 'open'
  },
  close(){
    AlertError.element.classList.remove('open')//AQUI estamos remove a clase open para a clase 'alert-error' do html. no css ja temos configurada a clase 'open'
  }
}
