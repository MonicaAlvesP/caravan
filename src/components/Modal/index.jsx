export const ModalLogin = () => {
  return (
    <div className="modal" id="modalLogin" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLoginTitulo">Entre na sua Conta</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form action="">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                <input type="password" className="form-control" id="senha" name="senha" required />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="lembrar" />
                <label className="form-check-label" htmlFor="lembrar">Lembrar-me</label>
              </div>
              <button type="submit" className="btn btn-primary">Entrar na sua conta</button>
            </form>
            <div>
              <span>Esqueceu sua senha? <a href="#" className="text-decoration-none">Clique aqui.</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}