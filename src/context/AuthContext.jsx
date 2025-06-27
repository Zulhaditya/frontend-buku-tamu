import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem('rememberMe') === 'true'
  );

  useEffect(() => {
    const checkAuth = async () => {
      // Gunakan localStorage jika rememberMe true, sessionStorage jika false
      const token = rememberMe
        ? localStorage.getItem('authToken')
        : sessionStorage.getItem('authToken');

      if (token) {
        try {
          const response = await fetch('http://localhost:5000/admin/verify', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          const data = await response.json();

          if (response.ok && data?.user) {
            setUser(data.user);
          } else {
            clearAuth();
          }
        } catch (error) {
          clearAuth();
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [rememberMe]);

  const clearAuth = () => {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    setUser(null);
  };

  const login = async (email, password, remember) => {
    try {
      const response = await fetch('http://localhost:5000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Login failed');

      // Simpan preferensi rememberMe
      setRememberMe(remember);
      localStorage.setItem('rememberMe', remember.toString());

      // Simpan token sesuai preferensi rememberMe
      if (remember) {
        localStorage.setItem('authToken', data.token);
      } else {
        sessionStorage.setItem('authToken', data.token);
      }

      setUser(data.user);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    clearAuth();
    localStorage.removeItem('rememberMe');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      rememberMe,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
