const form01 = document.getElementById('Form-one');
const form02 = document.getElementById('Form-two');
const form03 = document.getElementById('Form-three');
const form04 = document.getElementById('Form-four');
const modal_submit = document.getElementById('modal-success');
const window_Close = document.getElementById('window-exit');
const Section_title = document.getElementById('Title');
let userTitle = document.getElementById('form01-title');
let warning_alert = document.getElementById('warning-alert');


let nameUser = document.getElementById('Applicant-Name');
let Phone_Number = document.getElementById('Phone-Number');
let Farm_produce = document.getElementById('Farm-Produce');
let Phone_Verify = document.getElementById('phone-validation-input');


// form01.style.display = 'none';
form02.style.display = 'none';
form03.style.display = 'none';
form04.style.display = 'none';
modal_submit.style.display = 'none';
warning_alert.style.display = 'none';


let checkPhone;
form01.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    checkPhone = Phone_Verify.value;

    if(checkPhone === "09039294814" || checkPhone === "+2349039294814") {
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Ibrahim Yakubu Ibrahim";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "09013463576" || checkPhone === "+2349013463576"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="KENNETH OKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08034847765" || checkPhone === "+2348034847765"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="AGNES IWUNO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08066244760" || checkPhone === "+2348066244760"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SIMEON ABORA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07063427324" || checkPhone === "+2347063427324"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MARCUS ABORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08068767612" || checkPhone === "+2348068767612"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHRISTIAN CHUKWUEMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08066452611" || checkPhone === "+2348066452611"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Ukamaka CHUKWUEMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08128557336" || checkPhone === "+2348128557336"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OLUCHUKWU NNALUE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07060481029" || checkPhone === "+2347060481029"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="THERESA OFOZOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07030847000" || checkPhone === "+2347030847000"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OBIANUJU URAMU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07011570740" || checkPhone === "+2347011570740"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ADAOBI IBEKWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08067363974" || checkPhone === "+2348067363974"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EKWULIRA UGWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08084297324" || checkPhone === "+2348084297324"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UCHENNA ILOANI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08065218822" || checkPhone === "+2348065218822"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ECHEZONA OKONKWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07037066168" || checkPhone === "+2347037066168"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINAGOROM NOSIKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08038194614" || checkPhone === "+2348038194614"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IJEOMA NWABIA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08061654823" || checkPhone === "+2348061654823"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UDOJI DUAKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08167879016" || checkPhone === "+2348167879016"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EBERE ARALU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07031960067" || checkPhone === "+2347031960067"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EKENE OKEKEOCHA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08037678466" || checkPhone === "+2348037678466"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IGNATIUS OKWUENU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07061658723" || checkPhone === "+2347061658723"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="chika icheoku";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08039177339" || checkPhone === "+2348039177339"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CATHERINE MORBA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08030445659" || checkPhone === "+2348030445659"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="RITA OMELIKAMU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08185453255" || checkPhone === "+2348185453255"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EBELE ODILI-IYKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08033389262" || checkPhone === "+2348033389262"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="BENJAMIN OFILI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08163238268" || checkPhone === "+2348163238268"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ZINAS OKWUTE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07025790455" || checkPhone === "+2347025790455"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MERCY CHIDOKWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08038931407" || checkPhone === "+2348038931407"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JUDITH CHIDOKWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "09013633735" || checkPhone === "+2349013633735"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MIRACLE CHIDOKWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08037526345" || checkPhone === "+2348037526345"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="NICHOLAS ONYEKWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07069071872" || checkPhone === "+2347069071872"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="RICHEAL IKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08030494730" || checkPhone === "+2348030494730"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ROSE ONYEJIAKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07062698712" || checkPhone === "+2347062698712"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SANDRA NWEKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07047136115" || checkPhone === "+2347047136115"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="KAOSISOCHUKWU OKEKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07044459231" || checkPhone === "+2347044459231"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UNOEGO OKEBU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08038012870" || checkPhone === "+2348038012870"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OBIANUJU NWACHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08071400421" || checkPhone === "+2348071400421"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Basil Ilegbunam";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08034776641" || checkPhone === "+2348034776641"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JIDEOFOR MMADUBUONWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07034664227" || checkPhone === "+2347034664227"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="BASIL ANTHONY";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07068340102" || checkPhone === "+2347068340102"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JANE OBIORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICEE"
    }

    else if(checkPhone === "08068067253" || checkPhone === "+2348068067253"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="BENJAMIN OGWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICEE"
    }

    else if(checkPhone === "07038184090" || checkPhone === "+2347038184090"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="NGOZI OGBONNA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICEE"
    }

    else if(checkPhone === "07038377880" || checkPhone === "+2347038377880"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PETER OMOJA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08168393300" || checkPhone === "+2348168393300"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ISAAC NEBOLISA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICEE"
    }

    else if(checkPhone === "08085239354" || checkPhone === "+2348085239354"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SUNDAY CHIDOKWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08085560006" || checkPhone === "+2348085560006"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUNONSO ONOCHIE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08027415393" || checkPhone === "+2348027415393"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SIMEON AMEKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07061132565" || checkPhone === "+2347061132565"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="FRANCISCA OKOYE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08066736421" || checkPhone === "+2348066736421"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Peter Okechukwu";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08062776811" || checkPhone === "+2348062776811"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="LINUS IKECHI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08038138995" || checkPhone === "+2348038138995"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SUNDAY EKWA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08037663177" || checkPhone === "+2348037663177"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EMMANUEL ONYEAKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08075342235" || checkPhone === "+2348075342235"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SUNDAY ONYEAKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "09034661028" || checkPhone === "+2349034661028"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SARAH OGENYI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08060220667" || checkPhone === "+2348060220667"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JOHN EMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "09138703992" || checkPhone === "+2349138703992"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="emeka mmaduadichie";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08160250459" || checkPhone === "+2348160250459"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MBAMALU OKAFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08140588628" || checkPhone === "+2348140588628"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIDEBELU NWACHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08134765550" || checkPhone === "+2348134765550"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UZOCHUKWU MORBA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07038040918" || checkPhone === "+2347038040918"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Nnamdi Ikem";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08034439649" || checkPhone === "+2348034439649"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="FRANK AGULU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07034699251" || checkPhone === "+2347034699251"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JULIET ONYEKWELU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08064948045" || checkPhone === "+2348064948045"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EMMANUEL IKEM";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07033213337" || checkPhone === "+2347033213337"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="BONIFACE EKWEALOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08134644425" || checkPhone === "+2348134644425"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MARTIN ONWUENWUNOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07018567347" || checkPhone === "+2347018567347"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="THEOPHILA IFEDIEGWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07032318833" || checkPhone === "+2347032318833"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SYLVESTER OKAFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "09079753941" || checkPhone === "+2349079753941"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ONYEBUCHI ARIOBA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08038249916" || checkPhone === "+2348038249916"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="AMAKA OKOYE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "09050903506" || checkPhone === "+2349050903506"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Chizoba Onuorah";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "09137817755" || checkPhone === "+2349137817755"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Fidelia ONUORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "09136843992" || checkPhone === "+2349136843992"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Blessing Onuorah";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07068361669" || checkPhone === "+2347068361669"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUEMEKA NWABUNWANNE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08130589893" || checkPhone === "+2348130589893"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="WALTER ONUKWUE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "09071747166" || checkPhone === "+2349071747166"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINEDU OHAZURUIKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08131629360" || checkPhone === "+2348131629360"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Josephin  Chinweuba";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07086322924" || checkPhone === "+2347086322924"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EMEKA ALAZOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07032693839" || checkPhone === "+2347032693839"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="THEOPHILUS ADIGWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08136005739" || checkPhone === "+2348136005739"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Chisom  Okeke";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08032859019" || checkPhone === "+2348032859019"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PETER ILOEGBUNAM";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08061286353" || checkPhone === "+2348061286353"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OGOCHUKWU ANOLIEFO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07063204544" || checkPhone === "+2347063204544"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="NNEKA ONUAGHA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "09159279589" || checkPhone === "+2349159279589"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIBUZOR IKEM";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08036687678" || checkPhone === "+2348036687678"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ELIZABETH OKOYE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "09059986575" || checkPhone === "+2349059986575"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="HILLARY EKWENZE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "09026026359" || checkPhone === "+2349026026359"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MARIAHGORETTY OBECHE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07085738775" || checkPhone === "+2347085738775"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Roseline Ekwealor";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07088954395" || checkPhone === "+2347088954395"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SHADRACH IKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "07067339033" || checkPhone === "+2347067339033"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ejimole okoli";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08126100597" || checkPhone === "+2348126100597"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="BLESSING NWACHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08165660845" || checkPhone === "+2348165660845"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CAROLINE CHUKWUDI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08037952592" || checkPhone === "+2348037952592"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Juliet Ehimuan";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08135939552" || checkPhone === "+2348135939552"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JULIET OKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "07032940980" || checkPhone === "+2347032940980"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINYERE OPUTA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08064221591" || checkPhone === "+2348064221591"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="THERESA EJIOFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "09125054430" || checkPhone === "+2349125054430"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JANE OKAFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "09023589165" || checkPhone === "+2349023589165"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Kenneth Nnachor";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08036723927" || checkPhone === "+2348036723927"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PAMELA ANIJAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "08142777983" || checkPhone === "+2348142777983"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Ogochukwu Ndife";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }

    else if(checkPhone === "09066100976" || checkPhone === "+2349066100976"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IFEOMA Obiadi";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }
    
    else if(checkPhone === "09151977338" || checkPhone === "+2349151977338"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Christian Adojo";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"
    }

    else if(checkPhone === "08068613641" || checkPhone === "+2348068613641"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="RITA AYOGU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "09030138800" || checkPhone === "+2349030138800"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PRECIOUS UZODIMMA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08064790087" || checkPhone === "+2348064790087"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="STEPHEN MMEBO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08125213004" || checkPhone === "+2348125213004"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SAMUEL ANIESODO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08061208840" || checkPhone === "+2348061208840"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JOSEPH UGOCHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07038490796" || checkPhone === "+2347038490796"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JULIUS NWANEGBO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08036955196" || checkPhone === "+2348036955196"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="VINCENT OJADI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08026249466" || checkPhone === "+2348026249466"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHRISTIANA OFODILE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08063917348" || checkPhone === "+2348063917348"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Chukwuka Chinwuba";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07017909886" || checkPhone === "+2347017909886"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Fidelia Nwachukwu";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "09169175487" || checkPhone === "+2349169175487"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIBUIKEM GABRIEL";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "09040945252" || checkPhone === "+2349040945252"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MARYJANE OKONKWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08037561474" || checkPhone === "+2348037561474"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ALEX OKONKWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08064570950" || checkPhone === "+2348064570950"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="INNOCENT ANIJAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07069009267" || checkPhone === "+2347069009267"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PERFECT OHAEGBULEM";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08135121082" || checkPhone === "+2348135121082"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EBUBECHUKWU ANIJAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08039577177" || checkPhone === "+2348039577177"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINEDU NNAEMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08068887164" || checkPhone === "+2348068887164"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Joseph  Okafor";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "09017069671" || checkPhone === "+2349017069671"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Caroline Nnaeke";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08105944881" || checkPhone === "+2348105944881"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="FRANK OFOZOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08036765821" || checkPhone === "+2348036765821"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JAMES OBINECHE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "09018464515" || checkPhone === "+2349018464515"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIAMAKA NNAEMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "09055945388" || checkPhone === "+2349055945388"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IJEOMA OBIORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07035792540" || checkPhone === "+2347035792540"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Bridget Okafor";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07067548282" || checkPhone === "+2347067548282"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIOMA ANIJAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07039157671" || checkPhone === "+2347039157671"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OGOCHUKWU OLOTTAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "09122829117" || checkPhone === "+2349122829117"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Peter Udenze";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08065425361" || checkPhone === "+2348065425361"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIOMA EZIOLISE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "09020001536" || checkPhone === "+2349020001536"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PETER OKONKWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07060763492" || checkPhone === "+2347060763492"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ANTHONY OBAGHA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07013215490" || checkPhone === "+2347013215490"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="KOSISOCHUKWU IBEMECHINA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "09015549807" || checkPhone === "+2349015549807"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIBUOKEM JOHNNWEKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08063256256" || checkPhone === "+2348063256256"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JAMES CHUKWURAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07034717488" || checkPhone === "+2347034717488"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="NNONYELUM UDEFI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08162454493" || checkPhone === "+2348162454493"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUMA IGBOANUGO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08135698641" || checkPhone === "+2348135698641"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Chinenye Ezeudu";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08145680877" || checkPhone === "+2348145680877"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CYNTHIA CHINASAOKWU ORI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08065375287" || checkPhone === "+2348065375287"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINWE UZODIMMA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08100054647" || checkPhone === "+2348100054647"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SEBASTINE MMEBO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08147957354" || checkPhone === "+2348147957354"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ERNEST CHUKWUKA EGWUATU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08068842015" || checkPhone === "+2348068842015"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OGOCHUKWU NWANEGBO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09015514362" || checkPhone === "+2349015514362"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ONYINYE IGBONEKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07038080905" || checkPhone === "+2347038080905"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PRISCILIA NNACHOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07019648152" || checkPhone === "+2347019648152"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="KINGSLEY NNACHOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07063028353" || checkPhone === "+2347063028353"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="AUGUSTINE OKEKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08063200808" || checkPhone === "+2348063200808"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EMMANUEL NNALUE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08143591836" || checkPhone === "+2348143591836"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OLUCHI MBANEFO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08037330658" || checkPhone === "+2348037330658"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="DEBORAH OFORDILE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09037006661" || checkPhone === "+2349037006661"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUEMEKA OKONKWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09071304060" || checkPhone === "+2349071304060"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ANTHONIA UDEALOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08062379109" || checkPhone === "+2348062379109"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ANULIKA OKEKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08141389717" || checkPhone === "+2348141389717"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINASA ANEKWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08144590563" || checkPhone === "+2348144590563"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OLUCHI EZIEGBO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08135775522" || checkPhone === "+2348135775522"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UDECHUKWU OBADIEGWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07067706467" || checkPhone === "+2347067706467"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHRISTIAN MBANEFO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08136549873" || checkPhone === "+2348136549873"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIDIMMA OKOYE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "09062715184" || checkPhone === "+2349062715184"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OGOCHUKWU EKWEMEZE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "09162930811" || checkPhone === "+2349162930811"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="FLORENCE NWAKONUCHE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08063794525" || checkPhone === "+2348063794525"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EPHRAIM ABATU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08137257512" || checkPhone === "+2348137257512"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="NWANNEKA OKONKWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09015843627" || checkPhone === "+2349015843627"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINENYE AMECHI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09036749986" || checkPhone === "+2349036749986"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINEDU CHINWEOBA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07068581221" || checkPhone === "+2347068581221"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MERCY ENEJI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08064072970" || checkPhone === "+2348064072970"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IFEYINWA OKOYE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08160840206" || checkPhone === "+2348160840206"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHRISTOPHER IHEME";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07063185955" || checkPhone === "+2347063185955"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINWE NWANEGBO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08030941972" || checkPhone === "+2348030941972"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUKA NWOSU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08100411612" || checkPhone === "+2348100411612"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CALEB OKAFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07025631835" || checkPhone === "+2347025631835"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ANWULIKA OKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08064191113" || checkPhone === "+2348064191113"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MICHAEL CHILOKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08063872154" || checkPhone === "+2348063872154"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHARLES ONUORA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07018540110" || checkPhone === "+2347018540110"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MaureeN Iloegbunam";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09135631946" || checkPhone === "+2349135631946"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JAMES ONWUBUYA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08141236490" || checkPhone === "+2348141236490"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUEZUGOROM ANIWETALU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08133347410" || checkPhone === "+2348133347410"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PRECIOUS OFFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09155372555" || checkPhone === "+2349155372555"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MONDELA UDEORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07037251494" || checkPhone === "+2347037251494"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JUSTINA OGAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08140822035" || checkPhone === "+2348140822035"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="AMUCHE IGBOELI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08060018065" || checkPhone === "+2348060018065"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="GEORGE ARINZE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08067320882" || checkPhone === "+2348067320882"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ThankGod Offorzor";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07034309015" || checkPhone === "+2347034309015"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINEDU UDILE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08059277661" || checkPhone === "+2348059277661"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OZIOMA NWACHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08137060249" || checkPhone === "+2348137060249"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="NICHOLAS AROMEH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08138670088" || checkPhone === "+2348138670088"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIDUBEM ENUNWOKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08061277336" || checkPhone === "+2348061277336"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="AMALACHUKWU NWENE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "09121237040" || checkPhone === "+2349121237040"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ONYINYECHI OBIORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08108200931" || checkPhone === "+2348108200931"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="GRACE OKEBU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09050230379" || checkPhone === "+2349050230379"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ONYEMECHI NWACHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08101039520" || checkPhone === "+2348101039520"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINASA OBIDIKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08101171363" || checkPhone === "+2348101171363"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EUCHERIA OKOYE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08037389065" || checkPhone === "+2348037389065"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IKECHUKWU OBIAKOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07064214338" || checkPhone === "+2347064214338"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Oluchi  Obidimma";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07061665014" || checkPhone === "+2347061665014"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IGNATIUS NWACHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08067396499" || checkPhone === "+2348067396499"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="christopher NWAKONUCHE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09061491227" || checkPhone === "+2349061491227"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ECHEZONA NWANEGBO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07032503544" || checkPhone === "+2347032503544"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="NCHEDOCHUKWU OHAZULIKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "09038068852" || checkPhone === "+2349038068852"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UFUOMA IGBOGIDI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07032489263" || checkPhone === "+2347032489263"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Ekene  Nwabuisi";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08027087915" || checkPhone === "+2348027087915"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PATRICK UDENZE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08103573671" || checkPhone === "+2348103573671"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ONYEKA IKEBUDU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08143975858" || checkPhone === "+2348143975858"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="GRACE UKADIKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08138393806" || checkPhone === "+2348138393806"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EUCHARIA AYOGU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07062860140" || checkPhone === "+2347062860140"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JOHNSON CHUKWUMA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07032769170" || checkPhone === "+2347032769170"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SUNDAY OKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08038961351" || checkPhone === "+2348038961351"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="NGOZI ONYEAKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08033979511" || checkPhone === "+2348033979511"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UZOAMAKA OJECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08169317060" || checkPhone === "+2348169317060"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OGECHUKWU NNADI-chinweuba";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08122465854" || checkPhone === "+2348122465854"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Chidimma Nwachukwu";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08060318445" || checkPhone === "+2348060318445"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINENYE EMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08168602674" || checkPhone === "+2348168602674"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ANTHONIA NNAEMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07047519072" || checkPhone === "+2347047519072"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINASA OBAGHA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08141227052" || checkPhone === "+2348141227052"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHRISTIAN NZEDIEGWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08133226742" || checkPhone === "+2348133226742"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EZEBELO OKAFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08068768378" || checkPhone === "+2348068768378"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIKA ASIGBO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09063864439" || checkPhone === "+2349063864439"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IFEANYI IGWEZE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07069772371" || checkPhone === "+2347069772371"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ABIGAIL OKAFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07069437316" || checkPhone === "+2347069437316"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ONYEKA OKOYE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07065071176" || checkPhone === "+2347065071176"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUNWEIKE EGWUATU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08136987701" || checkPhone === "+2348136987701"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UGOCHUKWU IFEATU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07025990562" || checkPhone === "+2347025990562"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="FIDELIA ONUORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08109929508" || checkPhone === "+2348109929508"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ABAYOMI OGINNI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09026697736" || checkPhone === "+2349026697736"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIOMA ILOEGBUNAM";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07048289428" || checkPhone === "+2347048289428"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Onyinye Iloegbunam";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07068798573" || checkPhone === "+2347068798573"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="FRANCISCA ACHUNA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07065279738" || checkPhone === "+2347065279738"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="COSMAS NWACHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07034752352" || checkPhone === "+2347034752352"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MARTIN OKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08024546712" || checkPhone === "+2348024546712"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHRISTIANA ANIKPE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07033318405" || checkPhone === "+2347033318405"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IGWEBUIKE OKONKWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08104667430" || checkPhone === "+2348104667430"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHARITY NWOGU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08069544488" || checkPhone === "+2348069544488"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHARLES IWUORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "09037710145" || checkPhone === "+2349037710145"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EKENE EKWENZE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08169892768" || checkPhone === "+2348169892768"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINONSO ANEKWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08034599086" || checkPhone === "+2348034599086"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JOHN IKECHUKWU ONUORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08035142876" || checkPhone === "+2348035142876"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OSITA IKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07068008393" || checkPhone === "+2347068008393"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PETER EKWEMOZOR OMATALI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08108238333" || checkPhone === "+2348108238333"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="DAMIEL NONSO OKADIGWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08105821820" || checkPhone === "+2348105821820"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PATRICIA ONYEJELU ANEDO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08160002141" || checkPhone === "+2348160002141"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OKECHUKWU NNAEMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08037474483" || checkPhone === "+2348037474483"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="LILIAN NDIDI ALOZOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07068676655" || checkPhone === "+2347068676655"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CLARE CHIDIMMA MONEKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07035966130" || checkPhone === "+2347035966130"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JOEL CHINEDU ONYENWEIFE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "09132735385" || checkPhone === "+2349132735385"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OKECHUKWU IGNATIUS ONYENWEIFE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07037139486" || checkPhone === "+2347037139486"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ANTHONY OKWUDILI NWEKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08107844783" || checkPhone === "+2348107844783"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUKA HENRY EKWUNIFE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08160251370" || checkPhone === "+2348160251370"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OKEY MALACHY nweke";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08069034494" || checkPhone === "+2348069034494"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Faith EHIMARE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08036228012" || checkPhone === "+2348036228012"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHRISTIANA ANAZODO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08037846282" || checkPhone === "+2348037846282"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Florence Okonkwo";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08132470879" || checkPhone === "+2348132470879"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UCHECHI CHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08062993154" || checkPhone === "+2348062993154"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="GODSWILL EKWEOBA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08038905475" || checkPhone === "+2348038905475"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHINELO OKAFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07030445732" || checkPhone === "+2347030445732"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MERCY OGOADIGO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07010312869" || checkPhone === "+2347010312869"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Chidiebube Nweke";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07019934259" || checkPhone === "+2347019934259"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Joy Alazor";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07062461254" || checkPhone === "+2347062461254"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Janet Isah";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08069139302" || checkPhone === "+2348069139302"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="TOCHI OBADIEGWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07033012190" || checkPhone === "+2347033012190"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="DENNIS OKOYE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08039666452" || checkPhone === "+2348039666452"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Daniel Nwokedi";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07037599453" || checkPhone === "+2347037599453"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="MAXWELL ONATE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08066557043" || checkPhone === "+2348066557043"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="BARTHOLOMEW AKWUOBI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08037576024" || checkPhone === "+2348037576024"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="GABRIEL IBEKWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07062238785" || checkPhone === "+2347062238785"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="FELIX IGBOANUGO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07066980721" || checkPhone === "+2347066980721"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IKECHUKWU IFEDIEGWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08030670902" || checkPhone === "+2348030670902"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUDI NWAJUDE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08133634839" || checkPhone === "+2348133634839"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="SYLVESTER EGWUJE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07035383526" || checkPhone === "+2347035383526"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PATRICK DIBUA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08100938350" || checkPhone === "+2348100938350"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EKENE NWIGWE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07038811111" || checkPhone === "+2347038811111"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ONYEBUCHI SAMUEL";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08063092334" || checkPhone === "+2348063092334"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CELESTINE EKWUNIFE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08038973118" || checkPhone === "+2348038973118"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="DANIEL OBAGHA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08169813586" || checkPhone === "+2348169813586"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Peter OKWUTE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08037417267" || checkPhone === "+2348037417267"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ELIAS OBULUM";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08064621185" || checkPhone === "+2348064621185"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PAUL OBIORAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08063605572" || checkPhone === "+2348063605572"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHRISTIAN AKUBUEZE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08034149223" || checkPhone === "+2348034149223"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Ikenna Nwanegbo";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08060418930" || checkPhone === "+2348060418930"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="VICTOR Madiebo";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08034783009" || checkPhone === "+2348034783009"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUMA OFOLE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08138259016" || checkPhone === "+2348138259016"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ONYEMA  OGUGUA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08038785683" || checkPhone === "+2348038785683"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EMMANUEL ALOABOJA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08037360403" || checkPhone === "+2348037360403"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHRISTIAN NKORO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08163001787" || checkPhone === "+2348163001787"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="KINGSLEY ACHEBE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08062450312" || checkPhone === "+2348062450312"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="VINCENT NWASAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08027724486" || checkPhone === "+2348027724486"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="AUGUSTINE NNACHOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08038909147" || checkPhone === "+2348038909147"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="LEONARD  Bernard";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08034506216" || checkPhone === "+2348034506216"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="GABRIEL EKWEALOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08063306581" || checkPhone === "+2348063306581"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="HUMPHREY NWANEGBO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07032564035" || checkPhone === "+2347032564035"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="EMMANUEL NWASAH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08065415859" || checkPhone === "+2348065415859"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PHILIP PHILIP";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08037663399" || checkPhone === "+2348037663399"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="DAVID UZOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07063711702" || checkPhone === "+2347063711702"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="VICTOR IFEANYI IKEM";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08100220422" || checkPhone === "+2348100220422"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="LONGINUS OFODILE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07017782000" || checkPhone === "+2347017782000"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PAUL OKOLO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07032255054" || checkPhone === "+2347032255054"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Dennis Chinweuba";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08033750024" || checkPhone === "+2348033750024"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UCHENNA CHUKWUMA IBEGBU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08038685549" || checkPhone === "+2348038685549"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIOMA UKPOGU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07032126097" || checkPhone === "+2347032126097"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IFEOMA AZUTA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08068264996" || checkPhone === "+2348068264996"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="cecilia dibua";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "07037587013" || checkPhone === "+2347037587013"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIGOZIE CHUKS-NNAEMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08064481996" || checkPhone === "+2348064481996"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHIZOBA NWACHUKWU-NWANKWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08036653122" || checkPhone === "+2348036653122"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHAIRTY ELOBUIKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE";                  
    }

    else if(checkPhone === "08123897763" || checkPhone === "+2348123897763"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="JENNIFER NWEKE";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07039560745" || checkPhone === "+2347039560745"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="UKAMAKA OKOLO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "07034977226" || checkPhone === "+2347034977226"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OGOCHUKWU CHIAHA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08035627705" || checkPhone === "+2348035627705"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="THERESA IKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "07035190260" || checkPhone === "+2347035190260"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CATHERINE Ezioba";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08039100945" || checkPhone === "+2348039100945"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="PAULINA BELLO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08088252998" || checkPhone === "+2348088252998"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="NKIRU MBAMALU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08037961284" || checkPhone === "+2348037961284"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="CHUKWUTO EZIOLISA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "08068179037" || checkPhone === "+2348068179037"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OBIAJULU IDEH";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08036904595" || checkPhone === "+2348036904595"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="DOLORES OKAFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08034740853" || checkPhone === "+2348034740853"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="IKECHUKWU OBIESILI";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "BEANS";                  
    }

    else if(checkPhone === "09150809350" || checkPhone === "+2349150809350"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="LOVETH EMEKA";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08036785151" || checkPhone === "+2348036785151"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="ADA OKONKWO";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }

    else if(checkPhone === "08133470443" || checkPhone === "+2348133470443"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="OKECHUKWU OKAFOR";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE";                  
    }



    else{
        this.style.display ='block';
        warning_alert.style.display ='block';
        Phone_Verify.style.color = "red";
    }
    
});

form02.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.style.display ='none';
    form01.style.display ='none';
    form04.style.display ='none';
    form03.style.display = 'block';
});

form03.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.style.display ='none';
    form01.style.display ='none';
    form02.style.display ='none';
    form04.style.display = 'block';
});

form04.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.style.display ='none';
    form01.style.display ='none';
    form02.style.display ='none';
    form03.style.display ='none';
    modal_submit.style.display = 'block';
    modal_submit.click();
    Section_title.style.display = 'none';
});

