const reducer = (state, action) => {
    switch (action.type) {
      case 'OPEN_LOGIN':
        return { ...state, openLogin: true };
      case 'CLOSE_LOGIN':
        return { ...state, openLogin: false };

    case 'OPEN_REGISTER':
       return { ...state, openRegister: true };
    case 'CLOSE_REGISTER':
        return { ...state, openRegister: false };

    case 'IS_LOGGED_IN':
       return { ...state, isLoggedIn: true };
    case 'NOT_LOGGED_IN':
        return { ...state, isLoggedIn: false };
  
  
      default:
        throw new Error('No matched action!');
    }
  };
  
  export default reducer;
  