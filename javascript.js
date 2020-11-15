// MASYVAI - ARRAY
let klasiokai=["Simas","Kestas","Lina","Mantas"];
console.log(klasiokai);
console.log(klasiokai[2]);
console.log(klasiokai.length); //masyvo ilgi issikonsoliname

//idedam i masyva paskutini nari dar viena
let lastElement=klasiokai.push("Karolis");
console.log(klasiokai);

//istrinam is masyvo
let trinuPaskutini=klasiokai.pop();
console.log(klasiokai);

//i masyvo prieki kai reikia ideti nauja nari
let pirmasElementas=klasiokai.unshift("Skaiva");
console.log(klasiokai);

//kai is masyvo pradzio norim istrinti pirma masyvo nari
let pirmas=klasiokai.shift();
console.log(klasiokai);

//splice()
let naujasElementas=klasiokai.splice(0,2);
console.log(klasiokai);

//kopija atsargai
let kopijaAtsarga=klasiokai.slice();
console.log(klasiokai);

console.log(klasiokai.sort());

console.log(klasiokai.reverse());

//JS Objektai
let automobilis = {
    marke:"Audi",
    turis:2.0,
    spalva:"juoda"
}
console.log(automobilis);
console.log(automobilis.turis);
console.log(automobilis.marke);

//map() metodas
//filter() metodas, kai salygas kazkokias atitikti turi

//map metodas sukuria kaip ir nauja kopija ir ja turiu ant kazko issisaugoti
const klasiokaiNaujas=klasiokai.map((manoElementas,joIndex) =>{
    return manoElementas+ " numeris "+joIndex;
});
console.log((klasiokaiNaujas));

//filter metodas
const klasiokaiFilter=klasiokai.filter((manoElementas,joIndex) =>{
    return manoElementas==="Lina";
})
console.log(klasiokaiFilter);

// localStorage.setItem("myCat", "Tom");
// const animal=localStorage.getItem("myCat");
// console.log(animal);

localStorage.clear();

// CIKLAI - LOOPS - susiaurintai uzrasyti pasikartojancius veiksmus
//for ciklas
//while ciklas
// do while - viena karta ivykdys, o tik tada patikrins
// while - pirmiau patikrins, o tik tada vykdys

//SUPRASTI skirtuma tarp siu :
// continue - kaip restartuojasi, salyga atitiko, sita praleidziam ir toliau griztam i cikla
//break - nutraukia, jei salyga neteisinga

//cia printina tik nelyginius skaicius. Cikla suka tol kol randa lygini, bet jo neprintina, o tiesiog vel persoka atgal i ciklo pradzia,ir kai randa nelygini, tai ji isprintina
for (let i=0; i<6; i++){
    if (i%2==0) {
        continue;
    }
        else{
        console.log((i))
    }
}

//for in - galima matyti i gili duomenis

let person={
    female:{
        Name:"Marie",
        LastName:"Curie",
        Inventions:{
            first:"Theory of Radioactivity",
            second:"Radium",
            third:"Polonium"
        }
    },
    male:{
        Name:"Thomas",
        Surname:"Edison",
        Inventions:{
            first:"Electronic lightbulb",
            second: "Motion picture camera"
        }
    }
}

for (let gender in person) {
        console.log(gender);
    for (let pavadinimai in person[gender]){
        if (typeof person[gender][pavadinimai]!="object") {
            console.log(pavadinimai + ":" + person[gender][pavadinimai]);
        }
        else {
            console.log(pavadinimai+":")
            for(let isradimai in person[gender][pavadinimai]){
                console.log(isradimai + ":" + person[gender][pavadinimai][isradimai]);
                }
            }

        }

}

