function LoginForm(props) {
  return(
    <form className="login-form">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary login-submit">
              Submit
            </button>
          </form>
  )
}

export default LoginForm