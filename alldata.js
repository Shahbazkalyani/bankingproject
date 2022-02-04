function AllData() {
  const ctx = React.useContext(UserContext);
  // const [show, setShow] = React.useState(true);

  const content = <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Balance</th>
      </tr>
    </thead >
    <tbody>
      <tr>
        <td>{ctx.users[1].name}</td>
        <td>{ctx.users[1].email}</td>
        <td>{ctx.users[1].password}</td>
        <td>{ctx.users[0].balance}</td>
      </tr>
    </tbody>
  </table >

  return (
    <>
      {content}
    </>
  )
}
