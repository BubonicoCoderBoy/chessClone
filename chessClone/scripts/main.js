import * as pieces from "./mech/pieces.js"
import * as getMoves from "./mech/getPieceMoves.js"
import * as moves from "./mech/moves.js"
import * as tuple from "./mech/tupleCoords.js"
import * as configs from "./configs/conf.js"
import * as rc from "./configs/readConfs.js"
import * as gmSets from "./gameSets.js"

//=======================// seção pra ver se todos os arquivos anexados foram carregados corretamente //=======================//

pieces.loaded()
getMoves.loaded()
moves.loaded()
tuple.loaded()
configs.loaded()
rc.loaded()
gmSets.loaded()

//=======================// seção pra pintar o tabuleiro //=======================//

const $$ = t => document.querySelectorAll(t)

$$('div[id ^= row]:nth-child(odd) > .tiles:nth-child(odd)').forEach(function(arg){arg.style.background = "var(--branco)"}) 	 // pinta todos os filhos ímpares das linhas ímpares
$$('div[id ^= row]:nth-child(even) > .tiles:nth-child(even)').forEach(function(arg){arg.style.background = "var(--branco)"}) // pinta todos os filhos pares das linhas pares
$$('div[id ^= row]:nth-child(odd) > .tiles:nth-child(even)').forEach(function(arg){arg.style.background = "var(--verde)"}) 	 // pinta todos os filhos pares das linhas ímpares
$$('div[id ^= row]:nth-child(even) > .tiles:nth-child(odd)').forEach(function(arg){arg.style.background = "var(--verde)"}) 	 // pinta todos os filhos ípares das linhas pares

//=======================// game init  //=======================//

gmSets.sets.ordinarySet()