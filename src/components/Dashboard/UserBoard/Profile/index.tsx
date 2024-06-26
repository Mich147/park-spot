function Profile() {
  return (
    <div id="profile">
      <h2>Profile</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Change Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="New password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default Profile
