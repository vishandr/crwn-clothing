import { signInWithGooglePopUp } from '../../utils/firebase/firebase.utils'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        // console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign-In Page</h1>
            <button onClick={logGoogleUser}>
                Sign-In with Google PopUp
            </button>
        </div>
    )
}

export default SignIn