import './App.css'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated ? user?.name : 'click to login'}
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </>
  )
}

export default App
