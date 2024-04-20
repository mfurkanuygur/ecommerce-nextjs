import { toast } from "react-toastify";

export const getAllProducts = async () => {
    const res = await fetch("http://localhost:3000/products")
    return res.json()
}

export const getProductDetail = async (slug) => {
    const res = await fetch(`http://localhost:3000/products/${slug}`)
    return res.json()
}

export const createNewUser = async (newUser) => {
    try {
        const res = await fetch(`http://localhost:3000/users`)
        const users = await res.json()
        const isUserExists = users.some(
            user =>
                user.name === newUser.name &&
                user.surname === newUser.surname &&
                user.password === newUser.password
        )
        if (isUserExists) {
            throw new Error("Kullanıcı zaten var")
        }

        const addUser = await fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        if (!addUser.ok) {
            throw new Error('Yeni kullanıcı eklerken bir hata oluştu');
        }
        const user = await addUser.json();
        const createUserCart = await fetch('http://localhost:3000/carts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: user.id, items: [] })
        });
        if (!createUserCart.ok) {
            throw new Error('Kullanıcıya ait sepette bir hata oluştu');
        }
        if (addUser.ok && createUserCart.ok) {
            sessionStorage.setItem("isLogin", newUser.id)
        }
        return user
    }
    catch (error) {
        console.log(error)
        throw error;
    }
};

export const getUserInfos = async (uniqueUser) => {
    try {
        const res = await fetch(`http://localhost:3000/users`)
        const users = await res.json()
        const isUserExists = users.find(
            user =>
                user.name === uniqueUser.name &&
                user.surname === uniqueUser.surname &&
                user.password === uniqueUser.password
        )
        if (!isUserExists) {
            throw new Error("Kullanıcı yok kayıt olun!")
        }
        else {
            sessionStorage.setItem("isLogin", isUserExists.id)
        }
        return isUserExists
    }
    catch (error) {
        throw error;
    }

}

export const addProductToCart = async (userID, product) => {
    try {
        const res = await fetch(`http://localhost:3000/carts/${userID}`)
        const cart = await res.json()
        const isProductInCart = cart.items.some(item => item.productId === product.id);

        if (isProductInCart) {
            cart.items.forEach(item => {
                if (item.productId === product.id) {
                    item.quantity += 1;
                }
            });
        } else {
            cart.items.push({
                productId: product.id,
                productImg: product.image,
                productTitle: product.title,
                productPrice: product.price,
                productCategory: product.category,
                quantity: 1
            });
        }
        await fetch(`http://localhost:3000/carts/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
        });
    }
    catch (error) {
        throw error;
    }
}
export const getUserCart = async (userID) => {
    try {
        console.log(userID)
        const res = await fetch(`http://localhost:3000/carts/${userID}`);
        const cart = await res.json();
        return cart.items; 
    } catch (error) {
        throw error;
    }
}