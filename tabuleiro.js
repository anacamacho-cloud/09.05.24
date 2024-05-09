var Tabuleiro = {
    constructor (cor, x, y){
        this.cor = cor;
        this.x = x;
        this.y = y;
    }
}
const cor1 = branco;
const cor2 = preto;
alturaPadrao = 30;
larguraPadrao = 30;

const celula1 = new Tabuleiro(cor1, "0", "0", "a", "8", alturaPadrao, larguraPadrao);
const celula2 = new Tabuleiro(cor2, "30", "0", "b", "8", alturaPadrao, larguraPadrao);
const celula3 = new Tabuleiro(cor1, "60", "0", "c", "8", alturaPadrao, larguraPadrao);
const celula4 = new Tabuleiro(cor2, "90", "0", "d", "8", alturaPadrao, larguraPadrao);
const celula5 = new Tabuleiro(cor1, "120", "0", "e", "8", alturaPadrao, larguraPadrao);
const celula6 = new Tabuleiro(cor2, "180", "0", "f", "8", alturaPadrao, larguraPadrao);
const celula7 = new Tabuleiro(cor1, "210", "0", "g", "8", alturaPadrao, larguraPadrao);
const celula8 = new Tabuleiro(cor2, "240", "0", "h", "8", alturaPadrao, larguraPadrao);

const celula9  = new Tabuleiro(cor1, "30", "30", "a", "7", alturaPadrao, larguraPadrao);
const celula10 = new Tabuleiro(cor2, "60", "30", "b", "7", alturaPadrao, larguraPadrao);
const celula11 = new Tabuleiro(cor1, "90", "30", "c", "7", alturaPadrao, larguraPadrao);
const celula12 = new Tabuleiro(cor2, "120", "30", "d", "7", alturaPadrao, larguraPadrao);
const celula13 = new Tabuleiro(cor1, "180", "30", "e", "7", alturaPadrao, larguraPadrao);
const celula14 = new Tabuleiro(cor2, "210", "30", "f", "7", alturaPadrao, larguraPadrao);
const celula15 = new Tabuleiro(cor1, "240", "30", "g", "7", alturaPadrao, larguraPadrao);
const celula16 = new Tabuleiro(cor2, "270", "30", "h", "7", alturaPadrao, larguraPadrao);

const celula17 = new Tabuleiro(cor1, "30", "60", "a", "6", alturaPadrao, larguraPadrao);
const celula18 = new Tabuleiro(cor2, "60", "60", "b", "6", alturaPadrao, larguraPadrao);
const celula19 = new Tabuleiro(cor1, "90", "60", "c", "6", alturaPadrao, larguraPadrao);
const celula20 = new Tabuleiro(cor2, "120","60", "d", "6", alturaPadrao, larguraPadrao);
const celula21 = new Tabuleiro(cor1, "180","60", "e", "6", alturaPadrao, larguraPadrao);
const celula22 = new Tabuleiro(cor2, "210","60", "f", "6", alturaPadrao, larguraPadrao);
const celula23 = new Tabuleiro(cor1, "240","60", "g", "6", alturaPadrao, larguraPadrao);
const celula24 = new Tabuleiro(cor2, "270","60", "h", "6", alturaPadrao, larguraPadrao);

const celula25 = new Tabuleiro(cor1, "30", "90", "a", "5", alturaPadrao, larguraPadrao);
const celula26 = new Tabuleiro(cor2, "60", "90", "b", "5", alturaPadrao, larguraPadrao);
const celula27 = new Tabuleiro(cor1, "90", "90", "c", "5", alturaPadrao, larguraPadrao);
const celula28 = new Tabuleiro(cor2, "120", "90", "d", "5", alturaPadrao, larguraPadrao);
const celula29 = new Tabuleiro(cor1, "180", "90", "e", "5", alturaPadrao, larguraPadrao);
const celula30 = new Tabuleiro(cor2, "210", "90", "f", "5", alturaPadrao, larguraPadrao);
const celula31 = new Tabuleiro(cor1, "240", "90", "g", "5", alturaPadrao, larguraPadrao);
const celula32 = new Tabuleiro(cor2, "270", "90", "h", "5", alturaPadrao, larguraPadrao);

const celula33 = new Tabuleiro(cor1, "30", "120", "a", "4", alturaPadrao, larguraPadrao);
const celula34 = new Tabuleiro(cor2, "60", "120", "b", "4", alturaPadrao, larguraPadrao);
const celula35 = new Tabuleiro(cor1, "90", "120", "c", "4", alturaPadrao, larguraPadrao);
const celula36 = new Tabuleiro(cor2, "120", "120", "d", "4", alturaPadrao, larguraPadrao);
const celula37 = new Tabuleiro(cor1, "180", "120", "e", "4", alturaPadrao, larguraPadrao);
const celula38 = new Tabuleiro(cor2, "210", "120", "f", "4", alturaPadrao, larguraPadrao);
const celula39 = new Tabuleiro(cor1, "240", "120", "g", "4", alturaPadrao, larguraPadrao);
const celula40 = new Tabuleiro(cor2, "270", "120", "h", "4", alturaPadrao, larguraPadrao);

const celula41 = new Tabuleiro(cor1, "30", "180", "a", "3", alturaPadrao, larguraPadrao);
const celula42 = new Tabuleiro(cor2, "60", "180", "b", "3", alturaPadrao, larguraPadrao);
const celula43 = new Tabuleiro(cor1, "90", "180", "c", "3", alturaPadrao, larguraPadrao);
const celula44 = new Tabuleiro(cor2, "120", "180", "d", "3", alturaPadrao, larguraPadrao);
const celula45 = new Tabuleiro(cor1, "180", "180", "e", "3", alturaPadrao, larguraPadrao);
const celula46 = new Tabuleiro(cor2, "210", "180", "f", "3", alturaPadrao, larguraPadrao);
const celula47 = new Tabuleiro(cor1, "240", "180", "g", "3", alturaPadrao, larguraPadrao);
const celula48 = new Tabuleiro(cor2, "270", "180", "h", "3", alturaPadrao, larguraPadrao);

const celula49 = new Tabuleiro(cor1, "30", "210", "a", "2", alturaPadrao, larguraPadrao);
const celula50 = new Tabuleiro(cor2, "60", "210", "b", "2", alturaPadrao, larguraPadrao);
const celula51 = new Tabuleiro(cor1, "90", "210", "c", "2", alturaPadrao, larguraPadrao);
const celula52 = new Tabuleiro(cor2, "120", "210", "d", "2", alturaPadrao, larguraPadrao);
const celula53 = new Tabuleiro(cor1, "180", "210", "e", "2", alturaPadrao, larguraPadrao);
const celula54 = new Tabuleiro(cor2, "210", "210", "f", "2", alturaPadrao, larguraPadrao);
const celula55 = new Tabuleiro(cor1, "240", "210", "g", "2", alturaPadrao, larguraPadrao);
const celula56 = new Tabuleiro(cor2, "270", "210", "h", "2", alturaPadrao, larguraPadrao);

const celula57 = new Tabuleiro(cor1, "30", "240", "a", "1", alturaPadrao, larguraPadrao);
const celula58 = new Tabuleiro(cor2, "60", "240", "b", "1", alturaPadrao, larguraPadrao);
const celula59 = new Tabuleiro(cor1, "90", "250", "c", "1", alturaPadrao, larguraPadrao);
const celula60 = new Tabuleiro(cor2, "120", "240", "d", "1", alturaPadrao, larguraPadrao);
const celula61 = new Tabuleiro(cor1, "180", "240", "e", "1", alturaPadrao, larguraPadrao);
const celula62 = new Tabuleiro(cor2, "210", "240", "f", "1", alturaPadrao, larguraPadrao);
const celula63 = new Tabuleiro(cor1, "240", "240", "g", "1", alturaPadrao, larguraPadrao);
const celula64 = new Tabuleiro(cor2, "270", "240", "h", "1", alturaPadrao, larguraPadrao);





