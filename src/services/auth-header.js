const authHeader = () => {
    const name = JSON.parse(localStorage.getItem('name'));
    if (name && name.accessToken) {
        //for node
        return { 'access-token': name.accessToken };
    } else {
        return {};
    }
}

export default authHeader;