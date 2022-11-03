const myBtn = document.getElementById("dark");
const myBtn2 = document.getElementById("kontak");

function darkmode(){
    var styles = `* body {
        background:#232426;
        color:#fff;
        line-height:1.3;
        font-size:16px;
        font-size:.9rem;
    }
   
   p {
        font-size: 16px;
        line-height:2.5
    }
   
   .section-margin {
        margin:4em auto
    }
   
   .section-header {
        text-align:center;
        margin-bottom:2em
    }
   
   .section-header h1 {
        margin:.5em auto;
        font-size:2rem
    }
   
   .banner {
        background-color:#232426
    }
   
   .banner-image {
        background-repeat:no-repeat;
        background-position:center center;
        background-size:cover;
        margin-left:auto;
        margin-right:auto;
        height:900px;
        max-width:100%;
        position:relative;
        display:flex;
        align-items:center
    }
   
   .header {
        text-align:center;
        width:100%
    }
   
   .header .header-logo {
        max-width:100%
    }
   
   .section-container {
        width:1140px;
        margin-left:auto;
        margin-right:auto
    }
   
   .shortcut {
        background-color:rgba(255,255,255,.07);
        padding:1em 0 1.5em
    }
      
   .shortcut-container {
        text-align:center
    }
      
   .shortcut-button {
        display:inline-block;
        text-align:center;
        padding:1em 2em;
        line-height:1.5;
        border-radius:.25em;
        overflow:hidden;
        color:#b8a56a;
        background-color:transparent;
        border:1px solid #b8a56a;
        transition:all .2s;
        font-size:110%;
        border-width:2px;
        width:auto;
        margin:.2em 0;
        text-decoration: none
    }
      
   .shortcut-button:hover {
        background-color:#b8a56a;
        color:#fff;
        border-color:transparent
    }
   
   .section-perkenalan {
        text-align:center
    }
   
   .section-kontak .section-content {
        display:flex;
        justify-content:center
    }
   
   .section-container table {
        border-collapse: collapse;
        width: 100%;
        color: #b8a56a;
        border: 2px solid #b8a56a;
        text-align: left;
    }
   
   .section-container table td, .section-container table th {
        border: 1px solid #b8a56a;
        padding: 8px;
   }
   
   .contact-form {
        padding: 0 10%;
        width: 50%;
   
    }   
       
   .contact-form input {
        border: 1px solid #808080;
        font-size: 12px;
         padding: 10px 0;
        text-transform: uppercase;
    }
   
   input[type="text"] {
        float: left;
        margin-bottom: 8px;
        padding-left: 3%;
        width: 44.9%;
    }
   
   .gutter {
        margin-right: 2.8%;
    }
   
   input[type="submit"] {
        text-align:center;
        padding:.6em 1.2em;
        line-height:1.5;
        border-radius:.25em;
        overflow:hidden;
        color:#b8a56a;
        background-color:transparent;
        border:1px solid #b8a56a;
        transition:all .2s;
        padding:.7em;
        font-size:110%;
        border-width:2px;
        width:100%;
        text-decoration: none
    }
   
   input[type="submit"]:hover {
        background-color:#b8a56a;
        color:#fff;
        border-color:transparent
    }
    `;

    var styleSheet = document.querySelector('style');
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
}

function formkontak(){
    // Membuat virtual dom.
    let divElement = document.createElement('div');
    // divElement.classList.add('container');

    // Remove child element.

    // Form element.
    let formElement = `
    <form action="#">
        <form class="contact-form" method="post" action="/data_diri.php">
                    <input class="gutter" type="text" id="nama" name="nama" placeholder="Nama">
                    <input type="text" id="email" name="email" placeholder="E-mail">
                    <br><br><br>

                    Sudah membaca data diri diatas?

                    <br><br>
                    <input type="radio" id="sudah" name="pilihan" value="Bike">
                    <label for="sudah"> Sudah</label>
                    <input type="radio" id="belum" name="pilihan" value="Car">
                    <label for="belum"> Belum</label><br>
                    <br>

                    Media komunikasi yang digunakan

                    <br><br>
                    <input type="checkbox" id="wa" name="comm" value="Whatsapp">
                    <label for="wa"> Whatsapp</label>
                    <input type="checkbox" id="dc" name="commn" value="Discord">
                    <label for="dc"> Discord</label>
                    <br><br>
                    <input class="gutter" type="text" id="nowa" name="nowa" placeholder="No. WhatsApp">
                    <input type="text" id="dcu" name="dcu" placeholder="Discord Username">
                    <br><br>
                    <input type="submit" value="Submit">
                </form>
    </form>`;
    divElement.insertAdjacentHTML("beforeend", formElement);

    // Tempelkan ke halaman.
    const formWrapper = document.querySelector('.add-form')
    formWrapper.appendChild(divElement);
}

myBtn.addEventListener("click", darkmode);
myBtn2.addEventListener("click", formkontak);