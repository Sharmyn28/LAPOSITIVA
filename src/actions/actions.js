import store from '../store/store'
import { auth, database } from './firebase';

export function signUp(name, last, email, password) {
    console.log('signUp', name, last, email, password);
    auth.createUserWithEmailAndPassword(email, password).then(user => {
        let newuser = {
            name, last, email, password
        }
        database.ref('users/' + user.uid).set(newuser);
        database.ref('users/' + user.uid).once('value').then(res => {
            const userInfo = res.val();

            console.log('user info sign up', userInfo);
            store.setState({
                successLogin: true,
                user: {
                    id: user.uid,
                    email: userInfo.email,
                    name: userInfo.name,
                    last: userInfo.last,
                    shoppingCard: []
                }
            });
            console.log("signup", store.getState().successLogin);
            console.log("signup", store.getState().user);
        })
    })
}

export function signOut() {
    auth.signOut();
    store.setState({
        successLogin: false,
        user: {
            id: '',
            email: '',
        }
    });
    console.log("successLogin", store.getState().successLogin);
}

export function signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password);
}


auth.onAuthStateChanged(user => {
    if (user) {
        let usersRef = database.ref('/users');
        let userRef = usersRef.child(user.uid);

        database.ref('users/' + user.uid).once('value').then(res => {
            const userInfo = res.val();
            console.log('full info ', userInfo);
            store.setState({
                successLogin: true,
                user: {
                    id: user.uid,
                    email: userInfo.email,
                    name: userInfo.name,
                    last: userInfo.last,
                    shoppingCard: userInfo.shoppingCard
                }
            });
            console.log("SIuser", store.getState().user);
        });

    }
            database.ref('tipo').on('value', res => {
                const productInfo = res.val();
                console.log(productInfo)
                store.setState({
                    products: productInfo
                })
            })
            console.log('holi', store.getState().products);
    // signOut();
});

export function selectSectionAction(label) {
    console.log('label', label);
    store.setState({
       selectedSection: label
    });
}

export function addAution1(price, index) {
    console.log('new price', price);
    console.log('ruta','tipo/mecanica/'+index+'/precio_subasta')
    database.ref('tipo/mecanica/'+index+'/precio_subasta').set(price);
}

export function addAution(price, index) {
    console.log('new price', price);
    console.log('ruta','tipo/mecanica/'+index+'/precio_subasta')
    database.ref('tipo/mecanica/'+index+'/precio_subasta').once('value').then(res => {
        console.log('res-addAution', res.val());
        const valuePrice = res.val();
        console.log('suma', parseInt(valuePrice) + price);
        const suma = parseInt(valuePrice) + price;
        
        database.ref('tipo/mecanica/'+index+'/precio_subasta').set(suma)
    });
}

