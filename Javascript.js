let isDesignChanged = false;

function Design() {
    const bild =document.querySelector(".Hauptfoto");
    const back =document.querySelector("body");
    const hauptfoto = document.querySelector("#Hauptfoto");
    const gelernt = document.querySelector("#gelernt");
    const erklearung = document.querySelector("#Erklearung");
    const menu = document.getElementById("menu");
    const h3 = document.querySelector(".meine");
    const projekte = document.getElementsByClassName("projek");
    const p = document.querySelector ("p")
    
    if (isDesignChanged) {
        bild.setAttribute("src", "zurperson.png");
        back.style.backgroundColor = "oklch(20.5% 0 0)";
        hauptfoto.style.backgroundColor = "oklch(20.5% 0 0)";
        gelernt.style.backgroundColor = "oklch(20.5% 0 0)";
        erklearung.style.backgroundColor = "oklch(20.5% 0 0)";
        menu.style.backgroundColor = "oklch(20.5% 0 0)";
        h3.style.color = "#5a0f1b";
        projekte[0].style.color = "white";
        p.innerHTML = `Dieses Projekt ist mein Einstieg in die Webentwicklung.  
Ich habe HTML, CSS und JavaScript selbstständig gelernt, mit Neugier, Geduld und vielen Stunden Übung.  
Alles, was Sie hier sehen, habe ich Schritt für Schritt eigenständig aufgebaut.  
Es ist vielleicht noch nicht perfekt, aber es ist echt. Und es zeigt, wie viel Leidenschaft und Lernbereitschaft dahintersteckt.
`;
        
    }
    else{
        bild.setAttribute("src", "hobbysemfundo.png");
        back.style.backgroundColor = "white";
        hauptfoto.style.backgroundColor = "white";
        gelernt.style.backgroundColor = "white";
        erklearung.style.backgroundColor = "white";
        menu.style.backgroundColor = "oklch(26.8% 0.007 34.298)";
        h3.style.color = "oklch(26.8% 0.007 34.298)";
        projekte[0].style.color = "oklch(14.1% 0.005 285.823)";
        p.innerHTML = `Diese Funktion dient nur dazu zu zeigen, dass ich mit JavaScript grundlegende Logik wie Bedingungen, Styles und Bildwechsel anwenden kann.`;

    }
    isDesignChanged = !isDesignChanged;  
}

function hobby() {
    window.location.href = "hobby.html"
}

function EU() {
    window.location.href = "Lebenslauf.html"
}
function WebD(){
    window.location.href = "index.html"
}

function Startseite(){
    window.location.href = "bewerbung.html"
}
