export const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}