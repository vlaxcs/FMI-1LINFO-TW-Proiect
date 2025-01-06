# Stardew Valley - Web Experience
## **Temă de laborator**
- Universitatea din București
- Facultatea de Matematică și Informatică
- Licență ~ Informatică IF
- Tehnici Web ~ Semestrul I ~ Grupa 151 > Minciunescu Vlad

## **Conținut**

1. [Despre proiect](#despre-proiect)
2. [Facilități](#facilități)
3. [Cum rulează?](#cum-rulează)
4. [Utilizare](#utilizare)
5. [Tehnologii utilizate](#tehnologii-utilizate)
6. [Validare](#validare)
7. [Informații administrative](#informații-administrative)

## **Despre proiect**

*Stardew Valley - Web Experience* este un mediu interactiv furnizat prin browser, care oferă o experință sumară a jocului propriu-zis.

Utilizatorul poate experimenta comportamente ale anumitor entități din joc, aspectul și dinamica generată în User Interface și câteva noțiuni despre povestea jocului Stardew Valley.

Proiectul este destinat aprofundării tehnicilor generale de generare a conținutului prin intermediul paginilor WEB și de manipulare a interacțiunilor utilizatorilor cu diferite elemente.

### Motivarea alegerii temei

*Stardew Valley* este unul dintre jocurile care m-au apropiat de tematica pixel-art prin aspectul unic pe care îl pune la dispoziție. Stilul de joc este unul care mi se potrivește, care garantează o experiență unică. Progresul se justifică prin calitatea relaționării cu celelalte caractere, prin evoluția financiară și materială și prin deblocarea anumitor facilități. În plus, pune la dispoziție un mediu de joc multiplayer, în timp real.

Paginile web asociate jocului m-au impresionat prin acuratețea maximă prin care prezintă informații relevante despre orice aspect legat de gameplay și povestea jocului.




## **Facilități**

- 📝 **Mesaje informative dinamice**: Afișează informații de interes despre gameplay.
- 🍙 **Slime interactiv**: Un mob care simulează comportamentul din joc în timpul unei lupte.
- 🔊 **Comutator pentru conținut audio și meniu**: Cu ajutorul tastelor, putem manipula funcționalitatea website-ului.
- 👨‍💼 **Sistem de conturi**: Utilizatorii se pot bucura de confidențialitate sporită! Datele despre conturi (inclusiv parolele, dar sub formă criptată) sunt păstrate exclusiv în cache-ul site-ului. Odată ce se face accesul pe un cont, se poate urmări numărul de interacțiuni avute pe site, dar se poate genera și o listă de caractere preferate din joc.
- 🌟**Surprize**: Odată cu interacțiunile de pe website, vor fi generate aleatoriu obiecte corespunzătoare tipului acesteia.
- 🎨 **Generator de avatare**: Un mic sistem prin care poate fi creat un avatar specific dorințelor utilizatorului[^1].
- 🏘 **Galerie a caracterelor din joc**: O mică prezentare, realizat prin funcții care preiau conținut de pe wiki-ul oficial al Stardew Valley[^2].
- 😎 **Easter Eggs**: Descoperiți-le!

## **Cum rulează?**

### Hai să începem!

Pentru a rula acest website, avem nevoie de:
- un browser
- [Node.JS](https://nodejs.org/en)

### Instalare (pentru Windows)

1. Instalați Node.JS (opțional, dacă îl aveți, săriți peste)
```bash
  winget install Schniz.fnm
  fnm env --use-on-cd | Out-String | Invoke-Expression
  fnm use --install-if-missing 22
  node -v
  npm -v
```
2. Clonați repozitoriul
```bash
   git clone https://github.com/vlaxcs/FMI-1LINFO-TW-Proiect.git
   cd FMI-1LINFO-TW-Proiect
```
3. Deschideți Windows PowerShell cu drepturi de administrator și mențineți-l deschis chiar și în timp ce utilizați site-ul.

4. Rulați server.js din locația root (directorul ce poartă numele proiectului)
```bash
   node server.js
```
5. Din browser, accesați [localhost:3000](http://localhost:3000/). Nu sunt suportate extensiile, deci vă recomand să folosiți modul icognito.

## **Utilizare**

### **Butoane de acțiune**

| Cheie   | Acțiune                                             |
|---------|-----------------------------------------------------|
| 'P'     | Pornește/oprește soundtrack-ul jocului
| 'M'     | Afișează/ascunde meniul expandabil
| 'Click' | Generează obiecte și influențează contorul din ceas

### **Management-ul conturilor**

- **Înregistrarea unui cont:**

  La momentul înregistrării, se verifică posibilitatea existenței unui cont căruia să-i corespundă deja aceleași credențiale (caută după numele de utilizator și adresa de email).
  Parola trebuie să îndeplinească niște condiții minimale de securitate, anume *să conțină caractere de tip literă mare, literă mică, cifră, caractere speciale și o lungime rezonabilă*. Cerințele sunt verificate cu ajutorul unor expresiilor regulate.
  Ulterior, parolele sunt stocate în sistem, sub forma generată de algoritmul de criptare SHA-256.

- **Conectarea la contul existent:**

  Atunci când utilizatorul încearcă să se conecteze, există trei posibilități:
    - Contul utilizatorului nu există, deci trebuie să modifice anumite date de intrare
    - Utilizatorul greșește parola, deci trebuie să revizuiască textul introdus
    - Contul utilizatorului există și se creează o sesiune nouă.

## **Tehnologii utilizate**
- HTML5: Structura paginii web.
- CSS3: Modelare vizuală, animații și tranziții.
- JavaScript: Manipularea DOM-ului, interacțiuni, configurarea server-ului și management-ul datelor stocate pe acesta 🍪.

## **Validare**
- Structura arborescentă a documentului în care este salvat proiectul permite navigarea cu ușurință printre componentele acestuia.
- Proiectul respectă standardele industriale de validare HTML în proporție de 98% din cauza unei erori minimale de exprimare, comisă de implementatorul de conținut embedded pentru accesarea unui joc pe platforma Steam (don't blame them). 
- Conținutul CSS respectă standardele impuse.
- Conținutul JavaScript nu generează erori semnificative, care să afecteze experiența utilizatorului.

Calitatea conținutul a fost verificată prin:
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)

## 2doList()

a) mesaj de welcome in casuta speciala cu avatar!!!
b) internationalizare pe toate paginile!!!
b) choose flag!!! la primul refresh dupa ce iti faci contul, default en

## **Informații administrative**
- Acest proiect nu include conținut generat cu ajutorul inteligenței artificiale
- De asemenea, nu au fost utilizate framework-uri / biblioteci pentru simplificarea sarcinilor
- Timp de lucru: 70 de ore
- Testat pe <Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
2, Win32, Icognito (fără extensii)>
- Informație acumulată: pow(2, 1000) bits
- Doamna profesoară încântată: Să sperăm ❤

#### Notă de subsol
[^1]: [Stardew Valley Unofficial Avatar Builder](https://jazzybee.itch.io/sdvcharactercreator)
[^2]: [Stardew Valley Official Wiki](https://stardewvalleywiki.com/Stardew_Valley_Wiki)