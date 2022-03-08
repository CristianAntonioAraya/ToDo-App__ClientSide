
import Swal from "sweetalert2"

export const validSignInForm = ( email, password )=>{
    console.log('validation...')
    if(email === '' ){
        Swal.fire({
            title: 'Email is missing',
            timer: '1500',
            icon: 'error',
            showConfirmButton: false
        })
        return false
    }
    if(password === ''){
        Swal.fire({
            title: 'Password is missing',
            timer: '1500',
            icon: 'error'
        })
        return false
    }
    return true
}  