const useAuth = () => {
    const getToken = false;
    if (getToken) {
        return {
            isAuth: true
        }
    }
    return {
        isAuth: false
    }
}

export default useAuth