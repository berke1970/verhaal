var readline = require('readline-sync')
/*

    Keuzeverhaal

*/

let dialogue1, dialogue2, dialogue3, dialogue4;
dialogue1 = ""
dialogue2 = ""
dialogue3 = ""
dialogue4 = ""
function addSpaces(txt, len){
    let output = txt.toString();
    while (output.length < len){
        output += " ";
    }
    return output;
}



function stuk0(dialogue1, dialogue2, dialogue3, dialogue4){
    
    console.log("                                                 {- Superheld -} ")
    console.log("                                                     Berke Yazici")
    console.log("")
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Voordat je naar bed gaat ," ,115) + "| ");
    console.log(" | " + addSpaces("Je maakt jezelf klaar",115) + "| ");
    console.log(" | " + addSpaces("Je moet naar school,",115) + "| ");
    console.log(" | " + addSpaces("Maar je hebt geen zin in school.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
       answerstuk0 = ['Start'],
    indexstuk0 = readline.keyInSelect(answerstuk0, '');
   
    if (indexstuk0 == 0) {
        stuk1()        
    }

}
function stuk1(dialogue1, dialogue2, dialogue3, dialogue4){
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je hebt geen zin in school. " ,115) + "| ");
    console.log(" | " + addSpaces("Voordat je naar school gaat eet je ontbijt",115) + "| ");
    console.log(" | " + addSpaces("Je gaat de douche in. ",115) + "| ");
    console.log(" | " + addSpaces("Je bent nu ready om naar school te gaan maar je hebt GEEN zin",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk1 = ['Ga naar school', 'Blijf thuis',],
    indexstuk1 = readline.keyInSelect(answerstuk1, 'Wat kies je?');
    
    if (indexstuk1 == 0) {
        stuk2()        
    } else if (indexstuk1 == 1){
        stuk4()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");

}
function stuk2(dialogue1, dialogue2, dialogue3, dialogue4){
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik ga toch wel naar school. " ,115) + "| ");
    console.log(" | " + addSpaces("Het is HEEL koud, Dus ik doe een Dikke jas aan.",115) + "| ");
    console.log(" | " + addSpaces("Lopend onderweg naar school zie ik een zwerver.",115) + "| ");
    console.log(" | " + addSpaces("Hij heeft het heel koud",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk2 = ['Loop door naar school.', 'Help de zwerver',],
    indexstuk2 = readline.keyInSelect(answerstuk2, 'Wat kies je?');
    if (indexstuk2 == 0) {
        stuk3()        
    } else if (indexstuk2 == 1) {
        stuk5()
    }
            
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
}

function stuk3(dialogue1, dialogue2, dialogue3, dialogue4){
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Nu kom ik aan op school. " ,115) + "| ");
    console.log(" | " + addSpaces("Maar toen ik aankwam merkte ik iets heel raars.",115) + "| ");
    console.log(" | " + addSpaces("Er was niemand op school,Ik liep naar binnen maar het leek wel achtergelaten. ",115) + "| ");
    console.log(" | " + addSpaces("Blijkt het dat ik bij de verkeerde locatie aankwam",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk3 = ['Ga terug naar huis', 'Loop door naar school',],
    indexstuk3 = readline.keyInSelect(answerstuk3, 'Wat kies je?');
    if (indexstuk3 == 0) {
        stuk4()        
    } else if (indexstuk3 == 1){
        stuk6()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    

}
function stuk4(dialogue1, dialogue2, dialogue3, dialogue4){
    
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Gelukkig dat ik Thuis ben gebleven, Het is superkoud",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 1 : THUIS GEBLEVEN XXX",115) + "| ");
    console.log(" | " + addSpaces(". ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk5(dialogue1, dialogue2, dialogue3, dialogue4){
  
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik heb besloten om toch de zwerver geholpen. ",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 2: De zwerver Geholpen XXX ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    

}
function stuk6(dialogue1, dialogue2, dialogue3, dialogue4){
    
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik loop nu onderweg naar school.",115) + "| ");
    console.log(" | " + addSpaces("Totdat er een groep mensen naar mij toe lopen en vragen mij om een gunst.",115) + "| ");
    console.log(" | " + addSpaces("Als ik voor hun drugs ga smokkelen geven hun mij miljoenen euros. ",115) + "| ");
    console.log(" | " + addSpaces("Ik weet niet wat ik moet doen.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk6 = ['Accepteer het', 'Doorlopen naar school',],
    indexstuk6 = readline.keyInSelect(answerstuk6, 'Wat kies je?');
    if (indexstuk6 == 0) {
        stuk11()        
    } else if (indexstuk6 == 1){
        stuk7()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk7(dialogue1, dialogue2, dialogue3, dialogue4){
  
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik heb het NIET geaccepteerd, Ik kom aan op school..",115) + "| ");
    console.log(" | " + addSpaces("Mijn eerste les is engels maar tijdens mijn eerste les gaat het luchtalarm af.",115) + "| ");
    console.log(" | " + addSpaces(" De hele school schrikt terwijl he tniet de eerste maandag van de maand is.",115) + "| ");
    console.log(" | " + addSpaces(" Dus waarom gaat het luchtalarm af?.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk7 = ['Blijf binnen', 'Ren naar buiten om te checken',],
    indexstuk7 = readline.keyInSelect(answerstuk7, 'Wat kies je?');
    if (indexstuk7 == 0) {
        stuk8()        
    } else if (indexstuk7 == 1){
        stuk10()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk8(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Het blijkt dat het een test was, Dus er was helemaal nergens om voor te stressen.",115) + "| ");
    console.log(" | " + addSpaces("Wij gaan nu verder met engels, Na een lange dag loop ik terug naar huis",115) + "| ");
    console.log(" | " + addSpaces("Maar onderweg naar huis heb ik dorst en wil ik graag drinken en iets te eten.",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk8 = ['Ga iets eten', 'Loop door naar huis',],
    indexstuk8 = readline.keyInSelect(answerstuk8, 'Wat kies je?');
    if (indexstuk8 == 0) {
        stuk10()        
    } else if (indexstuk8 == 1){
        stuk9()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk9(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik heb dorst, Dus ik ga toch wel wat te eten en te drinken. ",115) + "| ");
    console.log(" | " + addSpaces("Ik heb zin in burger king dus ik ga dat maar eten. ",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 3: Eten Einde XXX,",115) + "| ");
    console.log(" | " + addSpaces(". ",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk10(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Het was een test maar gelukkig einde school dus ik kan nu naar huis lopen,.",115) + "| ");
    console.log(" | " + addSpaces("Onderweg naar huis zie ik brand bij een paar huizen .",115) + "| ");
    console.log(" | " + addSpaces("Er is een HELE grote vlam uit een huis aan het komen .",115) + "| ");
    console.log(" | " + addSpaces("Ik hoor verschillende mensen en families schreeuwend. Bang voor hun leven...",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk10 = ['Help en red alle mensen en families', 'Laat de brandweer hun werk doen',],
    indexstuk10 = readline.keyInSelect(answerstuk10, 'Wat kies je?');
    if (indexstuk10 == 0) {
        stuk12()        
    } else if (indexstuk10 == 1){
        stuk15()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk11(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Het blijkt dat de mensen die mij om een gunst vroegen. ",115) + "| ");
    console.log(" | " + addSpaces("Die huizen in de fik hebben gestoken..",115) + "| ");
    console.log(" | " + addSpaces("Maar toen ik hun gunst accepteerde zag ik OVERAL brand..",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk11 = ['Vecht tegen de mafia', 'Red alle mensen',],
    indexstuk11 = readline.keyInSelect(answerstuk11, 'Wat kies je?');
    if (indexstuk11 == 0) {
        stuk13()        
    } else if (indexstuk11 == 1){
        stuk12()
    
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk12(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik red toch liever alle mensen alleen, Ik wist niet wat ik moest doen..",115) + "| ");
    console.log(" | " + addSpaces("Ik heb super krachten die ik kan gebruiken, MAAR die wil ik geheim houden...",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk12 = ['Gebruik super krachten', 'Laat de brandweer hun werk doen',],
    indexstuk10 = readline.keyInSelect(answerstuk12, 'Wat kies je?');
    if (indexstuk12 == 0) {
        stuk16()        
    } else if (indexstuk12 == 1){
        stuk15()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk13(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik weiger de deal, Ze pakken een wapen en SCHIETEN mij. Maar met mijn super krachten voelen die kogels als kietels,",115) + "| ");
    console.log(" | " + addSpaces("Maffia Leden rennen voor hun leven",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk13 = ['Achtervolg de maffia', 'Schiet ze dood',],
    indexstuk10 = readline.keyInSelect(answerstuk13, 'Wat kies je?');
    if (indexstuk13 == 0) {
        stuk17()        
    } else if (indexstuk13 == 1){
        stuk14()
    }
   
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk14(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Met de wapens waarmee ze mij probeerde te schieten.",115) + "| ");
    console.log(" | " + addSpaces("Heb ik hun dood geschoten. ",115) + "| ");
    console.log(" | " + addSpaces(".",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 4 : DOOD XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ")
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk15(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik heb besloten verder te lopen want de brandweer kan heel goed hun werk doen",115) + "| ");
    console.log(" | " + addSpaces("Maar de brandweer blijkt niet genoeg te zijn.",115) + "| ");
    console.log(" | " + addSpaces("Ik hoor tientallen mensen en families in paniek raken..",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk15 = ['Gebruik super krachten', 'Ga maar terug naar huis...',],
    indexstuk10 = readline.keyInSelect(answerstuk15, 'Wat kies je?');
    if (indexstuk15 == 0) {
        stuk16()        
    } else if (indexstuk15 == 1){
        stuk20()
    }
   
    
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk16(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik gebruik mijn superkrachten om mensen te helpen.",115) + "| ");
    console.log(" | " + addSpaces("Ik heb de krachten om van vuur water te maken.",115) + "| ");
    console.log(" | " + addSpaces("Maar ik het moet het ZO goed timen want ik wil namelijk niet dat iemand mij ziet.",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk16 = ['Gebruik de krachten PER direct', 'gebruik ze NIET',],
    indexstuk10 = readline.keyInSelect(answerstuk16, 'Wat kies je?');
    if (indexstuk16 == 0) {
        stuk18()        
    } else if (indexstuk16 == 1){
        stuk21()
    }
 
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk17(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik zie nog een maffia lid rennend voor hun leven.",115) + "| ");
    console.log(" | " + addSpaces("Mij smeken zodat ik hem niet schiet.",115) + "| ");
    console.log(" | " + addSpaces("Maar aan de andere kant heeft hij VEEL veel geld laten vallen. ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk17 = ['Schiet de maffia', 'Geef geld aan arme mensen',],
    indexstuk10 = readline.keyInSelect(answerstuk17, 'Wat kies je?');
    if (indexstuk17 == 0) {
        stuk14()        
    } else if (indexstuk17 == 1){
        stuk18()
    }
    
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");

}
function stuk18(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik heb besloten mijn krachten toch wel te gebruiken en iedereen is gered..",115) + "| ");
    console.log(" | " + addSpaces("En ik heb geld gegeven aan de arme mensen.,",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 5: GOEDE EINDE XXX. ",115) + "| ");
    console.log(" | " + addSpaces(".",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");


}
function stuk19(dialogue1, dialogue2, dialogue3, dialogue4){
   
   
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces(". ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk20(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik loop nu ECHT naar huis eindelijk na een hele lange dag.",115) + "| ");
    console.log(" | " + addSpaces("Maar ik heb honger ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk20 = ['Gebruik de krachten PER direct', 'gebruik ze NIET',],
    indexstuk10 = readline.keyInSelect(answerstuk20, 'Wat kies je?');
    if (indexstuk20 == 0) {
        stuk9()        
    } else if (indexstuk20 == 1){
        stuk21()
    }
   
   
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk21(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Ik ga maar toch naar bed",115) + "| ");
    console.log(" | " + addSpaces(" ik ben HEEL moe, Volgende dag wordt het weer hetzelfde verhaal",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk21 = ['Gebruik de krachten PER direct', 'gebruik ze NIET',],
    indexstuk10 = readline.keyInSelect(answerstuk21, 'Wat kies je?');
    if (indexstuk21 == 0) {
        stuk1()        
    } else if (indexstuk21 == 1){
        stuk22()
    }
   
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk22(dialogue1, dialogue2, dialogue3, dialogue4){
   
    

    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("XXX EINDE 6: LAATSTE EINDE!.",115) + "| ");
    console.log(" | " + addSpaces(" ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}


stuk0()


