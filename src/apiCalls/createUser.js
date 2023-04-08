import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import firestoreDatabase from '../firebaseConfig'
import CryptoJS from "crypto-js";

export const createUser = async (payload) => {
    try {
        const docRef = collection(firestoreDatabase, 'users')
        const qry = query(
            collection(firestoreDatabase, "users"),
            where("email", "==", payload.email)
        );
        const qrySnapshot = await getDocs(qry)
        console.log({ qrySnapshot })
        if (qrySnapshot.size > 0) {
            throw new Error('user is already excist')
        }

        // hash password
        const hashedPassword = CryptoJS.AES.encrypt(
            payload.password,
            "sheyjobs-lite"
        ).toString();
        payload.password = hashedPassword;


        await addDoc(docRef, payload)
        return {
            success: true,
            message: 'User Created Successfully '
        }
    } catch (error) {
        return error
    }

}


export const LoginUser = async (payload) => {
    try {
        const qry = query(
            collection(firestoreDatabase, "users"),
            where("email", "==", payload.email)
        );
        const userSnapshots = await getDocs(qry);
        if (userSnapshots.size === 0) {
            throw new Error("User does not exist");
        }

        // decrypt password
        const user = userSnapshots.docs[0].data();
        user.id = userSnapshots.docs[0].id;
        const bytes = CryptoJS.AES.decrypt(user.password, "sheyjobs-lite");
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== payload.password) {
            throw new Error("Incorrect password");
        }

        return {
            success: true,
            message: "User logged in successfully",
            data: user,
        };
    } catch (error) {
        return error;
    }
};
