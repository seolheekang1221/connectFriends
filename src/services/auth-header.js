const authHeader = () => {
    const name = JSON.parse(localStorage.getItem('name'));
    if (name && name.accessTon) {
        //for node
        return { 'access-token': name.accessToken };
    } else {
        return {};
    }
}

export default authHeader;