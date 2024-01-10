var table = document.getElementById("table");
imageState = 0;
var current = 0;
const Images = ["./resources/images/Monkey-Selfie2.jpg", "./resources/images/Monkey-Selfie3.jpg", "./resources/images/Monkey-Selfie.jpg"];
var Gallery; 
function init(){
    window.setTimeout(question, 180000);
    ImageTimer(); 
    tableinit(); 
    Gallery.GalClickHandler();
}
function ImageTimer() {
    const imgarray = document.querySelectorAll(".MonkeyImg");
    imgarray.forEach(function(item){
        item.style.display = "none";
    })
    image(imgarray);
    window.setInterval(function() { image(imgarray); }, 3500 )
}
function image(imgarray) {
     $("#ImageLeft img").eq(current).fadeOut(0);
    current++; 
    current = current % imgarray.length;
    $("#ImageLeft img").eq(current).fadeIn(1500);
}
function tableinit() {
    var x;
    tablevartext = new tablerow();
    tablevarheader = new tableheader();
    x = ["Skills", "Experience", "History"];
    tablevarheader.setToTable(x);
    x = ["Soldering", "Beginner", "School projects and hobby projects that I've been a part of! You can see some of the project in the proceeding gallery!"];
    tablevartext.setToTable(x);
    x = ["Welding", "Experienced", "2 years in the working world!"];
    tablevartext.setToTable(x);
    table.style.borderStyle = "groove"
}
function question() {
    let Answer = prompt("Are you liking the site?", "Yes");
    if (Answer == "Yes") {
        alert("Nice to hear!");
    } else if (Answer == "No") {
        alert("That's a shame");
        document.getElementById("Smiley").innerHTML = "&#128542;"
    } else {
        alert("Can't quite understand");
        document.getElementById("Smiley").innerHTML = "&#128563;"
    }
}
function GalClick(name) {
  Gallery.GalClickHandler(name);
}
function ImgClick(name) {
    Gallery.ImgClickHandler(name); 
}
class galleryhandler{
    ObjectImages = {
            ImgSrc: [''], Info: '', Imagestate2: 0, ChangeImage: function () {
                return this.ImgSrc[this.Imagestate2];
         }
     };
     Image1 = Object.create(this.ObjectImages)
     Image2 = Object.create(this.ObjectImages)
     Image3 = Object.create(this.ObjectImages)
    Gallerystate = 1;
    Objects = [];
    constructor(){
        this.Image1.ImgSrc = ["./resources/images/Monkey_invention.jpg", "./resources/images/Monkey-Selfie.jpg", "./resources/videos/placeholdervideo.mp4"]
        this.Image1.Info = "Introducing the latest in fruity technology - the Banana Phone! This delightful device combines the convenience of a smartphone with the charm of a banana. With its peel-to-answer feature and a 'split-screen' display, it's a-peeling to users of all ages. Whether you're making a potassium-packed call or checking your daily fruit intake, the Banana Phone is the ultimate blend of fun and functionality. It's the talk of the town and the top choice for those seeking a truly a-mazing mobile experience!"
        this.Image2.ImgSrc = ["./resources/images/Monkey_invention2.jpg", "./resources/videos/placeholdervideo2.mp4"]
        this.Image2.Info = "Step into the future with the Banana Phone, where innovation meets a-peel! This futuristic fruit device is not only a conversation starter but also a conversation finisher, with its smoothie-quick connection speeds and bunches of cool features. Its ergonomic design fits perfectly in your hand, and the banana-themed emojis will have you going bananas with excitement. So go ahead, split from the ordinary and embrace the yellow side of technology with the Banana Phone!"
        this.Image3.ImgSrc = ["./resources/images/Monkey_invention3.png", "./resources/images/Monkey-Selfie2.jpg", "./resources/images/Monkey_invention.jpg"]
        this.Image3.Info = "Banana Phones: The Future is Fruit-tastic! With a sleek, yellow design and a 'peel and dial' interface, these fruity gadgets are taking the tech world by storm. They're not just a snack; they're a statement! Whether you're slipping into a serious business call or sharing a tropical joke, the Banana Phone is the berry best way to stay connected. It's time to go bananas for communication with a twist!"
        this.Objects = [this.Image1, this.Image2, this.Image3]
        document.getElementById('gallery1').src = this.Image1.ChangeImage();
        document.getElementById('textInfo').innerHTML = this.Image1.Info;
    }
    GalClickHandler(name) {
        if (this.Gallerystate < 3 && name === 'next') {
            this.Gallerystate++;
        } else if (this.Gallerystate > 1 && name === 'prev') {
            this.Gallerystate--;
        } else if (this.Gallerystate == 3 && name === 'next') {
            this.Gallerystate = 1
        } else if (this.Gallerystate == 1 && name === 'prev'){
            this.Gallerystate = 3
        }
        switch (this.Gallerystate) {
            case 1:
                this.reset();
                this.typehandler(this.Image1.ChangeImage(), this.scrollhandler(this.Gallerystate),0);
                document.getElementById('amount').innerHTML = this.Image1.Imagestate2 + 1 + "/" + this.Image1.ImgSrc.length;
                document.getElementById('textInfo').innerHTML = this.Image1.Info;
                break;
            case 2:
                this.reset();
                this.typehandler(this.Image2.ChangeImage(), this.scrollhandler(this.Gallerystate),1);
                document.getElementById('amount').innerHTML = this.Image2.Imagestate2 + 1 + "/" + this.Image2.ImgSrc.length;
                document.getElementById('textInfo').innerHTML = this.Image2.Info;
                break;
            case 3:
                this.reset();
                this.typehandler(this.Image3.ChangeImage(), this.scrollhandler(this.Gallerystate),2);
                document.getElementById('amount').innerHTML = this.Image3.Imagestate2 + 1 + "/" + this.Image3.ImgSrc.length;
                document.getElementById('textInfo').innerHTML = this.Image3.Info;
                break;
    
        }
    }
ImgClickHandler(name) {
        switch (this.Gallerystate) {
            case 1:
                if (this.Image1.ImgSrc.length - 1 > this.Image1.Imagestate2 && name === "next") {
                    this.Image1.Imagestate2++;
                    document.getElementById('amount').innerHTML = this.Image1.Imagestate2 + 1 + "/" + this.Image1.ImgSrc.length;
                } else if (this.Image1.Imagestate2 > 0 && name === "prev") {
                    this.Image1.Imagestate2--;
                    document.getElementById('amount').innerHTML = this.Image1.Imagestate2 + 1 + "/" + this.Image1.ImgSrc.length;
                }
                this.typehandler(this.Image1.ChangeImage(), this.scrollhandler(this.Gallerystate),0);
                break;
            case 2:
                if (this.Image2.ImgSrc.length - 1 > this.Image2.Imagestate2 && name === "next") {
                    this.Image2.Imagestate2++;
                    document.getElementById('amount').innerHTML = this.Image2.Imagestate2 + 1 + "/" + this.Image2.ImgSrc.length;
                } else if (this.Image2.Imagestate2 > 0 && name === "prev") {
                    this.Image2.Imagestate2--;
                    document.getElementById('amount').innerHTML = this.Image2.Imagestate2 + 1 + "/" + this.Image2.ImgSrc.length;
                }  
                this.typehandler(this.Image2.ChangeImage(), this.scrollhandler(this.Gallerystate),1);
                break;
            case 3:
                if (this.Image3.ImgSrc.length - 1 > this.Image3.Imagestate2 && name === "next") {
                    this.Image3.Imagestate2++;
                    document.getElementById('amount').innerHTML = this.Image3.Imagestate2 + 1 + "/" + this.Image3.ImgSrc.length;
                } else if (this.Image3.Imagestate2 > 0 && name === "prev") {
                    this.Image3.Imagestate2--;
                    document.getElementById('amount').innerHTML = this.Image3.Imagestate2 + 1 + "/" + this.Image3.ImgSrc.length;
                }
                this.typehandler(this.Image3.ChangeImage(), this.scrollhandler(this.Gallerystate),2);
                break;
        }
    }
    reset(){
        $("#gallerycontainer #gallery2").fadeOut(0);
        $("#gallerycontainer #gallery1").fadeOut(0);
        $("#gallerycontainer #gallery").fadeOut(0);
    }
    scrollhandler(){
        if(this.Gallerystate % 2 == 0){
           return 2;
        } else {
            return 1;
        }
    }
    typehandler(value, galstate,object){
        if(value.slice(-4).includes("jpg") || value.slice(-4).includes("png")){
            $("#gallerycontainer #gallery").fadeOut(0);
            $("#gallerycontainer #gallery" + galstate).fadeOut(0);
            document.getElementById('gallery' + galstate).src = this.Objects[object].ChangeImage();
            $("#gallerycontainer #gallery" + galstate).fadeIn(300);
        } else {
            $("#gallerycontainer #gallery" + galstate).fadeOut(0);
            $("#gallerycontainer #gallery").fadeOut(0);
            document.getElementById('gallery').src = this.Objects[object].ChangeImage();
            $("#gallerycontainer #gallery").fadeIn(300);
        }
    }
    }
    Gallery = new galleryhandler;
    class tableheader {
        currentrow = 1;
        row = table.insertRow(5);
        setToTable(value) {
            var header = table.createTHead();
            var row = header.insertRow(0);
            const rows = [row.insertCell(0), row.insertCell(1), row.insertCell(2)];
            for (let i = 0; i < 3; i++) {
                var item = value[i];
                var cell = rows[i];
                cell.innerHTML = "<b>" + item + "<b>";
            }
        }
        getCurrent(){
            return this.currentrow;
        }
    }
    class tablerow extends tableheader {
        constructor() {
            super();
        }
        setToTable(value) {
            Headers = value;
            var row = table.insertRow(super.getCurrent());
            const rows = [row.insertCell(0), row.insertCell(1), row.insertCell(2)];
            for (let i = 0; i < 3; i++) {
                var item = Headers[i];
                var cell = rows[i];
                cell.innerHTML = item;
            }
        }
    }
