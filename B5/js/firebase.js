<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCasR4kbKroD5bgfMfijwlvJT4FiLShwjo",
    authDomain: "jsi31-b1282.firebaseapp.com",
    databaseURL: "https://jsi31-b1282-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jsi31-b1282",
    storageBucket: "jsi31-b1282.firebasestorage.app",
    messagingSenderId: "972114914831",
    appId: "1:972114914831:web:94c83c72c6a12c9a8ebd7a",
    measurementId: "G-EY7N0X9C7W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
function validateLoginForm (email, password) {
    // Kiểm tra bỏ trống trường nhập liệu
    if (email === '' || password === '') {
        alert("You need to fill all fields!");
        return false;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // kiem tra dinh dang email
  if (!emailRegex.test(email)) {
    alert("Email is bad format!");
    return false;
  }

  // pass duoi 6 chu so
  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return false;
  }
  return true;
}

function signinFirebase(email, password) {
    const auth = getAuth(app);
    signInWithEmailAndPassqord(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        alert('Sigin Successfull');

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

    });
}

// bắt sự kiện cho buttton Login
document.querySelector("#login_btn").addEventListener("click", (e) => {
    e.preventDefault();
    // Lấy dữ liệu từ html element
    const email = document.querySelector("#email").ariaValueMax.trim();
    const password = document.querySelector("#password").ariaValueMax.trim();
    // Kiểm tra dữ liệu
    if (validateLoginForm)
})