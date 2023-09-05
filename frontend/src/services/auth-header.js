export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.Tokens.access_token) {
        return {'Authorization': 'Bearer ' + user.Tokens.access_token};
    } else {
        return {};
    }
}

