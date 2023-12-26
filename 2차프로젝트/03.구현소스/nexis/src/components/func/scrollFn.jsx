import $ from "jquery";

export function scrollFn(dir, sel, num) {
    // dir = case 방식
    // sel = 해당 클래스 및 아이디
    // num = ex)2/3
    let set = $(sel).offset().top * num;
    let doc = $(sel);
    let win = $(window).scrollTop();
    switch (dir) {
        case "top":
            if (win >= set) {
                doc.css({ transform: "translateY(0%)", opacity: "1" });
            } else doc.css({ transform: "translateY(10%)", opacity: "0", transition: "1s ease-out" });
            break;

        case "right30":
            if (win >= set) {
                doc.css({ transform: "translateX(0%)", opacity: "1" });
            } else doc.css({ transform: "translateX(-30%)", opacity: "0", transition: "1s ease-out" });
            break;

        case "left30":
            if (win >= set) {
                doc.css({ transform: "translateX(0%)", opacity: "1" });
            } else doc.css({ transform: "translateX(30%)", opacity: "0", transition: "1s ease-out" });
            break;

        case "scale":
            if (win >= set) {
                doc.css({ scale: 0.7 + win / 5000, transition: ".3s ease-out" });
            } else doc.css({ scale: "1" });
            break;
        case "right":
            if (win >= set) {
                doc.css({ transform: "translateX(-50%)", transition: "1s ease-out" });
            } 
            break;

        case "left":
            if (win >= set) {
                doc.css({ transform: "translateX(50%)", transition: "1s ease-out" });
            } 
            break;
        case "opcity.7":
            if(win >= set){
                doc.css({opacity:"0.7",transition: "1s cubic-bezier(0.25, 0.1, 1, -0.25)"})
            }
            break;
        case "addOn":
            if(win >= set){
                doc.addClass('on');
            }
        default:
            break;
    }
}
